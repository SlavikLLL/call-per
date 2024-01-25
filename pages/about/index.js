import React, {useState} from "react";
import Avatar from '../../components/Avatar';
import {motion} from 'framer-motion';
import { fadeIn } from "../../variants";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import Circles from "../../components/Circles";


//  data
const aboutData = [
  {
    title: 'Навички',
    info: [
      {
        title: 'Цілеспрямована , відповідальна людина ',

      },
      {
        title: 'Має гарні  комунікативні навички ',
      },
      {
        title: 'Вміння та прагнення саморозвитку , праця  на результат ',
      },
      
      {
        title: 'Вміння  працювати в команді',
      },

    ],
  },
 
  {
    title: 'Досвід',
    info: [
      {
        title: 'Для нас у пріоритеті досвід у сфері продажу, але готові розглянути кандитата без досвіду, так як ми повністю займаємося Вашим навчанням.',
      },
    ],
  },
 
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index)
  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />
    {/* avatar */}
    <motion.div 
    variants={fadeIn('right', 0.2)} 
    initial='hidden'
    animate='show'
    exit='hidden'
    className="hidden xl:flex absolute bottom-0 -left-[370px]">
      
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 gap-y-10">
      {/* text */}
      <div className="flex-1 flex flex-col justify-center ">
        <h2 className="text-2xl">
          Наш <span className="text-accent">ідеальний</span> кандидат
          </h2>
        <p className="max-w-[500px] mx-auto font-bold text-sm xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
        У кожному кандидаті є потенціал стати цінним активом нашої компанії.
        </p>
        </div>
        {/* info */}
      <div className="  flex flex-col w-full xl:max-w-[48%] h-[340px]">
        <div className="flex gap-x-4 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item,itemIndex)=>{
            return (
            <div key={itemIndex} onClick={()=>setIndex(itemIndex)} className={`${index === itemIndex && 'text-accent after:w-[100%]  after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}>
              {item.title}</div>
            )
          })}
        </div>
        <div className="  xl:py-6  flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
        {aboutData[index].info.map((item,itemIndex)=>{
          return(
            <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-maw gap-x-2 items center text-white/60">
             <div className="font-bold text-4  mb-2 md:mb-0"> - {item.title}</div> 
             <div className="flex gap-x-4">
             {/* icons */}
             {item.icons?.map((icon,itemIndex)=>{
              return <div className="text-2xl text-white" key={itemIndex}>{icon}</div>
             })}
             </div>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  </div>;
};

export default About;
