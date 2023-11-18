import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { HiTerminal } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiIdentification } from "react-icons/hi";

function LinkLayout({ page, name }) {
  return (
    <Link
      to={page}
      className="
        flex 
        flex-col 
        justify-center 
        items-center 
        font-normal 
        font-oswald 
        text-sm 
        text-white 
        hover:text-green 
        z-[101] 
        w-20 
        h-20 
        bg-main border-2 border-main rounded-lg"
    >
      {name === "About" ? <HiUser /> : ""}
      {name === "Projects" ? <HiTerminal /> : ""}
      {name === "Contact" ? <HiIdentification /> : ""}
      {name}
    </Link>
  );
}

export default function DeskNav() {
  return (
    <div
      className="
    z-[101] 
    hidden
    xl:flex 
    xl:flex-col 
    xl:items-start 
    xl:space-y-2 
    lg:items-start 
    lg:space-y-2 
    "
    >
      <LinkLayout page="/" name="About" />
      <LinkLayout page="/projects" name="Projects" />
      <LinkLayout page="/contact" name="Contact" />
    </div>
  );
}
