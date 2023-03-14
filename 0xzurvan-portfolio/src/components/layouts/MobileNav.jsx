
import { Link } from 'react-router-dom';
import { useState } from 'react';
import brand_image from '../../assets/brand_image.jpg';
import Typewriter from 'typewriter-effect';
import { HiTerminal } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiBookmark } from "react-icons/hi";
import { HiIdentification } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";

function BrandImage() {
  return (
    <div className='flex justify-center items-center space-x-[-120px]'>
      <img
      src={brand_image}
      className='z-[101] border-2 border-main w-28 h-28 rounded-full'
      />
    </div>
  )
}

function Icons() {
  return (
    <div className='flex flex-row justify-center gap-4 my-8'>
      <a href="https://github.com/0xZurvan">
        <FaGithub className='text-white hover:text-green' />
      </a>
      <a href="https://www.linkedin.com/in/isaac-hernandez-643086199">
        <FaLinkedin className='text-white hover:text-green' />
      </a>
      <a href="https://twitter.com/0xZurvan">
        <FaTwitter className='text-white hover:text-green' />
      </a>
      <a href="https://discord.com/users/823992612028940319">
        <FaDiscord  className='text-white hover:text-green' />
      </a>
    </div>
  )
}

function Text() {
  return (
    <div className='m-4 space-y-3'>
      <h1 className='text-white text-2xl font-bold font-oswald text-center'>0xZurvan</h1>
      <div className='text-green text-base font-medium font-oswald text-center'>
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

function LinkLayout({ page, name }) {
  return (
    <button 
    href={page}  
    className='
    text-white 
    hover:text-green 
    border
    border-b-black
    hover:border-2 
    hover:border-b-green
    z-[101] 
    w-60
    md:w-80
    h-12
    bg-main bg-opacity-70 border-main'
    >
      <Link 
      to={page}
      className='flex flex-row justify-left items-center gap-2 mx-6 font-normal font-oswald text-base'
      >
        {name === "About" ? <HiUser />  : ""}
        {name === "Projects" ? <HiTerminal /> : ""}
        {name === "Blogs" ? <HiBookmark /> : ""}
        {name === "Contact" ? <HiIdentification /> : ""}
        { name }
      </Link>
    </button>
  )
}

export default function MobileNav({nav, onClick}) {

  return (
    <div>
    {nav === false ? 
      ""
      : 
      <div 
      className='
      flex
      flex-col
      pt-10
      z-[100] 
      overflow-x-hidden
      absolute
      right-0
      xl:hidden 
      lg:hidden
      w-56
      md:w-80
      h-screen
      bg-black
      shadow-2xl shadow-main
      '>
        <button onClick={onClick} className='relative bottom-6 left-48 md:left-64'>
          <HiOutlineXMark className='w-6 h-6 text-white bg-green hover:text-green hover:bg-main rounded-full' />
        </button>
        <BrandImage />
        <Text />
        <Icons />
        <div className='flex flex-col items-center'>
          <LinkLayout page="/" name="About" />
          <LinkLayout page="/projects" name="Projects" />
          <LinkLayout page="/blog" name="Blogs" />
          <LinkLayout page="/contact" name="Contact" />
        </div>
      </div>
      }
    </div>
  )
}