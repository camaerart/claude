
import Image from "next/image";
import React from "react";
import { Phone, BookOpen, Box, User, Search, ShoppingCart } from 'lucide-react';

import Link from "next/link";
const Navbar = () => {
    return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 hover:shadow-2xl ease-in-out duration-300 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo.png"
            alt="logo C"
            width={30}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden md:block text-gray-500 hover:text-pretty hover:text-pink-400 ease-in-out duration-300">
            Claue
          </span>
        </a>

         <div className="w-[600px] h-full flex flex-row items-center justify-between ml-6 ">
          <div className="hidden md:flex items-center justify-between w-full h-auto border border-[white] hover:border-[pink] bg-[gray-200] mr-3 md:mr-[13px] px-2 md:px-[20px] py-1 md:py-[10px] rounded-xl text-black hover:text-pink-600 ease-in-out duration-300 space-x-2">
  <a href="#" className="cursor-pointer">
    General Shop
  </a>
  <a href="#" className="cursor-pointer">
    Promos
  </a>
  <a href="#" className="cursor-pointer">
    CX
    </a>
     <a href="#" className="cursor-pointer">
    Promos💓
    </a>
    <a href="#" className="cursor-pointer">
    Fast delivery🍧
    </a>
</div>
          {/* Íconos en dispositivos móviles */}
          <div className="md:hidden flex flex-row gap-7 ml-5 text-white">
          <Phone size={24} className="cursor-pointer" />
          <BookOpen size={24} className="cursor-pointer" />
          <Box size={24} className="cursor-pointer" />
        </div>
        </div>

         <div className="flex justify-center space-x-4">
  <Link href="#" rel="noopener noreferrer" target="_blank">
    <User className="w-6 h-6 text-black hover:text-sky-600 ease-in-out duration-300" />
  </Link>
  <Link href="#" rel="noopener noreferrer" target="_blank">
    <Search className="w-6 h-6 text-black hover:text-sky-400 ease-in-out duration-300" />
  </Link>
  <Link href="#" rel="noopener noreferrer" target="_blank">
    <ShoppingCart className="w-6 h-6 text-black hover:text-pink-400 ease-in-out duration-300" />
  </Link>
</div>
      </div>
    </div>
  );
};

export default Navbar;