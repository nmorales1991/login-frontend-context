import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Auth from "./context/store/Auth";

function App() {
    return (
        <Auth>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Dashboard} />
                </Switch>
            </BrowserRouter>
        </Auth>
    );
}

export default App;
