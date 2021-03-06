import React, { useContext } from "react";
import {
    Navbar,
    DivNavbar,
    Wrapper,
    NavLinks,
    Alinks,
    Button,
    EndWrapper,
    EndNav
} from "../styles/Header-styles";
import {AuthGlobal} from "../context/store/Auth";
import { logoutUser } from "../context/actions/autenticacion.action";

export default function Header() {
    const context = useContext(AuthGlobal);
    const cerrarSesion = () => {
        logoutUser(context.dispatch);
    };

    return (
        <Navbar>
            <DivNavbar>
                <Wrapper>
                    <NavLinks>
                        {context.stateUser.isAuthenticated === true ? (
                            <>
                                <Alinks>
                                    {context.stateUser.user.usuariobd.nombre}
                                </Alinks>
                                <Alinks>
                                    {context.stateUser.user.usuariobd.correo}
                                </Alinks>
                            </>
                        ) : null}
                    </NavLinks>
                </Wrapper>
                <EndWrapper>
                    <EndNav>
                        <Button onClick={cerrarSesion}>Logout</Button>
                    </EndNav>
                </EndWrapper>
            </DivNavbar>
        </Navbar>
    );
}
