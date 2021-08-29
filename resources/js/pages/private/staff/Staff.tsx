import React, {useState} from 'react'
import {Button, Flex, Grid} from "@chakra-ui/react";
import {PlayerCard} from "./PlayerCard";
import {SkeletonStack} from "../../../components/ui/skeleton/SkeletonStack";
import {CreatePlayerFormInterface} from "./CreatePlayer";
import {RootStateOrAny, useSelector} from "react-redux";


export const Staff: React.FC = () => {
    const {player} = useSelector((state: RootStateOrAny) => state)
    return (
        <>
            <Grid
                templateColumns={{base: 'repeat(1, 1fr)', md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}}
                gap={6}>
                {player.loader
                    ? <SkeletonStack length={3}/>
                    : player.players.length ? player.players.map((item: CreatePlayerFormInterface, key: number) =>
                        <PlayerCard
                            key={key}
                            id={item.id ?? ""}
                            icon={item.preview_img.path}
                            name={item.name} surname={item.surname} number={item.game_number}
                            position={item.position}/>) : null
                }
            </Grid>
        </>
    )
}
