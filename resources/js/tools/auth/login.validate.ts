import {LoginInterface} from "../../pages/auth/Login";
import {CoachRegisterInterface} from "../../pages/auth/types/RegisterNextStep";

export const validateLogin = (state: LoginInterface): string | boolean => {
    if (!state.email.length || !state.password.length) {
        return 'Все поля должны быть заполнены!'
    }
    if (state.email.length < 5 || !state.email.includes('@')) {
        return "Поле должно включать в себя символ - '@'"
    }
    if (state.password.length < 7) {
        return "Пароль должен быть длинее чем 7 символов"
    }
    return false
};

export const validateRegisterNextStep = (state: CoachRegisterInterface, role: string): string | boolean => {
    if (!role) {
        return 'Выберете роль!!!'
    }
    if (role === "coach") {
        if(!state.name || !state.surname) {
            return "Все поля должны быть заполнены"
        }
        return false
    }
    return false
};
