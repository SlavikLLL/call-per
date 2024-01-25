 // icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';

const Services = () => {
  return <div className="h-full bg-primary/30 py-36 flex items-center ">
    <Circles />
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/*text */}
        <div className="text-center flex xl:w-[36vw] flex-col lg:text-left mb-4 xl:mb-0">
          <h2 className="text-3xl xl:mt-8"> <span className="text-accent">Наш </span> офіс</h2>
          <p className="mb-4 max-w-[400px] text-sm font-bold mx-auto lg:mx-0">
          Стимулююче робоче середовище:<br /> У нас панує атмосфера, яка надихає на досягнення результатів, а кожен день приносить нові виклики .
        </p>
        </div>
        <div className="w-full xl:max-w-[68%]">
          {/*slider */}
         <ServiceSlider />
        </div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Services;
