import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import {NavBar} from "./components/NavBar";
import Footer from "./components/Footer";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAuth";
import Loader from "./components/Loader";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loadingPage, setLoadingPage] = useState(true)
    useEffect(() => {
        setTimeout(() => {

            check().then(res => {
                user.setUser(res)
                user.setIsAuth(true)
            }).finally(() => setLoadingPage(false))
        }, 1000)
    }, [])
    if (loadingPage) {
        return <Loader/>
    }
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
})

export default App;
