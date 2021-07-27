import React from 'react'
import {Link as RouterLink, useHistory} from "react-router-dom";
import {Box, Text, Link as ChakraLink, useColorMode} from "@chakra-ui/react";

interface LinkInterface {
    name: string
    path: string
}

export const Link: React.FC<LinkInterface> = ({
                                                  name,
                                                  path,
                                                  children
                                              }) => {
    const history = useHistory()
    const pathname = history.location.pathname;
    const {colorMode} = useColorMode();
    const iconColor = colorMode === 'light' ? "#1c283b" : "#fff"
    return (
        <>
            <ChakraLink as={RouterLink} to={path}
                  px={'1.25rem'}
                  d='flex'
                  alignItems='center'
                  py='.875rem'
                  _focus={{}}
                        _hover={{
                            color: '#e41e23',
                            "& path": {fill: '#e41e23!important'}
                        }}
                        sx={{
                            color: pathname === path ? "#e41e23" : iconColor,
                            "& path": {fill: pathname === path ? "#e41e23" : iconColor}
                        }}
            >
                <Box w={5}>
                    {children}
                </Box>
                <Text pl={'1rem'}>{name}</Text>
            </ChakraLink>
        </>
    )
}
