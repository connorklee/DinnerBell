"use client";

import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { Disclosure } from '@headlessui/react'
import { ThemeSwitch } from "@/components/theme-switch";
import { MdMenuBook, MdOutlineTimer, MdOutlineSettings, MdOutlineLogout } from "react-icons/md"

const NavItem = ({ text, children, isMenuCollapsed, onClick, border }) => {
    return (
        <div onClick={onClick}>
            <div className={`${border && 'border border-gray-200'} , flex px-5 mb-2 justify-start items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto`}>
                <div className='text-2xl text-gray-600 group-hover:text-white'>
                    {children}
                </div>
                {!isMenuCollapsed && (
                    <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                        {text}
                    </h3>
                )}
            </div>
        </div>
    )
}

export default NavItem
