import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Login} from "./pages/auth/Login";
import {Main} from "./pages/private/Main";
import {CabinetLayout} from "./components/layout/cabinet/CabinetLayout";
import {Staff} from "./pages/private/staff/Staff";
import {Teams} from "./pages/private/team/Teams";
import {Settings} from "./pages/private/settings/Settings";
import {SportSection} from "./pages/private/sport-section/SportSection";
import {PreLoader} from "./components/PreLoader";
import {meQuery} from "./store/actions/user.action";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {useToast} from "@chakra-ui/react";
import {AuthLayout} from "./components/layout/auth/AuthLayout";
import {Register} from "./pages/auth/Register";
import {RestorePassword} from "./pages/auth/RestorePassword";
import {RestorePasswordField} from "./pages/auth/RestorePasswordField";
import {RegisterNextStep} from "./pages/auth/RegisterNextStep";


function App() {
    const toast = useToast()
    const {user, loader, message, error, renderCounter} = useSelector((state: RootStateOrAny) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(meQuery())
    }, [dispatch])
    useEffect(() => {
        if (message) {
            toast({
                title: error ? "Error" : "Success",
                position: "top",
                description: message,
                status: error ? "error" : "success",
                duration: 2000,
                isClosable: true,
            })
        }
    }, [renderCounter, toast, error, message]);

    if (loader) {
        return (<PreLoader/>)
    }
    if(user) {
        if(user.is_activated && user.role === "coach") {
            return (
                <BrowserRouter>
                    <CabinetLayout>
                        <Switch>
                            <Route exact path='/' component={Main}/>
                            <Route path='/staff' component={Staff}/>
                            <Route path='/teams' component={Teams}/>
                            <Route path='/sport-section' component={SportSection}/>
                            <Route path='/settings' component={Settings}/>
                        </Switch>
                    </CabinetLayout>
                </BrowserRouter>
            )
        }
        return (
            <BrowserRouter>
                <AuthLayout>
                    <Switch>
                        <Route exact path='/*' component={RegisterNextStep}/>
                    </Switch>
                </AuthLayout>
            </BrowserRouter>
        )

    }
    return (
        <BrowserRouter>
            <AuthLayout>
                <Switch>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/restore-password' component={RestorePassword}/>
                    <Route exact path='/restore-message' component={RestorePasswordField}/>
                    <Route exact path='/*' component={Login}/>
                </Switch>
            </AuthLayout>
        </BrowserRouter>
    );
}

export default App;
