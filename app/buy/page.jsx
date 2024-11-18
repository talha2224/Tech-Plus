import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Card1 from '../../public/asessts/dollar.svg'
import Card2 from '../../public/asessts/group.svg'
import Card3 from '../../public/asessts/clock.svg'
import Service from '../../public/asessts/sitting.svg'
import { TiTick } from "react-icons/ti";

import Image from 'next/image'

const page = () => {

  const data = [
    {
      title:"Every transaction and transfer is in good hands with us. Our Domain Transfer Service is rated as the fastest and most convenient service available",
    },
    {
      title:"We continuously add automation to our domain transfer process to provide the best service possible to Domain sellers & buyers.",
    },
    {
      title:"We happily answer all your questions about payments and technical transfers. Our Domain Transfer Team is extensively trained and can handle any type of transaction.",
    }
  ]


  return (

    <div>

      <Navbar color={"#0077B5"} btnBg={"#0077B5"} btnColor={"#fff"} />


      {/* HERO  */}
      <div className='flex justify-center items-center flex-col mt-[2rem]'>
        <h1 className='text-[2.3rem] font-semibold text-center'>Selling domains has never been this easy</h1>
        <p className='text-sm mt-2 w-[100%] md:w-[40%] text-center'>No matter what kind of domain you have for sale or lease we make the transfer simple and safe. You’re in complete control of your prices, modals, and how you interact with buyers.</p>
        <div className='flex items-center justify-center gap-x-8 mt-[1.5rem] flex-wrap'>
          <button className='max-w-[15rem] min-w-[15rem] h-[3rem] mt-2 rounded-md bg-[#0077b5] text-white text-sm'>Fast & secure domain transfers</button>
          <button className='max-w-[15rem] min-w-[15rem] h-[3rem] mt-2 rounded-md bg-[#0077b5] text-white text-sm'>+100,000 domains transferred</button>
          <button className='max-w-[15rem] min-w-[15rem] h-[3rem] mt-2 rounded-md bg-[#0077b5] text-white text-sm'>Payouts within 2 business days</button>
        </div>
      </div>

      {/* METHOD  */}

      <div className='bg-[#F6F7F8] w-[100%] mt-[6rem] py-[2rem]'>

        <h1 className='text-[2.3rem] font-semibold text-center'>Sell it your way</h1>

        <div className='flex justify-center items-center gap-x-5 mt-[2rem] flex-wrap'>
          <div className='bg-white rounded-xl p-7 max-w-[20rem] min-w-[20rem] h-[20rem]'>
            <Image src={Card1} className='h-[2rem]' alt='card' />
            <h1 className='text-[1rem] font-semibold mt-[2rem]'>Set your price</h1>
            <p className='text-sm text-[#212833] mt-3'>First, decide on a price. Now that the hard part is out of the way, people can instantly buy your domain at your fixed price.</p>
          </div>
          <div className='bg-white rounded-xl p-7 max-w-[20rem] min-w-[20rem] h-[20rem]'>
            <Image src={Card2} className='h-[2rem]' alt='card' />
            <h1 className='text-[1rem] font-semibold mt-[2rem]'>Get offers</h1>
            <p className='text-sm text-[#212833] mt-3'>Curious about what buyers are willing to pay for your domain? Start negotiations with the Make Offer option on your For Sale page. </p>
          </div>
          <div className='bg-white rounded-xl p-7 max-w-[20rem] min-w-[20rem] h-[20rem]'>
            <Image src={Card3} className='h-[2rem]' alt='card' />
            <h1 className='text-[1rem] font-semibold mt-[2rem]'>Lease your domain name</h1>
            <p className='text-sm text-[#212833] mt-3'>Lease-to-Own lets buyers pay in installments, eventually becoming the domain’s owner. Everybody wins: buyers can afford the domain, you get more and recurring revenue</p>
          </div>
        </div>


      </div>


      {/* SERVICES  */}

      <div className='flex justify-center items-start flex-wrap gap-x-8 mt-[3rem] px-5'>

        <div className='mt-2'>
          <Image src={Service} height={400} alt='card' />
        </div>

        <div className='bg-gradient-to-br from-blue-500 to-blue-800 px-3 py-5 rounded-[1.5rem] h-[400px] w-[400px] mt-2'>

          <h1 className='text-white text-center text-xl font-bold mb-10'>Domain Transfer Service</h1>

          {
            data?.map((i,index) => (
              <div key={index} className="flex items-start gap-x-2 mb-4 mt ">

                <div className="min-w-[1.5rem] min-h-[1.5rem] rounded-full flex justify-center items-center bg-[#fff]">
                  <TiTick className='text-[#0077B5]' />
                </div>

                <p className='text-white text-sm'>{i.title}</p>

              </div>
            ))
          }
        </div>

      </div>



      {/* FOOTER  */}
      <Footer />

    </div>


  )
}

export default page