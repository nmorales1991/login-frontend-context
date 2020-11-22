import React from "react";
import Auth from "./context/store/Auth";
import Navigation from './navigation/Navigation'

function App() {
    return (
        <Auth>
            <Navigation/>
        </Auth>
    );
}

export default App;
