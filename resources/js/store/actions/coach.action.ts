import {Dispatch} from "react";
import {DispatchEvent} from "../redux";
import {BACKEND_API_URL} from "../../config/app.config";
import axios from "axios";
import {CoachRegisterInterface} from "../../pages/auth/types/RegisterNextStep";
import {LOGIN_USER} from "../types/user.types";

export const coachRegister = (params: CoachRegisterInterface) => async (dispatch: Dispatch<DispatchEvent<any>>) => {
    const formData = new FormData();
    Object.entries(params).forEach(([key, value]) => {
            if (key === "preview_img"
                || key === "passport"
                || key === "diploma_file"
                || key === "certificate_file"
                || key === "categories_file"
                || key === "international_file"
                || key === "other_files" && params.other_files.length
            ) {
                formData.append(key, value[0].file)
            } else {
                formData.append(key, value)
            }
        });
    const token = localStorage.getItem('token') ?? " ";
    formData.append("token",  token);
    await axios.post(`${BACKEND_API_URL}coach-register`,formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
        )
        .then(resp => {
            if(resp.data.is_activated) {
                dispatch({
                    type: LOGIN_USER,
                    payload: {
                        user: {...resp.data.user, role: resp.data.user.groups[0].code},
                        token: localStorage.getItem('token'),
                        loader: false,
                        error: false,
                        message: "Добро пожаловать Тренер",
                        renderCounter: 1
                    }
                })
            }
        })
        .catch(err => console.log("ERR", err))
}
