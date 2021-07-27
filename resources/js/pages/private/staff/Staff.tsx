import React, {useState} from 'react'
import {Button, Flex, Grid} from "@chakra-ui/react";
import {PlayerCard, PlayerCardInterface} from "./PlayerCard";
import {SkeletonStack} from "../../../components/ui/skeleton/SkeletonStack";
import {CreatePlayer} from "./CreatePlayer";


export const Staff: React.FC = () => {
    const [create, setCreate] = useState<boolean>(true)
    const [arr, setArr] = useState<PlayerCardInterface[] | []>([{
        icon: "",
        name: "",
        surname: "",
        position: "",
        number: 10,
    }])
    return (
        <>
            <Flex mb={4} justifyContent={"flex-end"}>
                <Button colorScheme={create ? "orange" : "blue"} variant="solid" size={'lg'}
                        onClick={() => setCreate(prevState => !prevState)}>
                    {create ? "Отменить" : "Добавить Игрока"}
                </Button>
            </Flex>
            {create
                ? <CreatePlayer/>
                : <Grid
                    templateColumns={{base: 'repeat(1, 1fr)', md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}}
                    gap={6}>
                    {arr.length ? arr.map((item, key: number) => <PlayerCard
                            icon='http://basketball.vizavi97.tmweb.ru/storage/app/uploads/public/609/570/bf6/609570bf6ba94977801792.png'
                            name='Мухаммадали' surname='Мамарасулов' number={7} position="Лёгкий форвард"/>) :
                        <SkeletonStack length={3}/>
                    }
                </Grid>
            }
        </>
    )
}
