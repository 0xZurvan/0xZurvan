'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { HiTerminal } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiBookmark } from "react-icons/hi";
import { HiIdentification } from "react-icons/hi";

function LinkLayout({ page, name }) {
  return (
    <Link 
    href={page}
    >
      <motion.button 
      href={page}  
      className='
      flex 
      flex-col 
      justify-center 
      items-center 
      text-white 
      hover:text-green 
      hover:border-2 
      hover:border-b-green 
      hover:border-l-green
      hover:my-2
      z-[101] 
      w-20 
      h-20 
      bg-main border-2 border-main rounded'
      whileHover={{ scale: 1.2 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
      >
        {name === "About" ? <HiUser />  : ""}
        {name === "Projects" ? <HiTerminal /> : ""}
        {name === "Blogs" ? <HiBookmark /> : ""}
        {name === "Contact" ? <HiIdentification /> : ""}
        <motion.p className='font-normal font-oswald text-sm'>{ name }</motion.p>
      </motion.button>
    </Link>
  )
}

export default function Nav() {

  return (
    <div className='absolute left-20 top-44 z-[101] flex flex-col items-start space-y-2'>
        <LinkLayout page="/" name="About" />
        <LinkLayout page="/projects" name="Projects" />
        <LinkLayout page="" name="Blogs" />
        <LinkLayout page="" name="Contact" />
    </div>
  )
}
