import { motion } from 'framer-motion';
import { SiSolidity } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { RiVuejsFill } from "react-icons/ri";

function FirstRow() {
  return (
    <div className='xl:w-full lg:w-full md:full flex flex-row justify-center items-center gap-2 md:space-x-20 xl:space-x-20 lg:space-x-20 py-4'>

      <div className='flex flex-col items-center justify-evenly gap-2'>
        <SiSolidity className='w-10 h-10 md:w-12 md:h-12 xl:w-12 xl:h-12 lg:w-12 lg:h-12 text-green border border-green rounded-full p-2' />
        <p className='font-oswald text-sm md:text-base xl:text-base lg:text-base text-white'>
          Solidity
        </p>
      </div>
      
      <div className='flex flex-col items-center justify-evenly gap-2'>
        <SiTypescript className='w-10 h-10 md:w-12 md:h-12 xl:w-12 xl:h-12 lg:w-12 lg:h-12 text-green border border-green rounded-full p-2' />
        <p className='font-oswald text-sm md:text-base xl:text-base lg:text-base text-white'>
          Typescript
        </p>
      </div>

      <div className='flex flex-col items-center justify-evenly gap-2'>
        <DiJavascript className='w-10 h-10 md:w-12 md:h-12 xl:w-12 xl:h-12 lg:w-12 lg:h-12 text-green border border-green rounded-full p-2' />
        <p className='font-oswald text-sm md:text-base xl:text-base lg:text-base text-white'>
          Javascript
        </p>
      </div>

      <div className='flex flex-col items-center justify-evenly gap-2'>
        <DiReact className='w-10 h-10 md:w-12 md:h-12 xl:w-12 xl:h-12 lg:w-12 lg:h-12 text-green border border-green rounded-full p-2' />
        <p className='font-oswald text-sm md:text-base xl:text-base lg:text-base text-white'>
          React
        </p>
      </div>

    </div> 
  ) 
}

function SecondRow() {
  return (
    <div className='xl:w-full lg:w-full md:full flex flex-row justify-center items-center gap-2 md:space-x-20 xl:space-x-20 lg:space-x-20 py-4'>

      <div className='flex flex-col items-center justify-evenly gap-2'>
        <RiVuejsFill className='w-10 h-10 md:w-12 md:h-12 xl:w-12 xl:h-12 lg:w-12 lg:h-12 text-green border border-green rounded-full p-2' />
        <p className='font-oswald text-sm md:text-base xl:text-base lg:text-base text-white'>
          Vue.js
        </p>
      </div>

      <div className='flex flex-col items-center justify-evenly gap-2'>
        <SiTailwindcss className='w-10 h-10 md:w-12 md:h-12 xl:w-12 xl:h-12 lg:w-12 lg:h-12 text-green border border-green rounded-full p-2' />
        <p className='font-oswald text-sm md:text-base xl:text-base lg:text-base text-white'>
          TailwindCSS
        </p>
      </div>

      <div className='flex flex-col items-center justify-evenly gap-2'>
        <DiHtml5 className='w-10 h-10 md:w-12 md:h-12 xl:w-12 xl:h-12 lg:w-12 lg:h-12 text-green border border-green rounded-full p-2' />
        <p className='font-oswald text-sm md:text-base xl:text-base lg:text-base text-white'>
          HTML5
        </p>
      </div>

      <div className='flex flex-col items-center justify-evenly gap-2'>
        <DiCss3 className='w-10 h-10 md:w-12 md:h-12 xl:w-12 xl:h-12 lg:w-12 lg:h-12 text-green border border-green rounded-full p-2' />
        <p className='font-oswald text-sm md:text-base xl:text-base lg:text-base text-white'>
          CSS
        </p>
      </div>

    </div> 
  ) 
}

export default function Skills() {
  return (
    <div className='xl:w-full lg:w-full md:w-full flex flex-col justify-center items-center xl:items-start xl:justify-center lg:items-start space-y-2 mx-8 mt-12 divide-y divide-green/30'>
      <div>
        <h2 className='font-oswald font-medium text-white text-xl text-center md:text-2xl xl:text-2xl xl:text-left lg:text-2xl lg:text-left'>Skills</h2>
      </div>
      <div className='xl:w-full lg:w-full md:w-full flex flex-col items-center justify-center gap-4'>
        <FirstRow />
        <SecondRow />
      </div>
    </div>
  )
}