"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { Tooltip, Button } from "@nextui-org/react";
import { Link } from '@nextui-org/link';

const Header = () => {
    return (
        <div className='container-header flex justify-center items-center w-full h-18 p-2 border-b-2'>
            <Tooltip color="primary" showArrow={true} plaement='right' closeDelay={0} content="Ready to ring the dinner bell?">
                <div className='alert cursor-pointer block border-2 p-2 rounded-3xl w-14 m-0'>
                    <div style={{ width: '2em', height: '2em' }} className='mx-auto'>
                        <Image
                            src={"/alertbell.png"}
                            alt={"alert"}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </Tooltip>
            <div className='header-container'>
                <Link href="/">
                    <h1 className='header-title text-4xl cursor-pointer font-bold'>
                        Dinner Bell
                    </h1>
                </Link>
            </div>
        </div >
    )
}

export default Header