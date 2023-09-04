import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import {
    MdMenuBook, MdOutlineTimer, MdOutlineSettings, MdOutlineLogout
} from "react-icons/md"
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import ChangeTheme from "./ChangeTheme";

const ItemList = ({ isMenuCollapsed }) => {
    return (
        <>
            <div className="my-4 border-b border-gray-100 pb-4 w-full">
                <NavItem nav={'timers'} text={'Timers'} isMenuCollapsed={isMenuCollapsed} >
                    <MdOutlineTimer />

                </NavItem>

                <NavItem nav={'recipes'} text={'Recipes'} isMenuCollapsed={isMenuCollapsed}>
                    <MdMenuBook />
                </NavItem>
            </div>

            {/* settings */}
            <div className=" my-4 border-b border-gray-100 pb-4 w-full">
                <NavItem nav={'settings'} text={'Settings'} isMenuCollapsed={isMenuCollapsed}>
                    <MdOutlineSettings />
                </NavItem>

                <ChangeTheme isMenuCollapsed={isMenuCollapsed} />
            </div>

            {/* login/logout */}
            <div className="my-4 w-full">
                <NavItem border nav={'auth'} text={'Login'} isMenuCollapsed={isMenuCollapsed}>
                    <MdOutlineLogout />
                </NavItem>
            </div>
        </>
    )
}

export default ItemList