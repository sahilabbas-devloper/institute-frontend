
import {  FaBook   } from 'react-icons/fa'
import { motion } from 'framer-motion';
function Page7() {

    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Image Floating Animation
  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
    return (
        <div>
            <motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  variants={containerVariants}
  className='w-full bg-gray-50 min-h-screen max-w-full h-full flex flex-col items-center'
>
  <div className='w-full max-w-6xl justify-center flex flex-col md:gap-2 gap-10 md:flex-row'>

    <div className='flex flex-col'>

      {/* Heading */}
      <motion.div
        variants={itemVariants}
        className='w-full flex flex-col p-10 justify-center items-center pt-15'
      >
        <h1 className='text-4xl font-bold mb-3'>
          Our Courses study for all classess.
        </h1>
        <p className='text-[12px] font-semibold text-gray-600'>
          Explore Our comprehensive Courses for all levels.<br></br>Tailored educational programs designed to provide in-depth <br></br>knowledge and exam excellence for U.P Board and CBSE students.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={itemVariants}
        className='flex md:flex-row gap-4 flex-col'
      >

        {/* Card 1 */}
        <motion.div
          variants={itemVariants}
          className='md:w-60 p-10 bg-white flex shadow-lg hover:border-gray-600 hover:border-2 flex-col rounded-xl md:p-4 gap-1'
        >
          <div className='bg-blue-800 rounded-full flex items-center justify-center w-12 h-12 text-white'>
            <FaBook className='w-6 h-6' />
          </div>
          <h1 className='text-xl font-bold'>Class 12th</h1>
          <h1 className='text-sm font-bold'>
            Board : <span className='font-semibold'>only (U.P Board)</span>
          </h1>
          <h1 className='text-md font-bold'>Subject mention:</h1>
          <div className='text-sm font-semibold'>
            <p># Hindi</p>
            <p># english</p>
            <p># Geography</p>
            <p># education</p>
            <p># sociology</p>
            <p># Psychology</p>
            <p># civics</p>
            <p># History</p>
            <p># economics</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={itemVariants}
          className='md:w-60 p-10 flex shadow-lg flex-col bg-white hover:border-gray-600 hover:border-2 rounded-xl md:p-4 gap-1'
        >
          <div className='bg-blue-800 rounded-full flex items-center justify-center w-12 h-12 text-white'>
            <FaBook className='w-6 h-6' />
          </div>
          <h1 className='text-xl font-bold'>Class 10th</h1>
          <h1 className='text-sm font-bold'>
            Board : <span className='font-semibold'>(U.P Board + CBSC)</span>
          </h1>
          <h1 className='text-md font-bold'>Subject mention:</h1>
          <div className='text-sm font-semibold'>
            <p># Hindi</p>
            <p># english</p>
            <p># Geography</p>
            <p># Math</p>
            <p># Physics</p>
            <p># chemistry</p>
            <p># Biology</p>
            <p># History</p>
            <p># economics</p>
            <p># Computer</p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={itemVariants}
          className='md:w-60 p-10 flex shadow-lg bg-white hover:border-gray-600 hover:border-2 flex-col rounded-xl md:p-4 gap-1'
        >
          <div className='bg-blue-800 rounded-full flex items-center justify-center w-12 h-12 text-white'>
            <FaBook className='w-6 h-6' />
          </div>
          <h1 className='text-xl font-bold'>Class 1st to 9th</h1>
          <h1 className='text-sm font-bold'>
            Board : <span className='font-semibold'>(U.P Board + CBSC)</span>
          </h1>
          <h1 className='text-md font-bold'>Subject mention:</h1>
          <div className='text-sm font-semibold'>
            <p># Hindi</p>
            <p># english</p>
            <p># Geography</p>
            <p># civics</p>
            <p># History</p>
            <p># Computer</p>
            <p># economics</p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  </div>
</motion.section>

        </div>
    )
}

export default Page7