import React, {ChangeEvent, FormEvent, useState} from 'react'
import {Block} from "../../../config/ui/Block";
import {Button, Text, useToast} from "@chakra-ui/react";
import 'react-datepicker/dist/react-datepicker.css'
// @ts-ignore
import DatePicker from "react-datepicker/dist/react-datepicker";
import {InputField} from "../../../components/InputField";
import {RootStateOrAny, useSelector} from "react-redux";

export interface CoachSettingsInterface {
}

export const Settings: React.FC = () => {
    const toast = useToast()
    const [form, setForm] = useState<CoachSettingsInterface>({})
    const {user} = useSelector((state:RootStateOrAny) => state.user)
    const refLink = (window.location.origin as unknown as string) + "/register?ref=" + user.id
    const inputHandler = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target
        setForm(state => ({
            ...state,
            [name]: value
        }))
    }
    const copyHandler = () => {
        navigator.clipboard.writeText(refLink)
        toast({
            title: "Успешно",
            position: "top",
            description: "Адрес реферальной ссылки успешно сохранен в буфер обмена",
            status: "info",
            duration: 7000,
            isClosable: true,
        })
    }
    return (
        <>
            <Text as={'h2'} fontWeight={600} textAlign={"center"} fontSize={"2rem"}>Настройки</Text>
            <Block py={6} px={2} maxW={{md: "540ox", xs: "100%"}}>
                    <InputField value={refLink}
                                label={'Ваша реферальная ссылка'}
                                placeholder={'Ваша реферальная ссылка'}
                                name={'ref-link'}
                                type={"text"}
                                disable={true}
                                onChange={inputHandler}
                    />
                    <Button onClick={copyHandler}>Скопировать ссылку</Button>
            </Block>
        </>
    )
}
