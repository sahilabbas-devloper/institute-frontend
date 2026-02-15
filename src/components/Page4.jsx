import React from 'react'
import {  Link } from 'react-router-dom'
export default function Page4() {
  return (
    <div>
       
 <div className='bg-gray-50 w-full h-15'>
       
      </div>

      <section className='w-full bg-gray-50 min-h-screen  max-w-full h-auto flex flex-col  items-center'>
        <div className='w-full max-w-6xl  h-auto flex flex-col md:flex-col '>

          <div className='w-full  flex  flex-col p-10 items-center  justify-center pt-10 '>
            
           
           <h1 className='md:text-4xl text-2xl mb-3 font-bold '>Our Education Partners </h1>

           <p className='text-[12px]  font-semibold text-gray-600 mb-20'>"Our network of partners ensures a comprehensive learning experience for every student.<br></br>We work closely with industry leaders to bridge the gap between academic knowledge and market needs.<br></br>These alliances are fundamental to our mission of building a brighter future."</p>
                
          </div>

        </div>


        <div className='flex items-center flex-wrap gap-8 md:gap-40 justify-center w-full h-30 mb-25'>
          <div className='flex items-center justify-center w-auto h-auto flex-col border-r-2   border-white'>
          <img
          className='w-20 md:w-32 max-w-md mix-blend-darken h-auto object-cover'
          src="td collage.jpg" alt="image" />
          T.D Collage Jaunpur(U.P)
          </div>
           <div className='flex items-center justify-center w-auto h-auto flex-col border-r-2  border-white'>
            <img
          className='w-20 md:w-32 max-w-md mix-blend-darken h-auto object-cover'
          src="mhpg collage.png" alt="image" />
          M.H.P.G collage(U.P)
          </div>
           <div className='flex items-center justify-center w-auto h-auto flex-col border-r-2  border-white'>
             <img
          className='w-20 md:w-32 max-w-md mix-blend-darken h-auto object-cover'
          src="pnp collage.jpg" alt="image" />
          P.N.P collage(paryagraj.(U.P))
          </div>
           <div className='flex items-center justify-center w-auto h-auto flex-col '>
               <img
          className='w-20 md:w-32 max-w-md mix-blend-darken h-auto object-cover'
          src="up board.jpg" alt="image" />
          U.P board
          </div>
        </div>
      </section>
            
    </div>
  )
}
