import {DispatchEvent} from "../redux";
import {CoachDefaultStateInterface} from "../interfaces/coach";



const initialState = {
    coach: null,
    loader: false,
    error: false,
    message: '',
} as CoachDefaultStateInterface

export const coachReducer = (state = initialState, action: DispatchEvent<any>) => {
    const {type, payload} = action
    switch (type) {
        default:
            return state
    }

}
