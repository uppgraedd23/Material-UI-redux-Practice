import React, {Component} from 'react';
import {AppHeader} from "./components/header";
import {AppDrawer} from "./components/drawer";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from "./pages/Main";
import Price from "./pages/Price";
import Login from "./pages/Login";


function ProtectRoutes({children}) {
    let isLogin = localStorage.getItem('isLogin')
    return (isLogin ? (<>{children}</>) : (<Redirect to="/login" />));
}



export default (store) => {
    return (

        <BrowserRouter>
            <CssBaseline />
            <Route path='/login' exact component={Login}/>
            <ProtectRoutes>
                <Switch>
                    <Route path='/' exact component={Main}/>
                    <Route path='/price' exact component={Price} store = {store}/>
                </Switch>
            </ProtectRoutes>
        </BrowserRouter>

    );
}
