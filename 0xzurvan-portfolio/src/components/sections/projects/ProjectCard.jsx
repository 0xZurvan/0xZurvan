import { motion } from "framer-motion";
import Stack from "./Stack";
import { AiFillFolderOpen } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function ProjectCard({
  title,
  description,
  stacks,
  timeline,
  link,
  github,
}) {
  return (
    <motion.div
      className="
    w-[230px]
    h-[280px]
    md:w-[500px]
    md:h-[200px]
    xl:w-[500px]
    xl:h-[200px]
    lg:w-[500px]
    lg:h-[200px]
    flex
    flex-col
    bg-main
    hover:border-2
    hover:border-b-green
    hover:border-l-green
    hover:border-t-main
    hover:border-r-main
    shadow-sm shadow-black
    rounded-lg
    py-6
    "
    >
      <motion.div className="flex flex-row justify-between items-baseline px-6">
        <motion.div className="flex flex-row justify-evenly gap-3">
          <AiFillFolderOpen className="text-green w-6 h-6" />
          <motion.h3 className="font-oswald font-bold text-green text-lg md:text-xl lg:text-xl xl:text-xl">
            {title}
          </motion.h3>
        </motion.div>
        <motion.div className="flex flex-row justify-evenly gap-2">
          {link !== "" ? (
            <a href={link} target="_blank">
              <HiArrowTopRightOnSquare className="text-green hover:text-darkGreen w-6 h-6" />
            </a>
          ) : (
            ""
          )}
          {github !== "" ? (
            <a href={github} target="_blank">
              <AiFillGithub className="text-green hover:text-darkGreen w-6 h-6" />
            </a>
          ) : (
            ""
          )}
        </motion.div>
      </motion.div>

      <motion.div className="flex flex-col justify-items-start gap-4 px-6 pt-2">
        <motion.p className="font-oswald font-normal text-sm md:text-base lg:text-base xl:text-base text-white">
          {description}
        </motion.p>
        <motion.div className="flex flex-row justify-between">
          <Stack stacks={stacks} />
          {/* <motion.button className='font-oswald text-sm text-white hover:text-green mr-4'>See more</motion.button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
