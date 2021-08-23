import React, {useState} from 'react'
import {Box, Select, Text} from "@chakra-ui/react";
import {Coach} from "./register-next-step-cases/Coach";


export const RegisterNextStep: React.FC = () => {
    return (
        <Box w={'100%'}>
            <Text fontSize='1.5rem'>Второй этап Регистрации</Text>
            <Text fontSize='0.785rem'>Чтобы окончить регистраницию просим Вас заполнить следущие поля</Text>
            <Coach/>
        </Box>
    )
}
