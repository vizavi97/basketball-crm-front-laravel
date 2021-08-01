import {Dispatch} from "react";
import {DispatchEvent} from "../redux";
import {BACKEND_API_URL} from "../../config/app.config";
import axios from "axios";
import {CoachRegisterInterface} from "../../pages/auth/types/RegisterNextStep";
import {ACTIVATE_USER, REGISTER_USER} from "../types/user.types";

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


    // const data = {
    //         name: params.name,
    //         surname: params.surname,
    //         position: params.position,
    //         pc_quality: params.pc_quality,
    //         langs: params.langs,
    //         living_address: params.living_address,
    //         working_address: params.working_address,
    //         birth: params.birth,
    //         nationality: params.nationality,
    //         preview_img: params.preview_img[0].file, //params.preview_img[0].file,
    //         // passport: params.passport[0],
    //         // diploma_file: params.diploma_file[0],
    //         // certificate_file: params.certificate_file[0],
    //         // categories_file: params.categories_file[0],
    //         // international_file: params.international_file[0],
    //         // other_files: params.other_files[0]
    //     };


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
