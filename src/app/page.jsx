import Image from "next/image";

const Homepage = () => {
  return <div className="h-full font-mono flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* IMAGE CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image src="/hero.png" alt="" fill className="object-contain"/>
    </div>
    {/* TEXT CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 item-center justify-center">
    {/* TITLE CONTAINER */}
    <h1 className="text-3xl md:text-4xl font-bold"><span className="text-orange-400">Crafting</span> Digital <span className="text-red-400">Experiences,</span> Designing Tomorrow.</h1>
    {/* DESC */}
    <p className="md:text-lg text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, amet nostrum veniam ex cupiditate dolore blanditiis minima veritatis velit perferendis.</p>
    {/* BUTTONS   */}
    <div className="w-full flex gap-4">
      <button className="p-4 font-bold rounded-lg ring-2 ring-red-500 bg-red-400 text-white">View My Work</button>
      <button className="p-4 rounded-lg ring-2 ring-orange-400 ">Contact Me</button>
    </div>
    </div>
  </div>;
};

export default Homepage;
