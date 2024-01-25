import Link from "next/link";
import { RiTiktokFill, RiInstagramLine, RiTelegramLine, RiContactsBook2Line } from "react-icons/ri";

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-3xl">
    <Link href={'https://www.tiktok.com/@office_moment0'} className="hover:text-accent transition-all duration-300">
      <RiTiktokFill />
      </Link>
      <Link href={'https://t.me/HRoffice0'} className="hover:text-accent transition-all duration-300">
      <RiTelegramLine />
      </Link>
      <Link href={'https://www.instagram.com/hr_callperformance?igsh=cmR5ZnFuanU0d2d5'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
      </Link>
      <Link href={'/'} className="hover:text-accent transition-all duration-300">
      <RiContactsBook2Line />
      </Link>
      
  </div>;
};

export default Socials;
