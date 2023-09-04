"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image';

const Header = () => {
    return (
        <div className='container-header flex justify-center items-center w-full h-24 p-b-5 border-b-2' >
            <div className='alert cursor-pointer absoulte block border-2 p-2 rounded-3xl'>
                <div style={{ width: '3em', height: '3em' }} className='mx-auto'>
                    <Image
                        src={"/alertbell.png"}
                        alt={"alert"}
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div>
                Dinner Bell
            </div>
        </div >
    )
}

export default Header