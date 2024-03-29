"use client";

import { useAppSelector } from "app/redux/hooks";
import NavbarLogged from "./NavbarLogged";
import Navbar from "./Navbar";

export default function Navbars () {
    const { isAuthenticated } = useAppSelector(state => state.auth);

    if (isAuthenticated){
        return(<NavbarLogged/>);
    }
    return(<Navbar/>);
}