import {Dispatch} from "react";
import {DispatchEvent} from "../redux";
import {BACKEND_API_URL} from "../../config/app.config";
import axios from "axios";
import {CoachRegisterInterface} from "../../pages/auth/types/RegisterNextStep";
import {ACTIVATE_USER, REGISTER_USER} from "../types/user.types";
import {GET_COACH_PROFILE} from "../types/coach.types";

export const coachRegister = (params: CoachRegisterInterface,user_id: string) => async (dispatch: Dispatch<DispatchEvent<any>>) => {
    const formData = new FormData();
    formData.append("name", params.name)
    formData.append("user_id", user_id)
    formData.append("surname", params.surname)
    formData.append("position", params.position)
    formData.append("pc_quality", params.pc_quality)
    formData.append("langs", params.langs)
    formData.append("living_address", params.living_address)
    formData.append("working_address", params.working_address)
    formData.append("birth", params.birth as string)
    formData.append("nationality", params.nationality)
    formData.append("preview_img", params.preview_img[0].file)
    formData.append("passport", params.passport[0].file)
    formData.append("diploma_file", params.diploma_file[0].file)
    formData.append("certificate_file", params.certificate_file[0].file)
    formData.append("categories_file", params.categories_file[0].file)
    formData.append("international_file", params.international_file[0].file)
    formData.append("other_files", params.other_files[0].file)

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
                    type: ACTIVATE_USER,
                    payload: {}
                })
            }
        })
        .catch(resp => console.log("reso", resp))

}


export const getCoachInfo = (params: CoachRegisterInterface,user_id: string) => async (dispatch: Dispatch<DispatchEvent<any>>) => {

    await axios.post(`${BACKEND_API_URL}get-coach-profile`, {
        token: localStorage.getItem('token')
        }
    )
        .then(resp => {
            dispatch({
                type: GET_COACH_PROFILE,
                payload: {
                    coach: resp.data.coach
                }
            })
        })
        .catch(resp => console.log("reso", resp))

}
