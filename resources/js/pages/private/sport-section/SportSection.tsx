import React, {useState} from 'react'
import {TeamsCard, TeamsCardInterface} from "../team/TeamsCard";
import {Button, Flex, Grid} from "@chakra-ui/react";
import {SkeletonStack} from "../../../components/ui/skeleton/SkeletonStack";
import {CreateSportSection} from "./CreateSection";

interface SportSectionInterface {
}

export const SportSection: React.FC<SportSectionInterface> = () => {
    const [create, setCreate] = useState<boolean>(false)
    const [arr, setArr] = useState<TeamsCardInterface[] | []>([{
        icon: "",
        name: ""
    }])
    return (
        <>
            <Flex mb={4} justifyContent={"flex-end"}>
                <Button colorScheme={create ? "orange" : "blue"} variant="solid" size={'lg'}
                        onClick={() => setCreate(prevState => !prevState)}>
                    {create ? "Отменить" : "Создать Секцию"}
                </Button>
            </Flex>
            {create
                ? <CreateSportSection/>
                : <Grid
                    templateColumns={{base: 'repeat(1, 1fr)', md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}}
                    gap={6}>
                    {arr.length ? arr.map((item, key: number) => <TeamsCard
                            key={key}
                            icon='https://i.pinimg.com/originals/c7/5c/28/c75c28559e048ecb2e0c232a374ebaa2.jpg'
                            name='Real madrid'/>
                        ) :
                        <SkeletonStack length={3}/>
                    }
                </Grid>
            }

        </>
    )
}
