"use client"
import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'



const AboutPage = () => {


  return (
    <motion.div className="h-full text-white" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1.2}}>
      {/* CONTAINER */}
      <div className='h-full'>
        {/* TEXT CONTAINER */}

      <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-28 lg:gap-48 xl:gap-64'>
        {/* BIOGRAPHY CONTAINER */}
        <div className='flex flex-col gap-12 justify-center'>
        {/* BIOGRAPHY TITLE  */}

        <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
        {/* BIOGRAPHY DESCRIPTION */}
        <p className='text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Consequatur maxime quae, qui minus deserunt aliquam delectus repellat 
          inventore quibusdam suscipit quis soluta doloremque architecto pariatur
           unde excepturi odio ducimus. Suscipit modi mollitia ipsam ex veritatis nulla 
           provident quos delectus expedita.</p>
        {/* BIOGRAPHY QUOTE  */}

        <span className='italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, obcaecati.</span>
        {/* BIOGRAPHY SIGN */}

        <div className='w-fit self-end'>
        <Image src="/signature.png" alt="my signature" width={300} height={10} />
        </div>
         {/* BIOGRAPHY SVG  */}
         <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f1f5f9" width={50} height={50}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V14" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 11L12 14L9 11" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>

        {/* SKILLS CONTAINER */}
        <div className='flex flex-col gap-12 justify-center'>
            {/* SKILLS TITLE  */}
        <h1 className='font-bold text-2xl'>SKILLS</h1>
        {/* SKILLS LIST  */}
        <div className='flex gap-4 flex-wrap'>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-200 text-black hover:bg-black hover:text-white">JavaScript</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-200 text-black hover:bg-black hover:text-white">TypeScript</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-200 text-black hover:bg-black hover:text-white">React.js</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-200 text-black hover:bg-black hover:text-white">Next.js</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-200 text-black hover:bg-black hover:text-white">Framer Motion</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-200 text-black hover:bg-black hover:text-white">Redux</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-200 text-black hover:bg-black hover:text-white">Node.js</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-200 text-black hover:bg-black hover:text-white">Express.js</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-200 text-black hover:bg-black hover:text-white">MongoDB</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-200 text-black hover:bg-black hover:text-white">Firebase</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-200 text-black hover:bg-black hover:text-white">Github</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-200 text-black hover:bg-black hover:text-white">Bootstrap</div>
          <div className="rounded p-2 text-sm cursor-pointer bg-slate-200 text-black hover:bg-black hover:text-white">Tailwind CSS</div>
        </div>
        {/* SKILLS SVG  */}
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f1f5f9" width={50} height={50}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V14" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 11L12 14L9 11" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        {/* EXPERIENCE CONTAINER */}
         <div className='flex flex-col gap-12 justify-center pb-48'>
        {/* EXPERIENCE TITLE  */}
        <h1 className='font-bold text-2xl'>EXPERIENCE</h1>
        {/* EXPERIENCE LIST  */}
        <div className="">
        {/* EXPERIENCE LIST ITEM  */}
        <div className="flex justify-between h-48">
        {/* LEFT  */}
        <div className="w-1/3">
        {/* JOB TITLE  */}
        <div className="w-fit bg-white text-black p-3 font-semibold rounded-b-lg rounded-s-lg">Frontend React.js Developer</div>
        {/* JOB DESC  */}
        <div className="p-3 text-sm italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, voluptatem?</div>
        {/* JOB DATE  */}
        <div className="p-3 text-sm font-semibold text-teal-300">Dec-2023 - March-2024</div>
        {/* JOB COMPANY  */}
        <div className="p-1 mx-1 rounded bg-white text-black text-sm font-semibold w-fit">Hiring Mine Pvt Ltd.</div>
        </div>
        {/* CENTER  */}
        <div className="w-1/6 ">
        {/* LINE  */}
        <div className="w-1 h-full bg-gray-300 relative">
        {/* LINE CIRCLE  */}
        <div className="absolute w-5 h-5 rounded-full ring-4 ring-teal-400 -left-2 bg-white"></div>
        </div>
        </div>
        {/* RIGHT  */}
        <div className="w-1/3"></div>
        </div>
        {/* EXPERIENCE LIST ITEM  */}
        <div className="flex justify-between h-48">
        {/* LEFT  */}
        <div className="w-1/3"></div>
        {/* CENTER  */}
        <div className="w-1/6 ">
        {/* LINE  */}
        <div className="w-1 h-full bg-gray-300 relative">
        {/* LINE CIRCLE  */}
        <div className="absolute w-5 h-5 rounded-full ring-4 ring-teal-400 -left-2 bg-white"></div>
        </div>
        </div>
        {/* RIGHT  */}
        <div className="w-1/3">
           {/* JOB TITLE  */}
        <div className="w-fit bg-white text-black p-3 font-semibold rounded-b-lg rounded-s-lg">Frontend React.js Developer</div>
        {/* JOB DESC  */}
        <div className="p-3 text-sm italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, voluptatem?</div>
        {/* JOB DATE  */}
        <div className="p-3 text-sm font-semibold text-teal-300">Dec-2023 - March-2024</div>
        {/* JOB COMPANY  */}
        <div className="p-1 mx-1 rounded bg-white text-black text-sm font-semibold w-fit">Hiring Mine Pvt Ltd.</div>
        </div>
        </div>
        {/* EXPERIENCE LIST ITEM  */}
        <div className="flex justify-between h-48">
        {/* LEFT  */}
        <div className="w-1/3">
        {/* JOB TITLE  */}
        <div className="w-fit bg-white text-black p-3 font-semibold rounded-b-lg rounded-s-lg">Frontend React.js Developer</div>
        {/* JOB DESC  */}
        <div className="p-3 text-sm italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, voluptatem?</div>
        {/* JOB DATE  */}
        <div className="p-3 text-sm font-semibold text-teal-300">Dec-2023 - March-2024</div>
        {/* JOB COMPANY  */}
        <div className="p-1 rounded bg-white text-black text-sm font-semibold w-fit">Hiring Mine Pvt Ltd.</div>
        </div>
        {/* CENTER  */}
        <div className="w-1/6 ">
        {/* LINE  */}
        <div className="w-1 h-full bg-gray-300 relative">
        {/* LINE CIRCLE  */}
        <div className="absolute w-5 h-5 rounded-full ring-4 ring-teal-400 -left-2 bg-white"></div>
        </div>
        </div>
        {/* RIGHT  */}
        <div className="w-1/3"></div>
        </div>
         
        </div>
        </div>
      </div>
        {/* SVG CONTAINER */}
        <div className='hidden'></div>
      </div>
    </motion.div>
  )
}

export default AboutPage