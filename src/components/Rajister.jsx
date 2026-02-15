import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
const BASE_URL= import.meta.env.VITE_API_URL;


function Rajister() {
  const [role, setrole] = useState("user")
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [passward, setpassward] = useState('')
  const [dob, setdob] = useState('')
  const [Loading, setLoading] = useState(false)

   const navigate = useNavigate()

  const submit = async (e) => {
      e.preventDefault()
      setLoading(true)

    try {
      const res = await axios.post(`${ BASE_URL}/api/Rajister`, { role, username, email, passward , dob })
    alert(res.data)
    navigate('/Login')
    } catch (error) {
      console.log("axios", error)
    } finally {
      setLoading(false)
    }
    
  }

  return (
    <div>
      <div className='w-full h-15 bg-gray-50'>
     
      </div>
      <section className='w-full min-h-screen pt-10 bg-gray-50 max-w-full h-full flex flex-col ju items-center' >
        <div className='flex items-center flex-col h-full mt-20 md:mt-1 bg-white shadow-lg justify-center rounded-xl'>


          <div className='flex flex-col p-4 gap-2 w-90   ' >
            <div className='flex items-center'>
              <div className='w-10 h-auto  rounded-full '>
                <img
                  className='w-12 h-auto  rounded-full'
                  src="logo.png" alt="logo" />
              </div>
            
            </div>

            <div className='flex justify-center mt-11 items-center flex-col '>
              <h1 className='text-2xl font-sans  font-semibold '>Create New Account</h1>
              <p className='text-gray-600 font-semibold text-[13px]'>fill your Details OrContinue with</p>
              <p className='text-gray-600 font-semibold text-[13px]'>Social Media</p>
            </div>

             <form onSubmit={submit}>

            <label htmlFor="" className='font-semibold mt-5 text-sm text-gray-600'>Usename</label>
            <input type="text"
              placeholder='Username'
              required
              className='w-full border-none bg-gray-100 outline-none p-2 rounded-sm'
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />

            <label htmlFor="" className='font-semibold text-sm text-gray-600'>Email</label>
            <input type="text"
              placeholder='email'
              required
              className='w-full border-none bg-gray-100 outline-none p-2 rounded-sm'
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />

            <label htmlFor="" className='font-semibold text-sm text-gray-600'>passward</label>
            <input type="text"
              placeholder='passward'
              required
              className='w-full border-none bg-gray-100 outline-none p-2 rounded-sm'
              value={passward}
              onChange={(e) => setpassward(e.target.value)}
            />

            <label htmlFor="" className='font-semibold text-sm text-gray-600'>D O B</label>
            <input type="date"
              placeholder='D O B'
              required
              className='w-full border-none bg-gray-100 outline-none p-2 rounded-sm'
              value={dob}
              onChange={(e) => setdob(e.target.value)}
            />


            <div className='flex justify-center mb-5 mt-5'>
              <button type='submit' 
                disabled={Loading}
              className='bg-gray-800 hover:bg-gray-600 text-white w-full h-9 shadow-lg rounded-lg flex  items-center justify-center font-semibold'>
                  {Loading && (
                  <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>

                    <div className='w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin'></div>

                  </div>

                )}
              Submit</button>
            </div >
             </form>
            <p className='text-gray-600 ml-10 font-semibold text-sm mb-10 shadow-'>Already have Account? <Link to={"/Login"} className='text-blue-800'>log In</Link></p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Rajister