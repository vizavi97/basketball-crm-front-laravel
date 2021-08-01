import {DispatchEvent} from "../redux";
import {PlayerDefaultStateInterface, PlayerFieldsInterface} from "../interfaces/player";
import {CREATE_PLAYER} from "../types/player.types";



const initialState = {
    players: [],
    loader: false,
    error: false,
    message: '',
} as PlayerDefaultStateInterface

export const playerReducer = (state = initialState, action: DispatchEvent<any>) => {
    const {type, payload} = action
    switch (type) {
        case CREATE_PLAYER:
            return  {
                ...state,
                players: state.players.push(
                    payload.player as PlayerFieldsInterface as never
                )
            }
        default:
            return state
    }

}
