import React, {useState} from 'react'
import {useColorMode} from '@chakra-ui/react';
import {Block} from "../../../config/ui/Block";
import {SideLink} from "./Link";
import {useHistory} from "react-router-dom";


export const PlayerRouterLinks: React.FC = () => {
    const {colorMode} = useColorMode();
    const iconColor = colorMode === 'light' ? "#1C273C" : "#fff"
    const history = useHistory()
    const [pathname, setPathname] = useState<string>(history.location.pathname);
    return (
        <Block variant={'empty'} w={'100%'} className={'nav-links'}>
            <SideLink name={"Кабинет"} history_path={pathname} onClick={() => setPathname(() => '/')} path={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                     id="Capa_1" x="0px" y="0px" width="20" height="20" viewBox="0 0 958 958"
                >
                    <path
                        fill={iconColor}
                        d="M755.8,482.6c-17.5-17.5-37.9-31.299-60.6-40.9c-23.5-10-48.5-15-74.2-15h-14.601c-1.899-4.1-4.1-8.1-6.5-12.1    c-0.199-0.4-2-3.2-3.3-3.8c-1.3-0.5-4.399-0.2-5.7,1.399c-0.699,0.9-0.399,3.2-0.1,4.601c0.6,3.3,1.3,6.6,1.9,9.899    c1.199,6.4,2.399,12.7,2.5,19.101c0.1,2.5,0,5-0.301,7.5c-0.1,1.1-0.3,2.3-0.5,3.5c-0.8,4.2-2.199,8.399-4.5,12.8    c-0.5,0.9-1,1.9-1.6,2.9c-2.3,3.1-4.9,6.5-7.8,10.099c-16.9,20.701-46,49.301-92.2,77.6c-1,0.602-1.899,1.201-2.899,1.801    s-2.101,1.301-3.2,2c-1.3,0.801-2.601,1.699-3.8,2.6c-0.7,0.5-1.4,1-2.101,1.5c-2,1.5-3.899,3.1-5.6,4.701    c-1.2,1.199-2.101,2.6-2.8,4.1c-1.5,3.299-1.801,7.199-1.801,10.9c0,0.299,0,0.6,0,0.898c0,0.5,0,1,0,1.5    c0,1.102,0.101,3.4,0.101,6.602c0,2.199,0,4.898,0,7.898c0.1,23,0,65.801,0,85.301c0,6.1,0,12.301,0,18.4    c0,5.699,4.2,10.299,9.399,10.299h7.801c5.199,0,9.399-4.6,9.399-10.299c0,0,0-109.6,0-109.801c0-5,2.2-8.699,5.4-11.699    c3.399-3.201,7.8-5.701,11.8-7.9c7.9-4.4,16.8-9.699,26.1-15.5c14.8-9.301,30.7-20.199,45.3-32.1c2.101-1.701,4.9-2.9,7.9-3.5    c0.2-0.1,0.5-0.1,0.8-0.1c0.5-0.102,1.101-0.102,1.601-0.102c2.899,0,6.5,0.801,9.899,1.701c2.101,0.6,4.101,1.199,5.8,1.799    l9.2,3c3.8,1.201,9,3.201,12.2,3.201c1.2,0,2.2-0.301,2.7-1l0,0c1.3-0.801,2-2.301,1.4-4.301c-6-17.699-8.801-36.4-12.301-54.9    c-1-5.1-2-10.1-3.1-15.1c-0.4-1.7-0.8-3.3-1.2-5h4.5c88.8,0,160.7,72,160.7,160.701V862.1c0,44.4-151.2,66.6-302.4,66.6    C327.9,928.699,176.7,906.5,176.7,862.1V617.4c0-88.801,72-160.701,160.7-160.701h5.8c-0.5,2.101-1,4.2-1.4,6.301    c-1,4.699-2,9.5-2.8,14.3c-3,16.2-5.6,32.5-10.4,48.2l-1.8,4.801c-1.7,4.199-0.5,7,2.8,7c0.7,0,1.601-0.102,2.5-0.4l24.601-8    l3.6-1.201c1.3-0.398,2.8-0.6,4.4-0.6c1.2,0,2.399,0.1,3.6,0.301c3.2,0.6,6.3,1.9,8.5,3.699c14.5,11.9,30.3,22.701,45,32    C432.7,570,443.1,576,451.9,580.9c0.3-2.201,0.699-4.5,1.399-6.801c1.101-3.4,2.8-6.9,5.601-10c0.5-0.5,0.899-1,1.399-1.6    c1.3-1.301,2.7-2.6,4.3-3.9c-43.5-27.6-70.6-56.1-86.5-76.5c-3.5-4.5-6.5-8.599-9-12.299c-0.199-0.3-0.3-0.7-0.5-1    c-1.8-4.101-2.899-8.101-3.5-12.101c-0.199-1.1-0.3-2.199-0.399-3.399c-0.2-2.5-0.3-5-0.2-7.5c0.2-6.4,1.3-12.8,2.5-19.2    c0.7-3.7,1.4-7.3,2.1-10.9c0.2-1.399-0.199-2.6-0.899-3.5c-1.3-1.6-4.4-2-5.601-1.5C361.9,411,361.2,411.5,360.7,412.3    c-0.7,1.1-1.4,2.2-2,3.3c-2.101,3.6-3.9,7.2-5.601,10.9H337.4c-25.7,0-50.7,5-74.2,15c-22.7,9.6-43.1,23.399-60.6,40.9    c-17.5,17.5-31.3,37.9-40.9,60.6c-10,23.5-15,48.5-15,74.199V861.5c0,9,2.5,22.6,14.6,35.801c6.9,7.6,16,14.1,27.9,20.1    c18.4,9.299,44.1,17.199,76.2,23.4C322.1,951.9,398,958,479,958s157-6.1,213.6-17.199c32.2-6.301,57.801-14.201,76.2-23.4    c11.9-6,21-12.5,27.9-20.1C808.8,884,811.3,870.5,811.3,861.5V617.4c0-25.701-5-50.701-15-74.201    C787.1,520.5,773.3,500.1,755.8,482.6z"/>
                    <path
                        fill={iconColor}
                        d="M321,305c3.8,9,7,18.9,13.3,26.4c4.4,5.3,11.3,9,18.2,10.1c16,25.6,27.7,55.1,29.8,85.2c0.5,6.9,0.4,13.801-0.2,20.801    c-0.3,3.1-0.6,6.199-0.899,9.199c-0.2,1.5-0.301,3-0.5,4.5c14.5,21.4,43.8,55.9,96.8,88.5c0.1-0.1,0.2-0.1,0.2-0.199    c28.399-17.1,53.1-36.1,73.399-56.4c12.601-12.5,21.101-23.299,26.601-31c-0.2-1.8-0.4-3.6-0.601-5.4    c-0.3-3.1-0.6-6.1-0.899-9.199c-0.601-6.9-0.601-13.9-0.2-20.801c2.1-30,13.8-59.6,29.8-85.2c6.9-1,13.8-4.8,18.2-10.1    c6.3-7.6,9.5-17.5,13.3-26.4c4.8-11.5,9.8-22.9,14.4-34.4c7.1-17.8,10.699-40.3-5.7-54.3c-4.5-3.8-10.5-5.7-16.3-5.7    c-0.101,0-0.301,0-0.4,0l0,0c-0.7,0-1.4-1-2.1-2.6c0.199-28,2.699-57.4-1.2-85c-2.3-16.6-7.8-32.7-14.8-47.9    c-16.2-34.9-42.9-56-79.7-67C514.399,3,496.7,0.2,479.2,0c-0.101,0-0.2,0-0.301,0c-0.1,0-0.199,0-0.3,0c-17.5,0.2-35.1,3-52.3,8.1    c-36.8,11-63.4,32.1-79.7,67c-7.1,15.2-12.5,31.2-14.8,47.9c-3.9,27.6-1.4,57-1.2,85c-0.7,1.6-1.399,2.6-2.1,2.6l0,0    c-0.101,0-0.3,0-0.4,0c-5.899,0-11.8,1.9-16.3,5.7c-16.5,14-12.8,36.5-5.7,54.3C311.2,282.2,316.2,293.6,321,305z"/>


                </svg>
            </SideLink>
         </Block>
    )
};