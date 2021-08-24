import React from 'react'
import {Block} from "../../../config/ui/Block";
import {RootStateOrAny, useSelector} from "react-redux";

interface PlayerInterface {}

export const Player: React.FC<PlayerInterface> = () => {
    const info = useSelector((state:RootStateOrAny) => state)
    console.log(info)
    return (
        <>
            <Block>
                tim
            </Block>
        </>
    )
}