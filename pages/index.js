import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import {motion} from 'framer-motion';
import { fadeIn } from "../variants";



const Home = () => {
  return <div className="bg-primary-60 h-full">
    {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
        {/* title */}
        <motion.h1 
        variants={fadeIn('down',0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h1">
          Робота в Одесі<br /> для <span className="text-accent"> молодих</span> та <br /> <span className="text-accent">амбітних</span>
          </motion.h1>
           {/* subtitles  */}
           <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 text-lg font-bold xl:mb-16">
            Нам потрібен саме <span className="text-accent">ТИ</span> !
           </p>
            {/* btn */}
           <div className=" justify-center hidden relative">
            <ProjectsBtn />
           </div>
           

      </div>
    </div>
    {/* image */}
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
       {/*bg image */}
       <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"> 
       </div>
       {/* particles */}
       <ParticlesContainer />
         {/* avatar img */}
         <motion.div 
         variants={fadeIn('down',0.2)}
        initial='hidden'
        animate='show'
        exit='hidden' 
        transition={{duration:1,ease:'ease'}}
        className="w-full h-full max-w-[737px] max-h-[637px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
         </motion.div>
    </div>
  </div>;
};

export default Home;
