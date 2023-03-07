'use client';

import Image from 'next/image';
import brand_image from '/public/assets/brand_image.jpg';
import bg from '/public/assets/bg-3.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

function BackgroundImage() {
  return (
    <div>
      <Image 
      src={bg}
      className='z-[100] w-full rounded-lg h-72'
      />
      {/* Divider */}
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <rect x="1200" height="3.6"></rect>
        <rect height="3.6"></rect>
        <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" class="shape-fill"></path>
      </svg>
    </div>
  )
}

function BrandImage() {
  return (
    <div className='relative bottom-28 flex flex-row justify-center items-center space-x-[-120px]'>
      <span className='z-[100] w-32 h-32 bg-green opacity-20 rounded-full'></span>
      <Image
      src={brand_image}
      className='z-[101] border-2 border-main w-32 h-32 rounded-full'
      />
    </div>
  )
}

function Text() {
  return (
    <div className='relative bottom-28 m-4 space-y-3'>
      <h1 className='text-white text-4xl font-bold font-oswald text-center'>0xZurvan</h1>
      <div className='text-green text-lg font-medium font-oswald text-center'>
        <Typewriter
          options={{
            strings: [
             "Developer",
             "Smart Contracts",
             "Front End",
             "Freelancer"
            ],
            autoStart: true,
            loop: true
          }}
        />
      </div>
    </div>
  )
}

function Icons() {
  return (
    <div className='flex flex-row justify-center gap-4'>
      <FaGithub className='text-white hover:text-green' />
      <FaLinkedin className='text-white hover:text-green' />
      <FaReddit  className='text-white hover:text-green' />
      <FaTwitter className='text-white hover:text-green' />
      <FaDiscord  className='text-white hover:text-green' />
    </div>
  )
}

export default function PersonalCard() {
  return (
    <div className='absolute left-44 top-8 rounded-lg bg-main w-[470px] h-[620px] z-[102] shadow-2xl shadow-black'>
      <BackgroundImage />
      <BrandImage />
      <div className='flex flex-col items-center space-y-[-50px]'>
        <Text />
        <Icons />
      </div>
    </div>
  )
}
