import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({color="#fff",btnBg="#ffff",btnColor="#0077B5",hamburgerColor="#fff"}) => {
    return (
        <div className="py-5 px-10 flex justify-between items-center max-h-fit">

            <div className="max-h-fit">
                <h1 className={`text-[1.5rem] text-[${color}] font-bold max-h-fit`}>Jones.com</h1>
            </div>

            <div className="hidden md:flex items-center gap-x-6 max-h-fit max-w-fit min-w-fit justify-end">
                <Link href={"/"} className={`text-[${color}] max-w-fit min-w-fit max-h-fit cursor-pointer`}>Home</Link>
                <Link href={"/buy"} className={`text-[${color}] max-w-fit min-w-fit max-h-fit cursor-pointer`}>Buy</Link>
                <Link href={"/sell"} className={`text-[${color}] max-w-fit min-w-fit max-h-fit cursor-pointer`}>Sell</Link>
                <Link href={"/faq"} className={`text-[${color}] max-w-fit min-w-fit max-h-fit mr-3 cursor-pointer`}>FAQ</Link>
                <button style={{backgroundColor:btnBg}} className={`text-[${btnColor}] w-[8rem] h-[2.3rem] rounded-md`}>Singup</button>
            </div>

            <GiHamburgerMenu className={`md:hidden block text-[${hamburgerColor}]`} />


        </div>
    )
}

export default Navbar