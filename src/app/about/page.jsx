"use client"
import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'



const AboutPage = () => {


  return (
    <motion.div className="h-full text-white" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
      {/* CONTAINER */}
      <div className=''>
        {/* TEXT CONTAINER */}

      <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
        {/* BIOGRAPHY CONTAINER */}
        <div className=' flex flex-col gap-12 justify-center'>
        {/* BIOGRAPHY TITLE  */}

        <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
        {/* BIOGRAPHY DESCRIPTION */}
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Consequatur maxime quae, qui minus deserunt aliquam delectus repellat 
          inventore quibusdam suscipit quis soluta doloremque architecto pariatur
           unde excepturi odio ducimus. Suscipit modi mollitia ipsam ex veritatis nulla 
           provident quos delectus expedita.</p>
        {/* BIOGRAPHY QUOTE  */}

        <span className='italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, obcaecati.</span>
        {/* BIOGRAPHY SIGN */}

        <div className='w-72 self-end'>
        <Image src="/signature.png" alt="my signature" width={300} height={10} />
        </div>
        </div>
        {/* SKILLS CONTAINER */}
        <div className=''>SKILLS</div>
        {/* EXPERIENCE CONTAINER */}
        <div className=''>EXPERIENCE</div>
      </div>
        {/* SVG CONTAINER */}
        <div className='hidden'></div>
      </div>
    </motion.div>
  )
}

export default AboutPage