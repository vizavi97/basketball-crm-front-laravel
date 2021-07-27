import React, {ChangeEvent, FormEvent, useState} from 'react'
import {Block} from "../../../config/ui/Block";
import {Box, Button, Flex, Grid, Image, Input, Text} from "@chakra-ui/react";
import ImageUploading, {ImageListType} from "react-images-uploading";
import 'react-datepicker/dist/react-datepicker.css'
// @ts-ignore
import DatePicker from "react-datepicker/dist/react-datepicker";

export interface CoachSettingsInterface {
    name: string
    surname: string
    fatherName: string
    birth: string | number | readonly string[] | undefined
    nationality: string
    docs_education: any,
    docs__one: any,
    docs__two: any,
    docs__three: any,

}

export const Settings: React.FC = () => {
    const [disable] = useState<boolean>(false)
    const [form, setForm] = useState<CoachSettingsInterface>({
        name: "",
        surname: "",
        fatherName: "",
        birth: new Date().toLocaleDateString(),
        nationality: "",
        docs_education: [],
        docs__one: [],
        docs__two: [],
        docs__three: [],

    })
    const dateHandler = (date:string) => setForm(state => ({...state, birth: new Date(date).toLocaleDateString()}));

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
                <Text as={'h2'} fontWeight={600} textAlign={"center"} fontSize={"2rem"}>Настройки</Text>
                <form onSubmit={submitHandler}>
                    <Box p={4}>
                        <Text mb="8px">
                            Имя
                        </Text>
                        <Input
                            variant="flushed"
                            value={form.name}
                            name='name'
                            onChange={inputHandler}
                            placeholder="Введите Имя"
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
                            Фамилия
                        </Text>
                        <Input
                            variant="flushed"
                            value={form.surname}
                            name='surname'
                            onChange={inputHandler}
                            placeholder="Введите Фамилию игрока"
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
                            Отчество
                        </Text>
                        <Input
                            variant="flushed"
                            value={form.fatherName}
                            name='fatherName'
                            onChange={inputHandler}
                            placeholder="Введите Отчетсво"
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
                            День рождения!
                        </Text>
                        <DatePicker
                            value={form.birth}
                            onChange={dateHandler}
                        />
                        {/*<Input*/}
                        {/*    as={}*/}
                        {/*    variant="flushed"*/}
                        {/*    value={form.birth}*/}
                        {/*    onChange={dateHandler}*/}
                        {/*    size="sm"*/}
                        {/*    px={2}*/}
                        {/*    isDisabled={disable}*/}
                        {/*    required*/}
                        {/*    _disabled={{*/}
                        {/*        cursor: "not-allowed",*/}
                        {/*    }}*/}
                        {/*/>*/}
                    </Box>
                    <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)"}} alignItems={"center"} justifyContent={"center"}>


                        <Box p={4}>
                            <Text mb="8px">
                                Фотография диплома
                            </Text>
                            <ImageUploading
                                value={form.docs_education}
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
                                        {form.docs_education.length
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

                        <Box p={4}>
                            <Text mb="8px">
                                Сертификат повышения квалификации
                            </Text>
                            <ImageUploading
                                value={form.docs__one}
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
                                        {form.docs__one.length
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

                                                Сертификат повышения квалификации
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


                        <Box p={4}>
                            <Text mb="8px">
                                Документ подтверждающий категория
                            </Text>
                            <ImageUploading
                                value={form.docs__two}
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
                                        {form.docs__two.length
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

                                                Сертификат повышения квалификации
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

                        <Box p={4}>
                            <Text mb="8px">
                                Международний сертификат
                            </Text>
                            <ImageUploading
                                value={form.docs__three}
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
                                        {form.docs__three.length
                                            ? <Button
                                                variant={"outline"}
                                                colorScheme={"red"}
                                                isDisabled={disable}
                                                onClick={onImageRemoveAll}>Удалить</Button>
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

                                                Международний сертификат
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
                    </Grid>

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
                        >Сбросить</Button>
                    </Flex>
                </form>
            </Block>
        </>
    )
}
