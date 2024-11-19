"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import Vector from '../../public/asessts/vector.svg'
import Image from 'next/image'
import { RiArrowDropDownLine } from "react-icons/ri";

const Page = () => {



  const [showGeneralFaqIndex, setShowGeneralFaqIndex] = useState(null);
  const [showBuyerFaqIndex, setShowBuyerFaqIndex] = useState(null);
  const [showSellerFaqIndex, setShowSellerFaqIndex] = useState(null);




  const generalFaqData = [
    { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" },
    { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" },
    { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" }
  ]
  const buyerFaqData = [
    { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" },
    { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" },
    { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" }
  ]
  const sellerFaqData = [
    { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" },
    { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" },
    { title: "Lorem Ipsum dolar sit ipsum dolar", description: "Lorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolarLorem Ipsum dolar sit ipsum dolar" }
  ]


  const toogleGeneralFaq = (index) => {
    index == showGeneralFaqIndex ? setShowGeneralFaqIndex(null) : index !== setShowGeneralFaqIndex(index)
  }
  const toogleBuyerFaq = (index) => {
    index == showBuyerFaqIndex ? setShowBuyerFaqIndex(null) : index !== setShowBuyerFaqIndex(index)
  }
  const toogleSellerrFaq = (index) => {
    index == showSellerFaqIndex ? setShowSellerFaqIndex(null) : index !== setShowSellerFaqIndex(index)
  }



  return (

    <div className='relative'>

      <Navbar color={"#0077B5"} btnBg={"#0077B5"} btnColor={"#fff"} hamburgerColor={"#000"} />


      <div className='absolute top-[0] right-0 -z-40'>
        <Image src={Vector} alt='' className='-z-50 bg-cover w-[100vw]' />
      </div>


      <h1 className='text-[2rem] font-semibold text-center'>General Frequently Asked Question</h1>


      <div className='my-[3rem] w-[100%] flex justify-center items-center flex-col'>
        {generalFaqData.map((i, index) => (
          <div key={index}className={`w-[95%] md:w-[70%] rounded-md p-5 mb-2 overflow-hidden transition duration-300 ease-in-out`} style={{ backgroundColor: index !== showGeneralFaqIndex ? "#fafafa" : "#0077B5" }}>
            <div className='flex justify-between items-center'>
              <p style={{ color: index === showGeneralFaqIndex ? "#ffff" : "#000" }} className={`${index !== showGeneralFaqIndex && "opacity-45"}`}>{i.title}</p>
              <RiArrowDropDownLine onClick={() => toogleGeneralFaq(index)} style={{ color: index === showGeneralFaqIndex ? "#ffff" : "#0077B5" }} className={`text-[2.5rem] cursor-pointer transition transform duration-300 ease-in-out ${index === showGeneralFaqIndex ? "rotate-180" : ""}`}/>
            </div>
            <p className={`text-white ${index !== showGeneralFaqIndex ? "h-0" : "h-auto mt-2"} transition duration-300 ease-in-out`}>{i.description}</p>
          </div>
        ))}
      </div>



      <h1 className='text-[2rem] font-semibold text-center mt-[1rem]'>Seller Frequently Asked Question</h1>


      <div className='my-[3rem] w-[100%] flex justify-center items-center flex-col'>
        {
          sellerFaqData.map((i, index) => (
            <div style={{ backgroundColor: index !== showSellerFaqIndex ? "#fafafa" : "#0077B5" }} key={index} className={`w-[95%] md:w-[70%] rounded-md p-5 mb-2 overflow-hidden transition duration-300 ease-in-out`}>
              <div className='flex justify-between items-center'>
                <p style={{ color: index === showSellerFaqIndex ? "#ffff" : "#000" }} className={`${index !== showSellerFaqIndex && "opacity-45"}`}>{i.title}</p>
                <RiArrowDropDownLine onClick={() => toogleSellerrFaq(index)} style={{ color: index === showSellerFaqIndex ? "#ffff" : "#0077B5" }} className={`text-[2.5rem] cursor-pointer transition transform duration-300 ease-in-out ${index === showSellerFaqIndex ? "rotate-180" : ""}`}/>
              </div>
              <p className={`text-white ${index !== showSellerFaqIndex ? "hidden" : "block mt-2"} transition duration-300 ease-in-out `}>{i.description}</p>
            </div>
          ))
        }
      </div>



      <h1 className='text-[2rem] font-semibold text-center mt-[1rem]'>Buyer Frequently Asked Question</h1>


      <div className='my-[3rem] w-[100%] flex justify-center items-center flex-col'>
        {
          buyerFaqData.map((i, index) => (
            <div style={{ backgroundColor: index !== showBuyerFaqIndex ? "#fafafa" : "#0077B5" }} key={index} className={`w-[95%] md:w-[70%] rounded-md p-5 mb-2 overflow-hidden transition duration-300 ease-in-out`}>
              <div className='flex justify-between items-center'>
                <p style={{ color: index === showBuyerFaqIndex ? "#ffff" : "#000" }} className={`${index !== showBuyerFaqIndex && "opacity-45"}`}>{i.title}</p>
                <RiArrowDropDownLine onClick={() => toogleBuyerFaq(index)} style={{ color: index === showBuyerFaqIndex ? "#ffff" : "#0077B5" }} className={`text-[2.5rem] cursor-pointer transition transform duration-300 ease-in-out ${index === showBuyerFaqIndex ? "rotate-180" : ""}`} />
              </div>
              <p className={`text-white ${index !== showBuyerFaqIndex ? "hidden" : "block mt-2"} transition duration-300 ease-in-out `}>{i.description}</p>
            </div>
          ))
        }
      </div>




      {/* FOOTER  */}
      <Footer />

    </div>


  )
}

export default Page