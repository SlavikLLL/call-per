// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import Image from "next/image";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    img:'/p1.jpg',
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    img:'/p6.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    img:'/p4.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    img:'/p7.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {FreeMode,Pagination} from 'swiper'


const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320:{
      slidesPerView:1,
      spaceBetween:15,

    },
    640:{
      slidesPerView:3,
      spaceBetween:15,
    }
  }}
  freeMode={true}
  pagination={{
    clickable:true,

  }}
  modules={[FreeMode, Pagination]}
  className="h-[240px] sm:h-[340px]"
  >
    {serviceData.map((item,index)=>{
      return(
        <SwiperSlide key={index}>
          <div className=" bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all">
            {/* icon */}
            {/* title */}
            <div>
             <Image className="" src={item.img} width={350} height={350} alt="" />
            </div>
            {/* arrrows */}
          </div>
        </SwiperSlide>
      )
    })}
  </Swiper>
};

export default ServiceSlider;
