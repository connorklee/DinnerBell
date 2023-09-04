"use client";

import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { Disclosure } from '@headlessui/react'
import { MdMenuBook, MdOutlineTimer, MdOutlineSettings, MdOutlineLogout } from "react-icons/md"
import { Link } from '@nextui-org/link';

const NavItem = ({ text, children, isMenuCollapsed, onPress, border, nav }) => {
    return (
        <Link onPress={onPress} href={nav && `/${nav}`} className={`${border && 'border border-gray-200'}, flex mb-2 justify-start items-center gap-4 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto menu-item`}>
            <div className={`p-2 text-2xl `}>
                {children}
            </div>
            {!isMenuCollapsed && (
                <h3 className='text-base font-semibold'>
                    {text}
                </h3>
            )}
        </Link>
    )
}

export default NavItem
