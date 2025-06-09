import { HeaderConteiner } from "./Styles";

import LogoIgnite from '../../assets/Logo-ignite.svg';
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderConteiner>
            <img src={LogoIgnite} alt="" />
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24}/>
                </NavLink>

                <NavLink to="/history" title="Histórico">
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderConteiner>
    )
}