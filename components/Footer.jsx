import React from 'react'
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import { FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'

const Footer = () => {
    return (
        <div>
            <div className="py-5 px-10 flex justify-between items-center mt-[3rem]">

                <div className="max-h-fit">
                    <h1 className="text-[1.5rem] text-[#0077B5] font-bold max-h-fit">Jones.com</h1>
                </div>

                <div className="hidden md:flex items-center gap-x-6 max-h-fit max-w-fit min-w-fit justify-end">
                    <p className="text-[#0077B5] max-w-fit min-w-fit max-h-fit cursor-pointer">Home</p>
                    <p className="text-[#0077B5] max-w-fit min-w-fit max-h-fit cursor-pointer">Buy</p>
                    <p className="text-[#0077B5] max-w-fit min-w-fit max-h-fit cursor-pointer">Sell</p>
                    <p className="text-[#0077B5] max-w-fit min-w-fit max-h-fit mr-3 cursor-pointer">FAQ</p>
                    <button className="text-[#fff] bg-[#0077B5] w-[8rem] h-[2.3rem] rounded-md">Singup</button>
                </div>

                <GiHamburgerMenu className='md:hidden block text-white' />


            </div>


            <div className="py-10 px-10 flex justify-between items-center mt-[0rem] border-t flex-wrap">

                <p className="mt-2">© 2024 Jones.com</p>

                <p className="mt-2">Do Not Sell or Share My Personal Information</p>



                <div className="flex items-center gap-x-6 max-h-fit max-w-fit min-w-fit justify-end mt-2">
                    <FaFacebookSquare />

                    <FaLinkedin />
                    <FaTwitter />
                    <FaInstagram />
                </div>


            </div>

        </div>
    )
}

export default Footer