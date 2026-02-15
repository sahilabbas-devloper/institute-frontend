import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_API_URL;


function Forgotpass() {


  const [dob, setdob] = useState('')
  const [newpass, setnewpass] = useState('')
  const [Loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.put(`${BASE_URL}/api/forgotpass`, { dob, newpass })
      alert(res.data)
    } catch (error) {
      console.log("axios", error)
    } finally {
      setLoading(false)
    }

  }

  return (
    <div>
      <div className='w-full h-15 bg-gray-50'>
        fake herder
      </div>
      <section className='w-full min-h-screen pt-10 max-w-full h-full flex bg-gray-50 flex-col  items-center' >
        <div className='flex items-center flex-col h-full mt-20 md:mt-1 bg-white shadow-lg justify-center rounded-xl'>


          <div className='flex flex-col p-4 gap-2 w-90   ' >
            <div className='flex items-center'>
              <div className='w-10 h-auto  rounded-full '>
                <img
                  className='w-8 h-auto  rounded-full'
                  src="logo.png" alt="logo" />
              </div>
              <div className='flex items-center '>
                <h1 className='font-bold text-xl mr-1'>ATC</h1>


              </div>
            </div>

            <div className='flex justify-center mt-11 items-center flex-col '>
              <h1 className='text-2xl font-sans  font-semibold '>Change your passward.</h1>
              <p className='text-gray-600 font-semibold text-[13px]'>fill your Details OrContinue with</p>
              <p className='text-gray-600 font-semibold text-[13px]'>Social Media</p>
            </div>





            <label htmlFor="" className='font-semibold text-sm text-gray-600'>D O B</label>
            <input type="date"
              placeholder='D O B'
              required
              className='w-full border-none bg-gray-100 outline-none p-2 rounded-sm'
              value={dob}
              onChange={(e) => setdob(e.target.value)}
            />


            <label htmlFor="" className='font-semibold text-sm mt-4 text-gray-600'>New passward</label>
            <input type="text"
              placeholder='new passward'
              required
              className='w-full border-none bg-gray-100 outline-none p-2 rounded-sm'
              value={newpass}
              onChange={(e) => setnewpass(e.target.value)}
            />


            <div className='flex justify-center mb-5 mt-5'>
              <Link onClick={submit} to={'/Login'} 
                disabled={Loading}
              className='bg-gray-800 hover:bg-gray-700 text-white w-full h-9 shadow-lg rounded-lg flex  items-center justify-center font-semibold'>
               {Loading && (
                  <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>

                    <div className='w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin'></div>

                  </div>

                )}
                Change</Link>
            </div >

          </div>

        </div>
      </section>

    </div>
  )
}

export default Forgotpass