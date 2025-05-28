import React from 'react';
import {  FaXTwitter, FaYoutube,} from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
<footer className="font-tajawal bg-[#E3D8FF]  py-6 mt-10  rounded text-sm justify-between">
  <div className="w-full px-4 flex flex-row-reverse items-center justify-start gap-6 flex-wrap">

    <div className="shrink-0">
      <img src="/logo.png" alt="الشعار" className="h-12 mr-4 " />
    </div>

    <div className="flex gap-4  font-bold text-indigo-800">
      <a href="https://tuwaiq.edu.sa/terms" className="hover:text-purple-700 transition"> الشروط والأحكام</a>
      <a href="https://tuwaiq.edu.sa/about" className="hover:text-purple-700 transition">حول الأكاديمية</a>
      <Link to="/submit" className="hover:text-purple-700 transition">شارك مشروعك </Link>
    </div>
<div className=" ml-auto flex justify-start "></div>
    <div className=" flex gap-3  ml-4">
      
      <a href="https://x.com/TuwaiqAcademy" className="bg-indigo-800 text-white p-2 rounded-full hover:bg-purple-700 transition">
        <FaXTwitter size={18} />
      </a>
      <a href="https://www.youtube.com/channel/UC_pOwgeaVK7bg3z7fJB5N8w" className="bg-indigo-800 text-white p-2 rounded-full hover:bg-purple-700 transition">
        <FaYoutube size={18} />
      </a>
     
    </div>

  </div>
</footer>
  );
};

export default Footer;