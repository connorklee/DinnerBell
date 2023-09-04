import React from "react"
import Image from "next/image"
import { Link } from '@nextui-org/link';


const Logo = () => {
    return (
        <Link href="/">
            <div className={'flex'}>
                <div style={{ width: '2.5em', height: '2.5em' }}>
                    <Image
                        src="/dinnerbell.gif"
                        alt='Logo'
                        width={500}
                        height={500}
                    />
                </div>
                <h1 className='pt-1 pl-2 text-2xl cursor-pointer font-bold menu-title'>
                    Dinner Bell
                </h1>
            </div>
        </Link>
    )
}

export default Logo