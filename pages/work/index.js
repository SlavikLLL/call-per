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
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';

const Work = () => {
  return <div className="h-full bg-primary/30 py-36 flex items-center ">
    <Circles />
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/*text */}
        <div className="text-center flex xl:w-[36vw] flex-col lg:text-left mb-4 xl:mb-0">
          <h2 className="text-sm xl:mt-8"> <span className="text-accent">Умови</span> праці</h2>
          <p className="mb-4 text-xs max-w-[400px] mx-auto lg:mx-0">
            -Комфортні умови праці:<br />
            В випадку якщо , Ви з іншого міста, компанія бере на себе фінансові витрати житла.<br />
            -Ми супроводжуєм кожного співробітника до результата.
          </p>
          <h2 className="text-sm xl:mt-8"> <span className="text-accent">Заробітна </span>плата</h2>
          <p className="mb-4 text-xs max-w-[400px] mx-auto lg:mx-0">
            Перший місяць - від 12000 - 20000&#8372;.< br />
            Другий місяць - від 20000 - 27000&#8372;.< br />
            Шостий місяця - зазвичай перевищує 35000&#8372;.< br />
            І чим далі ти розвиваєшся - тим вище заробітня плата  .
          </p>
        </div>
        <div className="w-full xl:max-w-[68%] mt-10">
          {/*slider */}
          <WorkSlider />
        </div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Work;
