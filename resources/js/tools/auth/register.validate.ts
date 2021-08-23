import {RegisterFormInterface} from "../../pages/auth/Register";

export const validateRegister = (state: RegisterFormInterface): string | boolean => {
    if (!state.email.length || !state.name.length || !state.password.length) {
        return 'Все поля должны быть заполнены!'
    }
    if (state.email.length < 5 || !state.email.includes('@')) {
        return "Поле должно включать в себя символ - '@'"
    }
    if (!state.phone.length || !state.name.length || !state.password.length) {
        return 'Все поля должны быть заполнены!'
    }
    if (state.phone.length < 9) {
        return "Телефонный номер должен быть длинее чем 9 символов"
    }
    if (state.password_confirmation !== state.password) {
        return 'Пароли не совпадают'
    }
    if (!state.privacy) {
        return 'Пожалуйста ознакомтесь с политикой сайта'
    }
    if (state.password.length < 7) {
        return "Пароль должен быть длинее чем 7 символов"
    }
    return false
};