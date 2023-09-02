"use client";

import React, { useState, useEffect } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { Disclosure } from '@headlessui/react'
import { ThemeSwitch } from "@/components/theme-switch";
import { MdOutlineLogout } from "react-icons/md"
import ItemList from "./ItemList"

const SideNavBar = () => {
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(false)
    const [classContainer, setClassContainer] = useState('')

    useEffect(() => {
        const c = isMenuCollapsed ? 'navbar--closed' : '';
        setClassContainer(c)
    }, [isMenuCollapsed])

    const toggleMenu = () => {
        const switchMenu = !isMenuCollapsed
        setIsMenuCollapsed(switchMenu)
    }

    return (
        <div>
            <Disclosure as="nav">
                <div className={`container-navbar ${classContainer}`}>
                    <div className="flex flex-col justify-start items-center">
                        {/* header */}
                        {!isMenuCollapsed
                            ? (<div className={'flex-row w-full justify-evenly'}>
                                <Disclosure.Button className="float-right justify-end peer rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white group hover:bg-gray-900 " onClick={() => toggleMenu()}>
                                    <RxHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
                                </Disclosure.Button>
                                <h1 className='pt-1 items-center text-2xl pl-3 cursor-pointer font-bold text-blue-900'>
                                    Dinner Bell
                                </h1>
                            </div>)
                            : (
                                <Disclosure.Button className="float-right justify-end peer rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white group hover:bg-gray-900 " onClick={() => toggleMenu()}>
                                    <RxHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
                                </Disclosure.Button>
                            )}

                        {/* items */}
                        <ItemList isMenuCollapsed={isMenuCollapsed} />

                    </div>
                </div>
            </Disclosure>
        </div>
    )
}

export default SideNavBar
