import {Dispatch} from "react";
import {DispatchEvent} from "../redux";
import {CreatePlayerFormInterface} from "../../pages/private/staff/CreatePlayer";

export const createPlayer = (params: CreatePlayerFormInterface,coach_id: string | number) => async (dispatch: Dispatch<DispatchEvent<any>>) => {
    const formData = new FormData();
    Object.entries(params).forEach(
        ([key, value]) =>
        {
            if(key === "preview_img"){
                formData.append(key, value[0].file)
            }
            else {
                formData.append(key, value)
            }
        }
    );
    console.log(coach_id)


    // await axios.post(`${BACKEND_API_URL}coach-register`,formData,
    //     {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //     }
    //     )
    //     .then(resp => {
    //         if(resp.data.is_activated) {
    //             dispatch({
    //                 type: ACTIVATE_USER,
    //                 payload: {}
    //             })
    //         }
    //     })
    //     .catch(resp => console.log("reso", resp))

}
