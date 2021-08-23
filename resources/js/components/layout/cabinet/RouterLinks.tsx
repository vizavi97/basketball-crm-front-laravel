import React, {useState} from 'react'
import {useColorMode} from '@chakra-ui/react';
import {Block} from "../../../config/ui/Block";
import {SideLink} from "./Link";
import {useHistory} from "react-router-dom";


export const RouterLinks: React.FC = () => {
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
            <SideLink name={"Команды"} history_path={pathname} onClick={() => setPathname(() => '/teams')} path={'/teams'}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                     id="Capa_1" x="0px" y="0px" width="20" height="20" viewBox="0 0 799.254 799.255">
                    <path
                        fill={iconColor}
                        d="M183.02,86.234l17.56,20.408c4.307-4.087,41.694-40.962,29.886-73.21C222.219,10.936,194.601,0,146.008,0   c-35.174,0-51.406,16.669-58.83,30.658c-32.273,60.755,37.1,188.535,59.12,226.243c47.038,80.531,117.255,124.266,136.359,135.109   c3.674,12.029,4.606,24.755,2.443,27.125c-0.036,0.037-4.651,2.431-20.513-4.726l-10.328,25.319   c10.814,4.884,20.271,7.317,28.336,7.317c8.498,0,15.428-2.718,20.732-8.139c9.3-9.526,10.019-24.452,8.264-37.383   c5.894,6.271,11.826,10.841,17.69,13.704c45.808,22.39,45.808,122.265,45.808,122.265l-34.354,20.662l24.539,27.553   c-13.089,161.87-85.07,179.09-85.07,179.09v34.457h112.881h8.178h112.881v-34.453c0,0-71.979-17.22-85.066-179.09l24.537-27.553   l-34.354-20.662c0,0,0-99.875,45.809-122.263c7.91-3.865,15.951-10.819,23.844-20.89c-2.962,14.172-4.072,33.205,7.014,44.564   c5.313,5.421,12.241,8.139,20.729,8.139c8.053,0,17.523-2.436,28.339-7.316l-10.313-25.32c-15.85,7.156-20.478,4.75-20.501,4.75   c-2.175-2.396-1.331-14.881,2.44-27.149c19.105-10.855,89.311-54.592,136.332-135.109c22.03-37.708,91.405-165.488,59.12-226.243   c-7.412-13.989-23.654-30.658-58.817-30.658c-48.593,0-76.223,10.936-84.454,33.432c-11.811,32.248,25.562,69.123,29.871,73.21   l17.561-20.42c-10.01-9.539-27.031-31.899-23.008-42.891c2.803-7.625,20.027-15.78,60.03-15.78   c27.198,0,33.806,12.458,35.979,16.548c16.318,30.728-7.223,110.453-58.576,198.379   c-41.713,71.412-104.915,112.544-124.442,124.074c30.366-59.621,54.841-170.632,54.841-335.325H401.263h-8.178H233.298   c0,160.83,23.338,270.464,52.71,331.042c-24.782-15.609-79.706-55.244-117.405-119.791   c-51.352-87.926-74.898-167.652-58.588-198.379c2.171-4.091,8.791-16.548,35.992-16.548c39.977,0,57.219,8.155,60.016,15.78   C209.73,53.381,195.035,74.707,183.02,86.234z"/>
                </svg>
            </SideLink>
            <SideLink name={"Игроки"}  history_path={pathname} onClick={() => setPathname(() => '/staff')} path={'/staff'}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_3" height="20"
                     viewBox="0 0 64 64" width="20"
                >
                    <path
                        fill={iconColor}
                        d="m57.252 48.121-4.912-.893c1.428-1.058 2.53-2.524 3.135-4.228h.525c2.206 0 4-1.794 4-4s-1.794-4-4-4v-5c0-2.757-2.243-5-5-5h-8c-2.757 0-5 2.243-5 5v5c-2.206 0-4 1.794-4 4s1.794 4 4 4h.525c.605 1.704 1.707 3.17 3.135 4.228l-4.912.893c-2.046.371-3.74 1.611-4.748 3.294-1.008-1.683-2.702-2.923-4.748-3.294l-4.912-.893c1.428-1.058 2.53-2.524 3.135-4.228h.525c2.206 0 4-1.794 4-4s-1.794-4-4-4v-5c0-2.757-2.243-5-5-5h-8c-2.757 0-5 2.243-5 5v5c-2.206 0-4 1.794-4 4s1.794 4 4 4h.525c.605 1.704 1.707 3.17 3.135 4.228l-4.912.893c-3.331.605-5.748 3.501-5.748 6.887v6.992c0 .553.447 1 1 1h30 30c.553 0 1-.447 1-1v-6.992c0-3.386-2.417-6.282-5.748-6.887zm-3.08 8.465.242.242c.372.372.586.888.586 1.414v2.758h-16v-2.758c0-.526.214-1.042.586-1.414l.242-.242c.745-.744 1.172-1.775 1.172-2.828v-4.378l1.153-.21c.53 2.192 2.495 3.83 4.847 3.83s4.317-1.638 4.847-3.83l1.153.21v4.378c0 1.053.427 2.084 1.172 2.828zm-4.356-7.586c-.414 1.161-1.514 2-2.816 2s-2.402-.839-2.816-2zm8.184-10c0 1.103-.897 2-2 2h-.059c.037-.329.059-.662.059-1v-3c1.103 0 2 .897 2 2zm-15-12h8c1.654 0 3 1.346 3 3v6.722c-.595-.347-1-.985-1-1.722v-.573c0-1.89-1.537-3.427-3.427-3.427-.528 0-1.059.125-1.533.361l-1.04.521-1.041-.521c-.474-.236-1.004-.361-1.532-.361-1.89 0-3.427 1.537-3.427 3.427v.573c0 .737-.405 1.375-1 1.722v-6.722c0-1.654 1.346-3 3-3zm-5 14c-1.103 0-2-.897-2-2s.897-2 2-2v3c0 .338.022.671.059 1zm2-1v-1.142c1.721-.447 3-1.999 3-3.858v-.573c0-.787.64-1.427 1.427-1.427.221 0 .441.052.639.15l1.487.744c.281.141.613.141.895 0l1.486-.744c.198-.099.419-.15.64-.15.786 0 1.426.64 1.426 1.427v.573c0 1.859 1.279 3.411 3 3.858v1.142c0 3.859-3.141 7-7 7s-7-3.141-7-7zm-9 15.008v5.992h-4v-2.758c0-1.053-.427-2.084-1.172-2.828l-.242-.242c-.372-.372-.586-.888-.586-1.414v-4.014l1.895.344c2.378.433 4.105 2.502 4.105 4.92zm-21.172 1.578c.745-.744 1.172-1.775 1.172-2.828v-4.378l1.153-.21c.53 2.192 2.495 3.83 4.847 3.83s4.317-1.638 4.847-3.83l1.153.21v4.378c0 1.053.427 2.084 1.172 2.828l.242.242c.372.372.586.888.586 1.414v2.758h-16v-2.758c0-.526.214-1.042.586-1.414zm9.988-7.586c-.414 1.161-1.514 2-2.816 2s-2.402-.839-2.816-2zm8.184-10c0 1.103-.897 2-2 2h-.059c.037-.329.059-.662.059-1v-3c1.103 0 2 .897 2 2zm-15-12h8c1.654 0 3 1.346 3 3v6.722c-.595-.347-1-.985-1-1.722v-.573c0-1.89-1.537-3.427-3.427-3.427-.528 0-1.059.125-1.533.361l-1.04.521-1.041-.521c-.474-.236-1.004-.361-1.532-.361-1.89 0-3.427 1.537-3.427 3.427v.573c0 .737-.405 1.375-1 1.722v-6.722c0-1.654 1.346-3 3-3zm-5 14c-1.103 0-2-.897-2-2s.897-2 2-2v3c0 .338.022.671.059 1zm2-1v-1.142c1.721-.447 3-1.999 3-3.858v-.573c0-.787.64-1.427 1.427-1.427.221 0 .441.052.639.15l1.487.744c.281.141.613.141.895 0l1.486-.744c.198-.099.419-.15.64-.15.786 0 1.426.64 1.426 1.427v.573c0 1.859 1.279 3.411 3 3.858v1.142c0 3.859-3.141 7-7 7s-7-3.141-7-7zm-7 15.008c0-2.418 1.727-4.487 4.105-4.92l1.895-.345v4.014c0 .526-.214 1.042-.586 1.414l-.242.242c-.745.745-1.172 1.776-1.172 2.829v2.758h-4zm30 0c0-2.418 1.727-4.487 4.105-4.92l1.895-.345v4.014c0 .526-.214 1.042-.586 1.414l-.242.242c-.745.745-1.172 1.776-1.172 2.829v2.758h-4zm28 5.992h-4v-2.758c0-1.053-.427-2.084-1.172-2.828l-.242-.242c-.372-.372-.586-.888-.586-1.414v-4.014l1.895.344c2.378.433 4.105 2.502 4.105 4.92z"/>
                    <path
                        fill={iconColor}
                        d="m32 27c7.168 0 13-5.832 13-13s-5.832-13-13-13-13 5.832-13 13 5.832 13 13 13zm-9.787-8.003c1.015-1.478 2.219-2.8 3.57-3.94 2.24 4.062 5.79 7.348 10.123 9.213-1.216.465-2.529.73-3.906.73-4.265 0-7.963-2.445-9.787-6.003zm16.048 4.036-.095-.031c-4.684-1.562-8.519-4.911-10.779-9.162.991-.68 2.041-1.271 3.137-1.764.637 1.29 1.816 2.289 3.324 2.666 2.836.71 5.212 2.616 6.52 5.23l.353.705c-.695.906-1.522 1.704-2.46 2.356zm3.675-4.344c-1.606-2.933-4.348-5.073-7.663-5.901-.823-.206-1.49-.74-1.884-1.439 1.626-.545 3.326-.892 5.063-1l4.803-.3c.474 1.228.745 2.557.745 3.951 0 1.679-.389 3.264-1.064 4.689zm-.664-10.583-3.946.247c-1.824.113-3.611.465-5.326 1.018v-.23c0-1.005.499-1.938 1.336-2.496l3.653-2.435c1.752.895 3.23 2.245 4.283 3.896zm-6.591-4.762-2.454 1.636c-1.395.93-2.227 2.485-2.227 4.161v.736c0 .079.016.154.02.232-1.214.524-2.378 1.157-3.479 1.887-.576-1.435-.991-2.944-1.199-4.508l-.27-2.02c1.892-1.541 4.303-2.468 6.928-2.468.926 0 1.821.128 2.681.344zm-11.383 3.953.061.454c.254 1.905.776 3.739 1.519 5.465-1.295 1.043-2.474 2.235-3.51 3.557-.232-.887-.368-1.814-.368-2.773 0-2.524.863-4.845 2.298-6.703z"/>
                </svg>
            </SideLink>
            <SideLink name={"Настройки"}  history_path={pathname} onClick={() => setPathname(() => '/settings')} path={'/settings'}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_3" height="20"
                     viewBox="0 0 64 64" width="20"
                >
                    <path
                        fill={iconColor}
                        d="m57.252 48.121-4.912-.893c1.428-1.058 2.53-2.524 3.135-4.228h.525c2.206 0 4-1.794 4-4s-1.794-4-4-4v-5c0-2.757-2.243-5-5-5h-8c-2.757 0-5 2.243-5 5v5c-2.206 0-4 1.794-4 4s1.794 4 4 4h.525c.605 1.704 1.707 3.17 3.135 4.228l-4.912.893c-2.046.371-3.74 1.611-4.748 3.294-1.008-1.683-2.702-2.923-4.748-3.294l-4.912-.893c1.428-1.058 2.53-2.524 3.135-4.228h.525c2.206 0 4-1.794 4-4s-1.794-4-4-4v-5c0-2.757-2.243-5-5-5h-8c-2.757 0-5 2.243-5 5v5c-2.206 0-4 1.794-4 4s1.794 4 4 4h.525c.605 1.704 1.707 3.17 3.135 4.228l-4.912.893c-3.331.605-5.748 3.501-5.748 6.887v6.992c0 .553.447 1 1 1h30 30c.553 0 1-.447 1-1v-6.992c0-3.386-2.417-6.282-5.748-6.887zm-3.08 8.465.242.242c.372.372.586.888.586 1.414v2.758h-16v-2.758c0-.526.214-1.042.586-1.414l.242-.242c.745-.744 1.172-1.775 1.172-2.828v-4.378l1.153-.21c.53 2.192 2.495 3.83 4.847 3.83s4.317-1.638 4.847-3.83l1.153.21v4.378c0 1.053.427 2.084 1.172 2.828zm-4.356-7.586c-.414 1.161-1.514 2-2.816 2s-2.402-.839-2.816-2zm8.184-10c0 1.103-.897 2-2 2h-.059c.037-.329.059-.662.059-1v-3c1.103 0 2 .897 2 2zm-15-12h8c1.654 0 3 1.346 3 3v6.722c-.595-.347-1-.985-1-1.722v-.573c0-1.89-1.537-3.427-3.427-3.427-.528 0-1.059.125-1.533.361l-1.04.521-1.041-.521c-.474-.236-1.004-.361-1.532-.361-1.89 0-3.427 1.537-3.427 3.427v.573c0 .737-.405 1.375-1 1.722v-6.722c0-1.654 1.346-3 3-3zm-5 14c-1.103 0-2-.897-2-2s.897-2 2-2v3c0 .338.022.671.059 1zm2-1v-1.142c1.721-.447 3-1.999 3-3.858v-.573c0-.787.64-1.427 1.427-1.427.221 0 .441.052.639.15l1.487.744c.281.141.613.141.895 0l1.486-.744c.198-.099.419-.15.64-.15.786 0 1.426.64 1.426 1.427v.573c0 1.859 1.279 3.411 3 3.858v1.142c0 3.859-3.141 7-7 7s-7-3.141-7-7zm-9 15.008v5.992h-4v-2.758c0-1.053-.427-2.084-1.172-2.828l-.242-.242c-.372-.372-.586-.888-.586-1.414v-4.014l1.895.344c2.378.433 4.105 2.502 4.105 4.92zm-21.172 1.578c.745-.744 1.172-1.775 1.172-2.828v-4.378l1.153-.21c.53 2.192 2.495 3.83 4.847 3.83s4.317-1.638 4.847-3.83l1.153.21v4.378c0 1.053.427 2.084 1.172 2.828l.242.242c.372.372.586.888.586 1.414v2.758h-16v-2.758c0-.526.214-1.042.586-1.414zm9.988-7.586c-.414 1.161-1.514 2-2.816 2s-2.402-.839-2.816-2zm8.184-10c0 1.103-.897 2-2 2h-.059c.037-.329.059-.662.059-1v-3c1.103 0 2 .897 2 2zm-15-12h8c1.654 0 3 1.346 3 3v6.722c-.595-.347-1-.985-1-1.722v-.573c0-1.89-1.537-3.427-3.427-3.427-.528 0-1.059.125-1.533.361l-1.04.521-1.041-.521c-.474-.236-1.004-.361-1.532-.361-1.89 0-3.427 1.537-3.427 3.427v.573c0 .737-.405 1.375-1 1.722v-6.722c0-1.654 1.346-3 3-3zm-5 14c-1.103 0-2-.897-2-2s.897-2 2-2v3c0 .338.022.671.059 1zm2-1v-1.142c1.721-.447 3-1.999 3-3.858v-.573c0-.787.64-1.427 1.427-1.427.221 0 .441.052.639.15l1.487.744c.281.141.613.141.895 0l1.486-.744c.198-.099.419-.15.64-.15.786 0 1.426.64 1.426 1.427v.573c0 1.859 1.279 3.411 3 3.858v1.142c0 3.859-3.141 7-7 7s-7-3.141-7-7zm-7 15.008c0-2.418 1.727-4.487 4.105-4.92l1.895-.345v4.014c0 .526-.214 1.042-.586 1.414l-.242.242c-.745.745-1.172 1.776-1.172 2.829v2.758h-4zm30 0c0-2.418 1.727-4.487 4.105-4.92l1.895-.345v4.014c0 .526-.214 1.042-.586 1.414l-.242.242c-.745.745-1.172 1.776-1.172 2.829v2.758h-4zm28 5.992h-4v-2.758c0-1.053-.427-2.084-1.172-2.828l-.242-.242c-.372-.372-.586-.888-.586-1.414v-4.014l1.895.344c2.378.433 4.105 2.502 4.105 4.92z"/>
                    <path
                        fill={iconColor}
                        d="m32 27c7.168 0 13-5.832 13-13s-5.832-13-13-13-13 5.832-13 13 5.832 13 13 13zm-9.787-8.003c1.015-1.478 2.219-2.8 3.57-3.94 2.24 4.062 5.79 7.348 10.123 9.213-1.216.465-2.529.73-3.906.73-4.265 0-7.963-2.445-9.787-6.003zm16.048 4.036-.095-.031c-4.684-1.562-8.519-4.911-10.779-9.162.991-.68 2.041-1.271 3.137-1.764.637 1.29 1.816 2.289 3.324 2.666 2.836.71 5.212 2.616 6.52 5.23l.353.705c-.695.906-1.522 1.704-2.46 2.356zm3.675-4.344c-1.606-2.933-4.348-5.073-7.663-5.901-.823-.206-1.49-.74-1.884-1.439 1.626-.545 3.326-.892 5.063-1l4.803-.3c.474 1.228.745 2.557.745 3.951 0 1.679-.389 3.264-1.064 4.689zm-.664-10.583-3.946.247c-1.824.113-3.611.465-5.326 1.018v-.23c0-1.005.499-1.938 1.336-2.496l3.653-2.435c1.752.895 3.23 2.245 4.283 3.896zm-6.591-4.762-2.454 1.636c-1.395.93-2.227 2.485-2.227 4.161v.736c0 .079.016.154.02.232-1.214.524-2.378 1.157-3.479 1.887-.576-1.435-.991-2.944-1.199-4.508l-.27-2.02c1.892-1.541 4.303-2.468 6.928-2.468.926 0 1.821.128 2.681.344zm-11.383 3.953.061.454c.254 1.905.776 3.739 1.519 5.465-1.295 1.043-2.474 2.235-3.51 3.557-.232-.887-.368-1.814-.368-2.773 0-2.524.863-4.845 2.298-6.703z"/>
                </svg>
            </SideLink>
        </Block>
    )
};
