import brand_image from "../../assets/brand_image.jpg";
import bg from "../../assets/bg-3.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandXFilled } from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Shadow from "./Shadow";
import { motion } from "framer-motion";

function BackgroundImage() {
  return (
    <div>
      <img src={bg} className="z-[100] w-full rounded-lg h-72" />
      {/* Divider */}
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <rect x="1200" height="3.6"></rect>
        <rect height="3.6"></rect>
        <path
          d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  );
}

function BrandImage() {
  return (
    <div className="relative bottom-28 flex flex-row justify-center items-center space-x-[-120px]">
      <span className="z-[100] w-32 h-32 bg-green opacity-20 rounded-full"></span>
      <img
        src={brand_image}
        className="z-[101] border-2 border-main w-32 h-32 rounded-full"
      />
    </div>
  );
}

function Text() {
  return (
    <div className="relative bottom-28 m-4 space-y-3">
      <h1 className="text-white text-4xl font-bold font-oswald text-center">
        0xZurvan
      </h1>
      <div className="text-green text-lg font-medium font-oswald text-center">
        <Typewriter
          options={{
            strings: [
              "Developer",
              "Smart Contracts",
              "Front End",
              "Freelancer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="flex flex-row justify-center gap-4">
      <motion.a
        href="https://github.com/0xZurvan"
        target="_blank"
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <FaGithub className="text-white hover:text-green" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/isaac-hernandez-643086199"
        target="_blank"
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <FaLinkedin className="text-white hover:text-green" />
      </motion.a>
      <motion.a
        href="https://twitter.com/0xZurvan"
        target="_blank"
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <TbBrandXFilled className="text-white hover:text-green" />
      </motion.a>
      <motion.a
        href="https://discord.com/users/823992612028940319"
        target="_blank"
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <FaDiscord className="text-white hover:text-green" />
      </motion.a>
    </div>
  );
}

function CardUI() {
  return (
    <div
      className="
    z-[102] 
    hidden
    xl:flex
    xl:flex-col
    xl:space-y-2
    xl:rounded-lg 
    xl:bg-main 
    xl:w-[470px] 
    xl:h-[620px] 
    xl:shadow-2xl 
    xl:shadow-black
    lg:flex
    lg:flex-col
    lg:rounded-lg 
    lg:bg-main 
    lg:w-[420px] 
    lg:h-[620px] 
    lg:shadow-2xl 
    lg:shadow-black
    "
    >
      <BackgroundImage />
      <BrandImage />
      <div className="flex flex-col items-center space-y-[-40px]">
        <Text />
        <Icons />
      </div>
      <a href="./Resume.pdf" target="_blank" className="text-green text-center font-oswald">Download CV</a>
    </div>
  );
}

export default function PersonalCard() {
  return (
    <div className="flex flex-row space-x-[-430px] space-y-8">
      <Shadow />
      <CardUI />
    </div>
  );
}
