import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routes from "./routes";
import AppLayout from "./layouts/AppLayout";

const App = () => {
    return (
        <BrowserRouter>
            <AppLayout>
                <Switch>
                    {routes.map((item, i) => (
                        <Route component={item.component} path={item.path} key={i} exact/>
                    ))}
                </Switch>
            </AppLayout>
        </BrowserRouter>
    )
}

export default App
