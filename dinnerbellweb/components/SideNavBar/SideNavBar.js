"use client";

import React, { useState, useEffect } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { Disclosure } from '@headlessui/react'
import ItemList from "./ItemList"
import Logo from "./Logo"
import { toggleMenu } from '@/src/redux/features/sideNavBarSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/src/redux/store';

const SideNavBar = () => {
    const dispatch = useDispatch();
    const isMenuCollapsed = useAppSelector((state) => state.sideNavBarReducer.value.isCollasped);

    const [classContainer, setClassContainer] = useState('')

    useEffect(() => {
        const c = isMenuCollapsed ? 'navbar--closed' : '';
        setClassContainer(c)
    }, [isMenuCollapsed])

    const onClickToggle = () => {
        dispatch(toggleMenu())
    }

    const RenderMenuButton = () => {
        return (
            <Disclosure.Button onClick={() => onClickToggle()} className="float-right justify-end peer rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white group menu-item">
                <RxHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
        )
    }

    return (
        <div>
            <Disclosure as="nav">
                <div className={`container-navbar ${classContainer} border-r-2`}>
                    <div className="flex flex-col justify-start items-center">
                        {!isMenuCollapsed
                            ? (<div className={'flex-row w-full justify-evenly'}>
                                <RenderMenuButton />
                                <Logo />
                            </div>)
                            : (
                                <RenderMenuButton />
                            )}

                        <ItemList isMenuCollapsed={isMenuCollapsed} />
                    </div>
                </div>
            </Disclosure >
        </div>
    )
}

export default SideNavBar
