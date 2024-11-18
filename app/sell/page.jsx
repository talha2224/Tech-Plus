import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Secure from '../../public/asessts/secure.svg'
import Banner from '../../public/asessts/banner.svg'
import { IoGlobeOutline, IoSearch } from "react-icons/io5";
import { RiShoppingBag4Fill } from "react-icons/ri";
import Image from 'next/image'

const page = () => {


  return (

    <div>

      <Navbar color={"#0077B5"} btnBg={"#0077B5"} btnColor={"#fff"} />



      {/* HERO  */}
      <div className='flex justify-center items-center flex-col mt-[2rem] mx-10'>
        <h1 className='text-[2.3rem] font-semibold text-center'>The new way to buy domains</h1>
        <p className='text-sm mt-2 w-[100%] md:w-[40%] text-center'>No matter what kind of domain you want to buy or lease, we make the transfer simple and safe.</p>
      </div>

      {/* PROGRESS BAR  */}

      <div className='flex items-center  mt-[2rem] overflow-x-auto'>

        <div className='flex-1 h-[1px] bg-[#0077B5]'></div>

        <div className='max-w-[323px] min-w-[323px] h-[129px] bg-gradient-to-br from-[#0077B5] to-[#0095D7] rounded-xl p-5'>

          <div className='flex justify-between items-start'>

            <div className='bg-[#80BEDE] flex justify-center items-center w-[2.5rem] h-[2.5rem] rounded-md'><IoSearch className='text-white text-[1.5rem]' /></div>
            <h1 className='text-[2rem] font-bold text-white'>01</h1>
          </div>

          <h1 className='text-[1rem] mt-3 font-bold text-white'>Search our database</h1>

        </div>

        <div className='max-w-[5rem] min-w-[5rem] h-[1px] bg-[#0077B5]'></div>


        <div className='max-w-[323px] min-w-[323px] h-[129px] bg-gradient-to-br from-[#0077B5] to-[#0095D7] rounded-xl p-5'>

          <div className='flex justify-between items-start'>

            <div className='bg-[#80BEDE] flex justify-center items-center w-[2.5rem] h-[2.5rem] rounded-md'><IoGlobeOutline className='text-white text-[1.5rem]' /></div>
            <h1 className='text-[2rem] font-bold text-white'>02</h1>
          </div>

          <h1 className='text-[1rem] mt-3 font-bold text-white'>Find your dream domain</h1>

        </div>

        <div className='max-w-[5rem] min-w-[5rem] h-[1px] bg-[#0077B5]'></div>


        <div className='max-w-[323px] min-w-[323px] h-[129px] bg-gradient-to-br from-[#0077B5] to-[#0095D7] rounded-xl p-5'>

          <div className='flex justify-between items-start'>

            <div className='bg-[#80BEDE] flex justify-center items-center w-[2.5rem] h-[2.5rem] rounded-md'><RiShoppingBag4Fill className='text-white text-[1.5rem]' /></div>
            <h1 className='text-[2rem] font-bold text-white'>03</h1>
          </div>

          <h1 className='text-[1rem] mt-3 font-bold text-white'>Purchase/lease a domain</h1>

        </div>

        <div className='flex-1 h-[1px] bg-[#0077B5]'></div>




      </div>


      {/* SECURE  */}

      <div className='flex items-start justify-center mt-[5rem] flex-wrap mx-10'>
        <Image src={Secure} alt="" height={500} />

        <div className='w-[100%] md:w-[40%]'>
          <h1 className='text-[1.5rem] font-bold'>Buyer Protection Program</h1>
          <p className='text-xs mt-2 w-[100%]'>When you buy a domain name, you’re automatically covered by our Buyer Protection Program. It works like this:</p>

          <div className='flex items-center gap-x-3 mt-2'>
            <h1 className='text-[3rem] font-bold text-[#0077B5] opacity-20'>01</h1>
            <p className=''>You buy or lease the domain name </p>
          </div>
          <p className='text-xs mt-0 w-[100%]'>When you buy a domain name, you’re automatically covered by our Buyer Protection Program. It works like this</p>

          <div className='flex items-center gap-x-3 mt-2'>
            <h1 className='text-[3rem] font-bold text-[#0077B5] opacity-20'>02</h1>
            <p className=''>We facilitate the transfer from the seller to you</p>
          </div>
          <p className='text-xs mt-0 w-[100%]'>After securing your payment, we first request the domain owner to transfer the domain name to us. Then we send you the tailored transfer instructions and assist you with the process to obtain the domain name.</p>


          <div className='flex items-center gap-x-3 mt-2'>
            <h1 className='text-[3rem] font-bold text-[#0077B5] opacity-20'>03</h1>
            <p className=''>After the transfer, we pay the seller</p>
          </div>
          <p className='text-xs mt-0 w-[100%]'>Now that the domain is officially in your hands, we pay the seller. And we’re done! Buyers pay no fees at Dan.com. The seller pays for our commission to handle the ownership transfer.</p>
        </div>
      </div>


      {/* BANNER  */}

      <div style={{ backgroundImage: `url('/asessts/banner.svg')` }} className='w-[100%] p-5 h-[188px] bg-no-repeat bg-cover flex items-center justify-between flex-wrap mt-[3rem]'>

        <div>
          <h1 className='md:text-[1.5rem] text-white font-semibold'>Need help after you’ve completed your purchase?</h1>
          <h1 className='md:text-[1.5rem] text-white font-semibold'> We’re at your service. At no additional cost.</h1>
        </div>


        <button className={`text-[#000] bg-white max-w-[8rem] min-w-[8rem] h-[2.3rem] rounded-md mt-2`}>Contact Us</button>


      </div>






      {/* FOOTER  */}
      <Footer />

    </div>


  )
}

export default page