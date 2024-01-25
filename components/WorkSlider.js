// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/n2.jpg',
        },
        {
          title: 'title',
          path: '/n1.jpg',
        },
        {
          title: 'title',
          path: '/n3.jpg',
        },
        {
          title: 'title',
          path: '/e3.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/e3.jpg',
        },
        {
          title: 'title',
          path: '/e1.jpg',
        },
        {
          title: 'title',
          path: '/e2.jpg',
        },
        {
          title: 'title',
          path: '/n2.jpg',
        },
      ],
    },
  ],
};

import Image from "next/image";


// data

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {Pagination} from 'swiper'
import {BsArrowRight} from 'react-icons/bs'


const WorkSlider = () => {
  return <Swiper 
  spaceBetween={10}

  pagination={{
    clickable:true,

  }}
  modules={[Pagination]}
  className="h-[280px] sm:h-[450px]"
  >
    {workSlides.slides.map((slide,index)=>{
      return(
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image,index)=>{
              return <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                <div className="flex items-center justify-center relative overflow-hidden">
                  {/* image */}
                  <Image src={image.path} width={500} height={300} alt="" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#a5f706] to-[#679a05] opacity-0 group:hover:opacity:80 transition-all duration-700"></div>
                </div> 
              </div>
            })}
          </div>
        </SwiperSlide>
      )
    })}
  </Swiper>
};

export default WorkSlider;
