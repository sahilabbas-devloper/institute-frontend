import React from 'react'
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div  >
      <section className='w-full bg-gray-700 h-auto text-white'>
        <div className='w-full max-w-6xl  flex flex-col md:flex-row gap-5'>


          <div className='flex items-center flex-wrap md:flex-row md:gap-15  gap-15 md:p-20 p-10'>
            <div className=' md:mr-10'>
              <h1 className='text-lg font-bold mb-4'>Education</h1>
              <div className='text-[12px] mb-2  '>
                <p >response in 24 hours</p>
                <p> connect with us</p>
              </div>


              <div className='flex gap-2 text-lg'>
                <div className='bg-white hover:bg-gray-100 rounded-full flex items-center justify-center w-8 h-8 pl-4 text-white'>
                  <a href='https://www.instagram.com/abbasKhanmoazzam' target="blank" rel='noopener noreferrer' className='hover:text-black text-black hover:cursor-pointer  mr-4 w-8 h-8 rounded-full flex items-center justify-center'><FaInstagram /> </a>
                </div>
                <div className='bg-white hover:bg-gray-100 rounded-full flex items-center justify-center w-8 h-8 pl-4 text-white'>
                  <a href='https://www.facebook.com/AbbasKhanMoazzam' target="blank" rel='noopener noreferrer' className='hover:text-black text-black hover:cursor-pointer  mr-4 w-8 h-8 rounded-full flex items-center justify-center'><FaFacebookF /> </a>
                </div>
                <div className='bg-white hover:bg-gray-100 rounded-full flex items-center justify-center w-8 h-8 pl-4 text-white'>
                  <a href='https://www.youtube.com/@alexanderabbasKhan3956' target="blank" rel='noopener noreferrer' className='hover:text-black text-black hover:cursor-pointer  mr-4 w-8 h-8 rounded-full flex items-center justify-center'><FaYoutube /> </a>
                </div>
                <div className='bg-white hover:bg-gray-100 rounded-full flex items-center justify-center w-8 h-8 pl-4 text-white'>
                  <a href='https://wa.me/7985106600' target="blank" rel='noopener noreferrer' className='hover:text-black text-black hover:cursor-pointer  mr-4 w-8 h-8 rounded-full flex items-center justify-center'><FaWhatsapp /> </a>
                </div>
              </div>
            </div>


            <div className='md:ml-50  text-lg'>
              <h1 className='text-sm font-bold mb-3 '>Contect us</h1>
              <div className='text-[12px] mb-2 flex flex-col gap-1.5'>
                <p > facebook</p>
                <p>instagram</p>
                <p>whatsapp</p>
                <p>telegram</p>
              </div>
            </div>

            <div>
              <h1 className='text-sm font-bold mb-3'>Authoriz</h1>
              <div className='text-[12px] mb-2 flex flex-col gap-1.5'>
                <p >DDS</p>
                <p>V.B.S.P.univercity</p>
                <p>M.H(P.G) collage</p>
              </div>
            </div>


            <div>
              <h1 className='text-sm font-bold mb-3'>Service</h1>
              <div className='text-[12px] mb-2 flex flex-col gap-1.5'>
                <p >best teacher</p>
                <p>100% result</p>
                <p>frendly behavior</p>
                <p>best fasilities</p>
              </div>
            </div>



            <div>
              <h1 className='text-sm font-bold mb-3'>connect with us</h1>
              <div className='text-[12px]  flex flex-col gap-1.5'>
                <p >Whatsapp</p>
                <p>Instagram</p>
                 <p>facbook</p>
              </div>
              <div className=' w-25 h-8 text-[11px] font-bold rounded-3xl shadow-xl mt-2 text-black flex items-center justify-center mb-6 hover:bg-gray-200 bg-white'>
                
            <a href='https://www.youtube.com/@alexanderabbasKhan3956' target="blank" rel='noopener noreferrer' className='hover:text-black text-black hover:cursor-pointer   w-10 h-10 rounded-full flex items-center justify-center'><FaYoutube className='w-6 h-6'/> </a>
             subscribe 
              </div>

            </div>

            <div className='text-[12px] font-semibold'><h1>©2026 ATC. All rights reserved. Empowering students with quality education and practical skills for a brighter future.<br></br>ATC Dedicated to excellence in education and bridging the gap between learning and industry requirements.<br></br>Your partner in professional growth and academic success.< FaHeart/ ></h1></div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Footer