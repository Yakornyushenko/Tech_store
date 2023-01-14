import React, {useContext} from 'react';
import {authRoutes, publicRoutes} from "../routes";
import {Route, Switch} from "react-router-dom";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path,component }) =>
                <Route key={path} path={path} component={component} exact/>
            )}

            {publicRoutes.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact/>
            )}
        </Switch>
    )
}
export default AppRouter;