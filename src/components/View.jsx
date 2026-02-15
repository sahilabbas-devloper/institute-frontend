
import React, { useState } from 'react'
import axios from 'axios'
const BASE_URL= import.meta.env.VITE_API_URL;

export default function View() {

      const [name, setname] = useState()
       const [details, setdetails] = useState()
   const [Loading, setLoading] = useState(false)



    const find = async (e) => {

        e.preventDefault()
        setLoading(true)


        try {
            const res = await axios.post(`${BASE_URL}/api/getdata`,{ name} )
            console.log(res)
           alert(res.data.massage)
            setdetails(res.data.Std)
           
         
        } catch (error) {
            console.log("axios", error)
        } finally {
            setLoading(false)
        }

           


    }
  return (
    <div>
      <div className='bg-gray-50 w-full h-15'>

      </div>

      <section className='w-full  min-h-screen pt-15 bg-gray-50 max-w-full h-full flex flex-col  items-center'>
        <div className='w-full max-w-6xl  justify-center flex flex-col md:gap-2 gap-20 md:flex-col items-center '>




                         <div className='mb-5 p-2'>
                          <h1 className='text-2xl font-bold'>Find the student <span className='text-4xl font-bold text-blue-800'>Details</span></h1>
                          <p className='text-sm font-semibold text-gray-600 mb-4'>with the help of student name.</p>


                          <div>


                            <div className='flex w-full gap-5 items-center'>
                                <input type="text"
                            required
                            onChange={(e) => setname(e.target.value)}
                            className=' outline-none p-2 mb-2 bg-gray-100 h-11  rounded-sm border-none shadow-lg'
                            placeholder='enter  name'
                        />

                        <button
                            onClick={find}
                             disabled={Loading}
                            className=' w-full h-10 text-[15px] font-semibold rounded-sm shadow-xl text-white flex items-center mt-5 hover:bg-gray-600 justify-center mb-6 bg-gray-700'>
                            {Loading && (
                                <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>

                                    <div className='w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin'></div>

                                </div>

                            )}
                            Find</button>
                            </div>
                             
                          </div>
                         
                         </div>


{details && (
          <div className='md:w-120  flex shadow-lg flex-col rounded-xl   gap-1 '>

            <div className='flex items-center p-4 md:pl-18 rounded-sm w-full gap-2 bg-gray-800'>
              <div className='w-10 h-auto  rounded-full '>
                <img
                  className='w-full h-auto  rounded-full'
                  src="logo.png" alt="logo" />
              </div>
              <div className='flex items-center flex-col text-white text-2xl'>
                <h1 className='font-bold text-2xl mr-1 text-white'>Abbas Tuition Classes</h1>
                 <h1 className='text-[12px] font-bold'>Address : <span>pandariba road jaunpur(U.P)</span></h1>
                   <h1 className='text-[12px] font-bold'>pincode : <span>222001</span></h1>
              </div>
            </div>

            <div className='flex gap-5 p-4 text-sm w-full pb-10'>
              <div className='w-full mt-3 gap-2'>
                 <h1 className='font-bold'>Studentname : <span className='font-semibold text-gray-600'>{details.studentname} </span></h1>
                 <h1 className='font-bold'>fathername : <span className='font-semibold text-gray-600'>{details.fathername} </span></h1>
                 <h1 className='font-bold'>class : <span className='font-semibold text-gray-600'>{details.class}</span></h1>
                 <h1 className='font-bold'>Joinnigdate : <span className='font-semibold text-gray-600'>{details.Joinningdate}</span></h1>
                 <h1 className='font-bold'>mobile.No : <span className='font-semibold text-gray-600'> 91+ {details.Mobilenumber}</span></h1>
                 <h1 className='font-bold'> address : <span className='font-semibold text-gray-600'>{details.address}</span></h1>
                 <h1 className='font-bold'>Schoolname : <span className='font-semibold text-gray-600'>{details.schoolname}</span></h1>
              </div>

              <div className=''>
          
                <img 
                className='rounded-full w-70'
                src="https://w7.pngwing.com/pngs/241/840/png-transparent-computer-icons-student-school-student-angle-people-logo-thumbnail.png" alt="profile" />
              </div>
            </div>


            
          </div>
)}
          



        </div>
      </section>

    </div>
  )
}
