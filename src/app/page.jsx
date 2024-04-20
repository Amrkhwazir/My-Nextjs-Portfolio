"use client"
import Image from "next/image";
import {motion} from "framer-motion"
import Link from "next/link";

const Homepage = () => {
  
  return (
    <motion.div className="h-full" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1.2}}>
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* IMAGE CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image src="/hero.jpg" alt="" fill className="object-contain"/>
    </div>
    {/* TEXT CONTAINER */}
    <div className=" h-2/3 lg:h-full lg:w-1/2 flex flex-col gap-8 item-center justify-center">
    {/* TITLE CONTAINER */}
    <h1 className="text-2xl text-white  md:text-4xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
    {/* DESC */}
    <p className="-mt-2 md:text-lg text-gray-400">Welcome to my web and mobile design portfolio, where innovation meets functionality, and pixels come to life. where design knows no bounds and innovation knows no limits.</p>
    {/* BUTTONS   */}
    <div className="w-full flex gap-4 md:mt-3 ">
     <Link href={"/portfolio"}><button className="p-3 md:p-4 lg:p-4 font-bold rounded-lg  bg-gradient-to-r from-purple-300 to-red-300 text-white">View My Work</button></Link>
     <a href={"/cv.pdf"} download={"cv"} ><button className="p-3 md:p-4 lg:p-4 rounded-lg ring-1 ring-red-300 text-white">Download Cv</button></a>
    </div>
    </div>
  </div>
  </motion.div>
)};

export default Homepage;
