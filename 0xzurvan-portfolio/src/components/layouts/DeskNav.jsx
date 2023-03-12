import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { HiTerminal } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiBookmark } from "react-icons/hi";
import { HiIdentification } from "react-icons/hi";

function LinkLayout({ page, name }) {
  return (
    <motion.button 
    href={page}  
    className='
    text-white 
    hover:text-green 
    hover:border-2 
    hover:border-b-green 
    hover:border-l-green
    z-[101] 
    w-20 
    h-20 
    bg-main border-2 border-main rounded-lg'
    whileHover={{ scale: 1.2 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}}
    >
      <Link 
      to={page}
      className='flex flex-col items-center font-normal font-oswald text-sm'
      >
        {name === "About" ? <HiUser />  : ""}
        {name === "Projects" ? <HiTerminal /> : ""}
        {name === "Blogs" ? <HiBookmark /> : ""}
        {name === "Contact" ? <HiIdentification /> : ""}
        { name }
      </Link>
    </motion.button>
  )
}

export default function Nav() {

  return (
    <div className='absolute left-20 top-44 z-[101] flex flex-col items-start space-y-2 hover:space-y-4'>
        <LinkLayout page="/" name="About" />
        <LinkLayout page="/projects" name="Projects" />
        <LinkLayout page="/blog" name="Blogs" />
        <LinkLayout page="/contact" name="Contact" />
    </div>
  )
}
