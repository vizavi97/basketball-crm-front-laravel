import {Flex, Image, Link} from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom'
import React from 'react'
import {RouterLinks} from "./RouterLinks";
import { Block } from '../../../config/ui/Block';
import logo from '../../../assets/images/logo.png'

export const SideBar: React.FC = () => {
    return (
            <Flex flexDirection='column' w='100%' py={'1.25rem'}>
                <Block variant={'empty'} w={'100%'} mb={"1.75rem"}>
                    <Link as={RouterLink}
                          to={'/'}
                          fontWeight={600}
                          fontSize='1.5rem'
                          letterSpacing='3.6px'
                          px={'1.25rem'}
                          d='block'
                          _hover={{
                              color: '#36AB7E'
                          }}
                          _focus={{}}
                    >
                        <Image src={logo}/>
                    </Link>
                </Block>
                <RouterLinks/>
            </Flex>
    )
};
