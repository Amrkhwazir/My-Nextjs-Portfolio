"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { NavLinks } from './navLinks'
import { easeIn, easeInOut, motion } from 'framer-motion'


const links = [
  {url: "/", title: "Home"},
  {url: "/about", title: "About"},
  {url: "/portfolio", title: "Portfolio"},
  {url: "/contact", title: "Contact"},
]
const Navbar = () => {
  const [open, setOpen] = useState(false)

  const topVariants={
    closed:{
      rotate: 0,
    },
    opened:{
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const centerVariants={
    closed:{
      opacity: 1,
    },
    opened:{
      opacity: 0,
    }
  };

  const bottomVariants={
    closed:{
      rotate: 0,
    },
    opened:{
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  };

const listVariants = {
  closed : {
    x : "100vw"
  },
  opened : {
    x : 0,
    transition : {
      when : "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const listItemsVariants = {
  closed : {
    x : -10,
    opacity : 0,
  },
  opened : {
    x : 0,
    opacity : 1,
  }
};

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg'>
      {/* LINKS */}
      <div className='hidden md:flex gap-4 w-1/3'>
      {
        links.map((link)=> (
         <NavLinks link={link} key={link.title} />
        ))
      }
      </div>
      {/* LOGO */}
      <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
      <Link href="/" className='text-sm flex items-center justify-center'>
        <span className='font-semibold text-indigo-500 mr-1 text-2xl md:text-3xl'>AKMDev.</span>
      </Link>
      </div>
      {/* SOCIALS */} 
      <div className='hidden md:flex gap-6 w-1/3 pt-1'>
        <Link href="https://github.com/Amrkhwazir" target='_blank'>
      <Image src="/Github.png" alt="" width={28} height={28} />
        </Link>
        <Link href="#">
      <Image src="/fbook.png" alt="" width={28} height={28} />
        </Link>
        <Link href="#">
      <Image src="/Whatsapp.png" alt="" width={28} height={28} />
        </Link>
        <Link href="#">
      <Image src="/Instagram.png" alt="" width={28} height={28} />
        </Link>
        <Link href="https://www.linkedin.com/in/aamir-khan-215836233/">
      <Image src="/Linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* MENU */}
      <div className='md:hidden '>
        
        <button  className='w-10 bg h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen((prev) => !prev)}>
          <motion.div animate={open ? "opened" : "closed"} variants={topVariants} className=' w-10 h-1 bg-indigo-500 rounded origin-left'></motion.div>
          <motion.div animate={open ? "opened" : "closed"} variants={centerVariants} className=' w-10 h-1 bg-indigo-500 rounded'></motion.div>
          <motion.div animate={open ? "opened" : "closed"} variants={bottomVariants} className=' w-10 h-1 bg-indigo-500 rounded origin-left'></motion.div>
        </button>
        {/* MENU LIST */}
        { open &&

          <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 right-0 w-screen h-screen bg-zinc-900 text-white flex flex-col items-center justify-center gap-8 text-3xl z-40'>
              <span className='font-semibold text-indigo-500 bg-clip-text text-transparent absolute top-6 left-4 text-2xl md:hidden '>AKMDev.</span>
              <svg id='patternId' className='absolute -z-40 opacity-60' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(1) rotate(25)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(240, 6%, 10%, 1)'/><path d='M20-5V5m0 30v10m20-30v10M0 15v10'  stroke-linecap='square' stroke-width='1' stroke='hsla(243, 75%, 59%, 1)' fill='none'/><path d='M-5 40H5M-5 0H5m30 0h10M35 40h10M15 20h10'  stroke-linecap='square' stroke-width='1' stroke='hsla(198, 93%, 60%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>
      {links.map((link)=> (
        <motion.div variants={listItemsVariants} key={link.title}>
        <Link href={link.url}>
          {link.title}
          </Link>
          </motion.div> 
      ))}
        </motion.div>
    }
      </div>
    </div>
  )
}

export default Navbar