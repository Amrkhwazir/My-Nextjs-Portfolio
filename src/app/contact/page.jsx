"use client"
import React from 'react'
import {motion} from "framer-motion"

const text = "Say Hello"

 const ContactPage = () => {
  return (
    <motion.div className="h-full text-white" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2">
        <motion.div>
          {text.split("").map((letter,index)=>(
            <motion.span key={index} initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 3, repeat: Infinity, delay: index * 0.1}}>{letter}</motion.span>
          ))}
        </motion.div>
      </div>
      {/* FORM CONTAINER */}
      <form className="h-1/2 lg:h-full lg:w-1/2"></form>
    </div>
  </motion.div>
  )
}

export default ContactPage