import {Dispatch} from "react";
import {DispatchEvent} from "../redux";
import {CreatePlayerFormInterface} from "../../pages/private/staff/CreatePlayer";
import axios from "axios";
import {BACKEND_API_URL} from "../../config/app.config";
import {CREATE_PLAYER, DELETE_PLAYER, GET_PLAYERS, LOADING_PLAYERS} from "../types/player.types";
import {LOGIN_USER} from "../types/user.types";

export const createPlayer = (params: CreatePlayerFormInterface) => async (dispatch: Dispatch<DispatchEvent<any>>) => {
    const formData = new FormData();
    Object.entries(params).forEach(
        ([key, value]) => {
            if (key === "preview_img") {
                formData.append(key, value[0].file)
            } else {
                formData.append(key, value)
            }
        }
    );
    const coachId = localStorage.getItem('coach_id') ?? ' ';
    const token = localStorage.getItem('token') ?? ' ';
    formData.append("coach_id", coachId)
    formData.append("token", token)
    await axios.post(`${BACKEND_API_URL}player/create`, formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    )
        .then(resp => {
            console.log(resp.data.user)
            if(resp.data.is_activated) {
                dispatch({
                    type: LOGIN_USER,
                    payload: {
                        user: {...resp.data.user, role: resp.data.user.groups[0].code},
                        token: localStorage.getItem('token'),
                        loader: false,
                        error: false,
                        message: "Добро пожаловать Игрок",
                        renderCounter: 1
                    }
                })
            }
        })
        .catch(error => console.log("error", error))
}
export const getPlayers = (coach_id: string | number) => async (dispatch: Dispatch<DispatchEvent<any>>) => {
    dispatch({
        type: LOADING_PLAYERS,
        payload: {
            loader: true
        }
    })
    await axios.post(`${BACKEND_API_URL}player/get-players`, {
            coach_id
        }
    )
        .then(resp => {
            dispatch({
                type: GET_PLAYERS,
                payload: {
                    players: resp.data.players
                }
            })
        })
        .catch(resp => console.log("reso", resp))
        .finally(() =>
            dispatch({
                type: LOADING_PLAYERS,
                payload: {
                    loader: false
                }
            }))
}
export const deletePlayer = (player_id: string | number) => async (dispatch: Dispatch<DispatchEvent<any>>) => {
    if (player_id) {
        dispatch({
            type: LOADING_PLAYERS,
            payload: {
                loader: true
            }
        })
        await axios.post(`${BACKEND_API_URL}player/delete`, {
                id: player_id
            }
        )
            .then(resp => {
                dispatch({
                    type: DELETE_PLAYER,
                    payload: {
                        id: player_id
                    }
                })
            })
            .catch(resp => console.log("reso", resp))
            .finally(() =>
                dispatch({
                    type: LOADING_PLAYERS,
                    payload: {
                        loader: false
                    }
                }))
    }
}
