import {CoachRegisterInterface, RegisterNextStepInterface} from "../../pages/auth/types/RegisterNextStep";

export const validateRegisterNextStep = (state: RegisterNextStepInterface<CoachRegisterInterface>): string | boolean => {
    const {info,role} = state
    if (!role)
        return 'Выберете роль!!!'

    if (role === "Coach") {
        if (
            !info.name
            || !info.surname
            || !info.pc_quality
            || !info.living_address
            || !info.working_address
            || !info.birth
            || !info.nationality
            || !info.langs
            || !info.region
        )
            return "Все поля должны быть заполнены"

        if (
            !info.passport.length
            || !info.preview_img.length
            || !info.diploma_file.length
            || !info.certificate_file.length
            || !info.categories_file.length
        )
            return "Все документы должны быть загруженны"
    }
    return false
};
