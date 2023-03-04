import Link from 'next/link';
import { HiTerminal } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineNewspaper } from "react-icons/hi";

function LinkLayout({ page, name }) {
  return (
    <div className='flex flex-col justify-center items-center text-white hover:text-green z-[101] w-20 h-20 bg-main border-2 border-main rounded'>
      {name === "About" ? <HiUser />  : ""}
      {name === "Projects" ? <HiTerminal /> : ""}
      {name === "Blogs" ? <HiOutlineNewspaper /> : ""}
      {name === "Contact" ? <HiOutlineMail /> : ""}
      <Link href={page} 
      className='
      font-bold 
      text-sm 
      '>
        { name }
      </Link>
    </div>
  )
}

export default function Nav() {

  return (
    <div className='absolute left-20 top-44 z-[101] flex flex-col items-start space-y-2'>
        <LinkLayout page="/" name="About" />
        <LinkLayout page="" name="Projects" />
        <LinkLayout page="" name="Blogs" />
        <LinkLayout page="" name="Contact" />
    </div>
  )
}
