import { Routes, Route } from "react-router-dom";
import {privateRoutes, publicRoutes} from '../router/index';
import { useContext } from "react";
import { AuthContext } from "../context";

function AppRouter() {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        isAuth
            ? <Routes>
                    {privateRoutes.map((route, inx) => {
                        return (
                            <Route
                                key={inx}
                                path={route.path}
                                element={<route.component />}
                                exact={route.exact}
                            />
                        )
                    })}
                </Routes>
            : <Routes>
                    {publicRoutes.map((route, inx) => {
                        return (
                            <Route
                                key={inx}
                                path={route.path}
                                element={<route.component />}
                                exact={route.exact}
                            />
                        )
                    })}

                </Routes>
    );
}

export default AppRouter;