import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { useTheme } from "next-themes";
import {
    TbSun, TbMoon
} from "react-icons/tb"
import { useIsSSR } from "@react-aria/ssr";
import { AiOutlineEllipsis } from "react-icons/ai"

const ChangeTheme = ({ isMenuCollapsed }) => {
    const isSSR = useIsSSR();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleThemeClick = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <NavItem text={'Change Theme'} isMenuCollapsed={isMenuCollapsed} onPress={handleThemeClick} >
            {mounted ? (isSSR || (theme === 'dark') ? (<TbMoon />) : (<TbSun />)) : <AiOutlineEllipsis />}
        </NavItem>
    )
}

export default ChangeTheme