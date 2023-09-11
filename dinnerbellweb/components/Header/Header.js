"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { Tooltip, Button } from "@nextui-org/react";

const Header = () => {
    return (
        <div className='container-header flex justify-center items-center w-full h-18 p-2 border-b-2' >
            <Tooltip showArrow={true} placement='right' closeDelay={0} content="Ready to ring the dinner bell?">
                <div className='alert cursor-pointer absoulte block border-2 p-2 rounded-3xl'>
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
        </div >
    )
}

export default Header