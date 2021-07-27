import React, {ChangeEvent, FormEvent, useState} from 'react'
import {Block} from "../../../config/ui/Block";
import {Box, Button, Flex, Input, Select, Text, Image} from "@chakra-ui/react";
import ImageUploading, {ImageListType} from "react-images-uploading";

interface CreateTeamInterface {
}

interface CreateTeamFormInterface {
    address: string,
    icon: any
    gender: 'women' | 'men' | '' | string
    type: '5x5' | '3x3' | '' | string
    age: "U16" | "U18" | "OLDER" | "" | string
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


export const CreateSportSection: React.FC<CreateTeamInterface> = () => {
    const [disable, setDisable] = useState<boolean>(false)
    const [form, setForm] = useState<CreateTeamFormInterface>({
        address: "",
        gender: "",
        type: "",
        age: "",
        icon: []
    })
    const inputHandler = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target
        setForm(state => ({
            ...state,
            [name]: value
        }))
    }
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
                <Text as={'h2'} fontWeight={600} textAlign={"center"} fontSize={"2rem"}>Создание секции</Text>
                <form onSubmit={submitHandler}>
                    <Box p={4}>
                        <Text mb="8px">
                            Адрес команды (Область или Город, Поселок или населеный пункт, Улица, Строение )
                        </Text>
                        <Input
                            variant="flushed"
                            value={form.address}
                            name='address'
                            onChange={inputHandler}
                            placeholder="Введите название команды"
                            size="sm"
                            px={2}
                            isDisabled={disable}
                            required
                            _disabled={{
                                cursor: "not-allowed",
                            }}
                        />
                    </Box>

                    <Box p={4}>
                        <Text mb="8px">
                            Возрастная группа команды
                        </Text>
                        <Select
                            variant="flushed"
                            name='age'
                            px={2}
                            value={form.age}
                            onChange={inputHandler}
                            required
                            placeholder="Выберете возрастную группа команды"
                        >
                            {typeArr.map((item, key: number) => <option key={key}
                                                                        value={item.type}>{item.title}</option>)}
                        </Select>
                    </Box>
                    <Box p={4}>
                        <Text mb="8px">
                            тип команды
                        </Text>
                        <Select
                            variant="flushed"
                            name='type'
                            px={2}
                            value={form.type}
                            onChange={inputHandler}
                            required
                            placeholder="Выберете тип  команды"
                        >
                            {typeArr.map((item, key: number) => <option key={key}
                                                                        value={item.type}>{item.title}</option>)}
                        </Select>
                    </Box>
                    <Box p={4}>
                        <Text mb="8px">
                            Пол команды
                        </Text>
                        <Select
                            variant="flushed"
                            name='gender'
                            px={2}
                            value={form.gender}
                            onChange={inputHandler}
                            required
                            placeholder="Выберете пол команды"
                        >
                            {genderArr.map((item, key: number) => <option key={key}
                                                                          value={item.gender}>{item.title}</option>)}
                        </Select>
                    </Box>
                    <Box p={4}>
                        <Text mb="8px">
                            Фотография спортивной-секции
                        </Text>
                        <ImageUploading
                            value={form.icon}
                            onChange={imageUploaderHandler}
                            maxNumber={1}
                        >
                            {({
                                  imageList,
                                  onImageUpload,
                                  onImageRemoveAll,
                                  isDragging,
                                  dragProps
                              }) => (
                                // write your building UI
                                <Flex
                                    w='100%'
                                    h='320px'
                                    maxW='320px'
                                    flexDirection={'column'}>
                                    {form.icon.length
                                        ? <Button
                                            variant={"outline"}
                                            colorScheme={"red"}
                                            isDisabled={disable}
                                            onClick={onImageRemoveAll}>Удалить Логотип</Button>
                                        : <Button
                                            colorScheme={"telegram"}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                            variant={isDragging ? "ghost" : "outline"}
                                            isDisabled={disable}
                                            w='100%'
                                            h='100%'
                                            maxW='auto'
                                        >
                                            Нажмите или перетащите
                                            сюда <br/>

                                            фотографию команды
                                        </Button>}
                                    {imageList.map((image, index) => (
                                        <Flex
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            mt={4}
                                            w='100%'
                                            h='100%'
                                            border={'1px solid #007ab8'}
                                            p={'1.5rem'}
                                            key={index}
                                            borderRadius={'.625rem'}>
                                            <Box>
                                                <Image src={image.dataURL}/>
                                            </Box>
                                        </Flex>
                                    ))}
                                </Flex>
                            )}
                        </ImageUploading>
                    </Box>


                    <Flex justifyContent={"center"} alignItems={"center"}>

                        <Button variant={"outline"}
                                colorScheme={"teal"}
                                isDisabled={disable}
                                type={"submit"}
                                mx={2}
                        >
                            Подтвердить</Button>
                        <Button variant={"outline"}
                                colorScheme={"red"}
                                isDisabled={disable}
                                type={"reset"}
                                mx={2}
                        >
                            Сбросить</Button>
                    </Flex>
                </form>
            </Block>
        </>
    )
}
