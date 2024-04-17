"use client"
import Image from "next/image";
import {motion} from "framer-motion"

const Homepage = () => {
  
  return (
    <motion.div className="h-full" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1.2}}>
    <div className="h-full overflow-scroll md:overflow-hidden lg:overflow-hidden flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* IMAGE CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image src="/hero.jpg" alt="" fill className="object-contain"/>
    </div>
    {/* TEXT CONTAINER */}
    <div className=" h-1/2 pt-24 lg:h-full lg:w-1/2 flex flex-col gap-8 item-center justify-center">
    {/* TITLE CONTAINER */}
    <h1 className="text-3xl text-white  md:text-4xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
    {/* DESC */}
    <p className="md:text-lg text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, amet nostrum veniam ex cupiditate dolore blanditiis minima veritatis velit perferendis.</p>
    {/* BUTTONS   */}
    <div className="w-full flex gap-4 pb-4 md:pb-0 lg:pb-0">
      <button className="p-4 font-bold rounded-lg  bg-gradient-to-r from-purple-300 to-red-300 text-white">View My Work</button>
      <button className="p-4 rounded-lg ring-1 ring-red-300 text-white">Contact Me</button>
    </div>
    </div>
  </div>
  </motion.div>
)};

export default Homepage;
