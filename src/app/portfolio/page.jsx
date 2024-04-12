"use client"
import React from 'react'
import {motion} from "framer-motion"

const PortfoioPage = () => {
  return (
    <motion.div className="h-full text-white" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
    Portfolio Page
  </motion.div>
  )
}

export default PortfoioPage