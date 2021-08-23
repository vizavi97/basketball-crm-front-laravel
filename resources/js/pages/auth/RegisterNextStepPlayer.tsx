import React from 'react'
import {Box, Select, Text} from "@chakra-ui/react";
import {CreatePlayer} from "../private/staff/CreatePlayer";


export const RegisterNextStepPlayer: React.FC = () => {
    return (
        <Box w={'100%'}>
            <Text fontSize='1.5rem'>Второй этап Регистрации Игрока</Text>
            <Text fontSize='0.785rem'>Чтобы окончить регистраницию просим Вас заполнить следущие поля</Text>
            <CreatePlayer/>
        </Box>
    )
}
