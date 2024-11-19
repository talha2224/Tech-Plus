import Image from "next/image";
import Card1 from '../public/asessts/card1.svg'
import Card2 from '../public/asessts/card2.svg'
import Card3 from '../public/asessts/card3.svg'
import Avatar from '../public/asessts/avatar.svg'
import Char from '../public/asessts/char.svg'
import { TiTick } from "react-icons/ti";
import { FaStar } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Home() {

  const data = [
    { "title": "quicksilverpumping.com" },
    { "title": "smalltownnorth.com" },
    { "title": "solespringreflexology.com" },
    { "title": "sagelandcedars.com" },
    { "title": "judithmayconsulting.com" },
    { "title": "1abovequality.com" },
    { "title": "cfmasonryspecialists.com" },
    { "title": "hornsremodeling.com" },
    { "title": "quicksilverpumping.com" }
  ]


  const userData = [
    {
      "name": "Harriet Zhao",
      "role": "UX/UI Designer",
      "company": "",
      "review": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "rating": 5,
      "image": Avatar
    },
    {
      "name": "AJ",
      "role": "UX/UI Designer",
      "company": "",
      "review": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "rating": 5,
      "image": Avatar
    },
    {
      "name": "Sami Pershka",
      "role": "Founder",
      "company": "Jointribe",
      "review": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "rating": 5,
      "image": Avatar
    },
    {
      "name": "Ronnie Sawyer",
      "role": "CEO",
      "company": "Aries Design",
      "review": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "rating": 5,
      "image": Avatar
    }
  ]



  return (


    <div className="">


      {/* NAVBAR AND HERO  */}
      <div style={{ backgroundImage: `url('/asessts/Header.png')` }} className="bg-no-repeat w-[100vw] bg-cover h-[100vh] -z-20 pb-16">

        <Navbar />

        {/* HERO  */}

        <div className="mt-[3.5rem] sm:px-10 px-3 flex justify-center items-center max-h-fit w-[100%] flex-col">
          <h1 className="text-[2rem] lg:text-[4rem] font-bold text-white text-center">Find the perfect web Address <br /> to start your business</h1>
          <div className="max-w-fit min-w-fit max-h-fit flex justify-center items-center mt-10 bg-[#F6F7F8] rounded-lg py-2 px-4 ">
            <input type="text" name="" id="" className="w-[12rem] md:min-w-[40%] sm:min-w-fit lg:min-w-[30rem] h-[2.5rem] pl-3 pr-10 border-none outline-none bg-transparent" placeholder="Find domain in the Databse" />
            <button className="bg-[#0077B5] text-white w-[8rem] h-[2.6rem] rounded-md text-sm">Search Now</button>
          </div>
        </div>


      </div>


      {/* CARDS  */}

      <div className="sm:px-10 px-3 pb-10 z-50 mt-[-15rem] sm:mt-[-10rem]">

        <div className="flex sm:justify-evenly items-center flex-wrap">

          <div className="bg-[#E9EBED66] rounded-xl p-5 sm:min-w-[30rem] sm:max-w-[30rem] ">
            <h1 className="text-xl font-medium">Transparency first</h1>
            <p className="text-sm text-[#212833] mt-2">No hidden costs. No complicated math. You’ll never be in the dark, whether you’re buying or selling.</p>

            <div className="flex justify-between items-end">
              <button className="text-[#0077B5] border border-[#0077B5] bg-white w-[8rem] h-[2.3rem] rounded-2xl">Search Now</button>

              <Image src={Card1} className="h-[10rem] sm:h-[15rem] w-fit" alt="Picture of the author" />
            </div>
          </div>


          <div className="mt-4">
            <h1 className="text-[2rem] font-medium">Let us help you find <br /> your ideal address</h1>
            <p className="text-sm text-[#212833] mt-2 max-w-[30rem]">Do you have an ideal web address in mind, but the domain is  already taken? Our marketplace has millions of registered  internet addresses for sale from all over the world.</p>
          </div>


        </div>


        <div className="flex justify-evenly items-center flex-wrap mt-[2rem]">

          <div className="bg-[#E9EBED66] rounded-xl p-5 sm:min-w-[30rem] sm:max-w-[30rem] mt-4">
            <h1 className="text-xl font-medium">Effortless trading</h1>
            <p className="text-sm text-[#212833] mt-2">By using state of the art technology, domain name trading is super simple thanks to our easy-to-use platform.</p>

            <div className="flex justify-between items-end">
              <button className="text-[#0077B5] border border-[#0077B5] bg-white w-[8rem] h-[2.3rem] rounded-2xl">Search Now</button>

              <Image src={Card2} className="h-[10rem] sm:h-[15rem] w-fit" alt="Picture of the author" />
            </div>
          </div>


          <div className="bg-[#E9EBED66] rounded-xl p-5 sm:min-w-[30rem] sm:max-w-[30rem] mt-4">
            <h1 className="text-xl font-medium">Secure transactions</h1>
            <p className="text-sm text-[#212833] mt-2">Security is important to us. Our fraud prevention team monitors all transactions, we ensure that all payments with us are safe and secure.</p>

            <div className="flex justify-between items-end">
              <button className="text-[#0077B5] border border-[#0077B5] bg-white w-[8rem] h-[2.3rem] rounded-2xl">Search Now</button>

              <Image src={Card3} className="h-[10rem] sm:h-[15rem] w-fit" alt="Picture of the author" />
            </div>
          </div>


        </div>


      </div>


      {/* PREMIUM DOMAINS  */}

      <div className="mt-[2rem] flex justify-center items-center flex-col">

        <h1 className="text-[2rem] font-medium">Premium Domains</h1>

        <div className="flex justify-center items-center flex-wrap mt-[2rem] w-[80%]">
          {data.map((i, index) => (

            <div key={index} className="flex items-center gap-x-4 mb-4 min-w-[20rem] ">

              <div className="min-w-[2.3rem] min-h-[2.3rem] rounded-full flex justify-center items-center bg-[#0077B5]">
                <TiTick className='text-white' />
              </div>

              <p>{i.title}</p>

            </div>

          ))}
        </div>

      </div>


      {/* STEPS  */}


      <div style={{ backgroundImage: `url('/asessts/bg.png')` }} className="bg-no-repeat w-[100vw] bg-cover mt-[3rem] flex justify-center items-center flex-col">

        <h1 className="text-center text-white font-semibold text-[2rem] pt-16">3 Easy Steps To Buy A Domain</h1>

        <div className="flex- gap-x-6 w-[100%] flex justify-center items-end mt-[3rem] flex-wrap">

          <div className="bg-white rounded-tr-md rounded-tl-md min-w-[20rem] max-w-[20rem] h-[27rem] mt-2 p-5">
            <h1 className="text-[#0077B5] font-bold text-[4rem]">01</h1>
            <h1 className="text-xl font-medium">Get started right <br /> away</h1>
            <p className="text-[##232833] mt-5">On the Jones.com marketplace you can search directly for your desired domain. Create a free user account to either make an offer or use the buy now option to conclude the sale.</p>
          </div>


          <div className="bg-white rounded-tr-md rounded-tl-md min-w-[20rem] max-w-[20rem] h-[24rem] mt-2 p-5">
            <h1 className="text-[#0077B5] font-bold text-[4rem]">02</h1>
            <h1 className="text-xl font-medium">Simply buy</h1>
            <p className="text-[##232833] mt-5">Domain offers come in two types: buy-it-now or negotiation. You can see how your desired domain is sold directly in the results list of your search. One click is enough to start the respective purchase process.</p>
          </div>

          <div className="bg-white rounded-tr-md rounded-tl-md min-w-[20rem] max-w-[20rem] h-[22rem] mt-2 p-5">
            <h1 className="text-[#0077B5] font-bold text-[4rem]">03</h1>
            <h1 className="text-xl font-medium">Secure payment</h1>
            <p className="text-[#232833] mt-1">At Jones.com, you can choose between card payments or wire transfer. Our transfer service team will then take care of the rest. This way, payment processing is secure, and the transfer of owner rights is seamless.</p>
          </div>
        </div>

      </div>


      {/* TESTIMONIALS  */}

      <div className="mt-[4rem] flex justify-center items-center flex-col relative">
        <h1 className="text-[2rem]">What Our User Say</h1>
        <p className="text-[#3a4270] mt-2 text-sm">Would you like to add your review? </p>


        <div className="flex- gap-x-6 w-[100%] flex md:justify-center items-end mt-[3rem] overflow-x-auto">

          {
            userData.map((i) => (

              <div key={i.name} className="sm:m-0 m-3 min-w-[15rem] max-w-[15rem] min-h-[15rem] rounded-md bg-white shadow-md my-2 border px-3 pt-6">

                <div className="flex items-start gap-x-3">
                  <Image src={i.image} alt="card" />
                  <div>
                    <p className="font-medium mb-1 h-[1rem]">{i.name}</p>
                    <p className="text-[#8184A1] text-sm">{i.role}</p>
                  </div>
                </div>
                <p className="text-[#3A4270F2] text-sm mt-4">{i.review}</p>

                {/* SHOW STARS  */}

                <div className="flex items-center mt-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} color={star <= i.rating ? "#FCC51A" : "#E0E0E0"} size={20} />
                  ))}
                </div>

              </div>
            ))
          }

          <div className="absolute top-[6rem] left-0 sm:left-10 -z-50">
            <Image src={Char} alt="card" />
          </div>

        </div>

      </div>


      {/* FOOTER  */}
      <Footer/>



    </div>


  );
}
