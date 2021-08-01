import React, {ChangeEvent, FormEvent, useState} from 'react'
import {Block} from "../../../config/ui/Block";
import {Box, Button, Flex, Input, Select, Text, Image} from "@chakra-ui/react";
import ImageUploading, {ImageListType} from "react-images-uploading";
import {InputField} from "../../../components/InputField";

interface CreateTeamInterface {
}

interface CreateTeamFormInterface {

}

interface SelectTeamFormInterface {
    title: string
    gender?: string
    type?: string
    age?: string
}

const genderArr = [
    {
        title: "Женская команда",
        gender: 'women'
    },
    {
        title: "Мужская команда",
        gender: 'men'
    },
] as SelectTeamFormInterface[]

const typeArr = [
    {
        title: "5x5",
        type: '5x5'
    },
    {
        title: "3x3",
        gender: '3x3'
    },
] as SelectTeamFormInterface[]

const ageArr = [
    {
        title: "U16",
        age: "U16"
    },
    {
        title: "U18",
        age: "U18"
    },
    {
        title: "Взрослые",
        age: "OLDER"
    },
] as SelectTeamFormInterface[]


export const CreateTeam: React.FC<CreateTeamInterface> = () => {
    const [disable, setDisable] = useState<boolean>(false)
    const [form, setForm] = useState<CreateTeamFormInterface>({
    })
    const inputHandler = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target
        setForm(state => ({...state,[name]: value}))
    }

    const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target
        setForm(state => ({
            ...state,
                [name]: value
        }))
    };
    const imageUploaderHandler = (imageList: ImageListType) => setForm(state => ({
        ...state,
        icon: imageList as never[]
    }));
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('submitHandler')
    }

    return (
        <>
            <Block py={6} maxW={{md: "540ox", xs: "100%"}}>
                <Text as={'h2'} fontWeight={600} textAlign={"center"} fontSize={"2rem"}>Форма создания команды</Text>
                {/*<form onSubmit={submitHandler}>*/}
                {/*    <InputField onChange={inputHandler} value={form.info.name} label={"Имя"} placeholder={"Имя"} name={"name"}*/}
                {/*                type={"text"} disable={disable}/>*/}
                {/*    <InputField onChange={inputHandler} value={form.info.surname} label={"Фамилия"} placeholder={"Фамилия"}*/}
                {/*                name={"surname"} type={"text"} disable={disable}/>*/}
                {/*    <InputField onChange={inputHandler} value={form.info.living_address} label={"Место проживания"}*/}
                {/*                placeholder={"Место проживания"} name={"living_address"} type={"text"} disable={disable}/>*/}
                {/*    <InputField onChange={inputHandler} value={form.info.working_address} label={"Место работы"}*/}
                {/*                placeholder={"Место работы"} name={"working_address"} type={"text"} disable={disable}/>*/}
                {/*    <InputField onChange={inputHandler} value={form.info.nationality} label={"Национальность"}*/}
                {/*                placeholder={"Национальность"} name={"nationality"} type={"text"} disable={disable}/>*/}
                {/*    <Select placeholder="Владение компьютером *"*/}
                {/*            name={"pc_quality"}*/}
                {/*            onChange={selectHandler}*/}
                {/*            mt={2}>*/}
                {/*        <option value="h">Высокий (Полностью понимаю)</option>*/}
                {/*        <option value="m">Средний (Знаю азы - Word, excel, и другие основные программы)</option>*/}
                {/*        <option value="l">Низкий (Знаю как включать)</option>*/}
                {/*        <option value="n">Никогда не пользовался</option>*/}
                {/*    </Select>*/}
                {/*    <Flex justifyContent={"center"} alignItems={"center"}>*/}

                {/*        <Button variant={"outline"}*/}
                {/*                colorScheme={"teal"}*/}
                {/*                isDisabled={disable}*/}
                {/*                type={"submit"}*/}
                {/*                mx={2}*/}
                {/*        >*/}
                {/*            Подтвердить</Button>*/}
                {/*        <Button variant={"outline"}*/}
                {/*                colorScheme={"red"}*/}
                {/*                isDisabled={disable}*/}
                {/*                type={"reset"}*/}
                {/*                mx={2}*/}
                {/*        >*/}
                {/*            Сбросить</Button>*/}
                {/*    </Flex>*/}
                {/*</form>*/}
            </Block>
        </>
    )
}
