import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Login} from "./pages/auth/Login";
import {Main} from "./pages/private/Main";
import {Staff} from "./pages/private/staff/Staff";
import {Teams} from "./pages/private/team/Teams";
import {Settings} from "./pages/private/settings/Settings";
import {PreLoader} from "./components/PreLoader";
import {meQuery} from "./store/actions/user.action";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {useToast} from "@chakra-ui/react";
import {AuthLayout} from "./components/layout/auth/AuthLayout";
import {Register} from "./pages/auth/Register";
import {RestorePassword} from "./pages/auth/RestorePassword";
import {RestorePasswordField} from "./pages/auth/RestorePasswordField";
import {CoachLayout} from "./components/layout/cabinet/CoachLayout";
import {RegisterPlayer} from "./pages/auth/RegisterPlayer";
import {RegisterNextStepPlayer} from "./pages/auth/RegisterNextStepPlayer";
import {PlayerLayout} from "./components/layout/cabinet/PlayerLayout";
import {Player} from "./pages/private/player/Player";
import {CoachRegisterNextStep} from "./pages/auth/register-next-step-cases/CoachRegisterNextStep";


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
                    <CoachLayout>
                        <Switch>
                            <Route exact path='/' component={Main}/>
                            <Route path='/staff' component={Staff}/>
                            <Route path='/teams' component={Teams}/>
                            <Route path='/settings' component={Settings}/>
                        </Switch>
                    </CoachLayout>
                </BrowserRouter>
            )
        }
        if(user.is_activated && user.role === "player") {
            return (
                <BrowserRouter>
                    <PlayerLayout>
                        <Switch>
                            <Route exact path='/' component={Player}/>
                            <Redirect to={'/'} />
                        </Switch>
                    </PlayerLayout>
                </BrowserRouter>
            )
        }
        if(!user.is_activated && user.role === "player") {
            return (
                <BrowserRouter>
                    <AuthLayout>
                        <Switch>
                            <Route exact path='/*' component={RegisterNextStepPlayer}/>
                        </Switch>
                    </AuthLayout>
                </BrowserRouter>
            )
        }
        return (
            <BrowserRouter>
                <AuthLayout>
                    <Switch>
                        <Route exact path='/*' component={CoachRegisterNextStep}/>
                    </Switch>
                </AuthLayout>
            </BrowserRouter>
        )
    }
    if(location.search.includes('ref')) {
        return (
            <BrowserRouter>
                <AuthLayout>
                    <Switch>
                        <Route exact path='/*' component={RegisterPlayer}/>
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
