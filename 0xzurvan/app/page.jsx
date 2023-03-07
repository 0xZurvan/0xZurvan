'use client';

import { DiJavascript } from 'react-icons/di';
import { SiEthereum } from 'react-icons/si';
import Testimonials from './Testimonials';
import Skills from './Skills';

function Circle() {
  return <span className='absolute opacity-30 rounded-full bg-green w-6 h-6'></span>
}

function AboutMe() {
  return (
    <div className='flex flex-col items-start space-y-2 mx-8 my-4 divide-y divide-green/30'>
      <div className='flex flex-col'>
        <Circle />
        <h2 className="font-oswald font-medium text-white text-2xl text-left">About me</h2>
      </div>
      <div className='flex flex-col space-y-2 pt-6'>
        <p className='font-oswald font-normal text-white text-lg opacity-70'>
          Hello! I'm 0xZurvan
        </p>
        <p className='font-oswald font-thin text-white text-base opacity-70 pb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores aut cupiditate deleniti, sunt assumenda possimus eligendi deserunt 
          explicabo molestias necessitatibus vitae facere debitis quisquam, quibusdam 
          unde nisi magni natus suscipit.
        </p>
        <ul className='grid grid-cols-2 space-y-2'>
          <li className='font-oswald font-thin text-white text-base opacity-70'>AGE. . . 20</li>
          <li className='font-oswald font-thin text-white text-base opacity-70'>FOR HIRE. . . Available</li>
          <li className='font-oswald font-thin text-white text-base opacity-70'>FREELANCE. . . Available</li>
          <li className='font-oswald font-thin text-white text-base opacity-70'>RESIDENCE. . . Dominican Republic</li>
        </ul>
      </div>
    </div>
  )
}

function MyServices() {
  return (
    <div className='flex flex-col items-start space-y-2 mx-8 mt-12 divide-y divide-green/30'>

      <div>
        <Circle />
        <h2 className="font-oswald font-medium text-white text-2xl text-left">My Services</h2>
      </div>

      <div className='flex flex-row justify-between divide-x divide-green/30 pt-6'>

        <div className='flex flex-col justify-center gap-4 pr-10'>
          <DiJavascript className='text-green border border-green rounded-full  text-center p-2 w-12 h-12' />
          <h3 className='font-oswald font-normal text-lg text-white opacity-90'>Front End</h3>
          <p className='font-oswald font-thin text-white text-base opacity-70'>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. adipisicing elit.
          </p>
        </div> 

        <div className='flex flex-col justify-center gap-4 pl-10'>
          <SiEthereum className='text-green border border-green rounded-full text-center p-2 w-12 h-12' />
          <h3 className='font-oswald font-normal text-lg text-white opacity-90'>Smart Contracts</h3>
          <p className='font-oswald font-thin text-white text-base opacity-70'>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. adipisicing elit.
          </p>
        </div>

      </div>

    </div>
  ) 
}

function TestimonialSection() {
  return (
    <div className='flex flex-col items-start space-y-2 mx-8 mt-12 divide-y divide-green/30'>
      <div>
        <Circle />
        <h2 className="font-oswald font-medium text-white text-2xl text-left">Testimonials</h2>
      </div>
      <Testimonials />
    </div>
  )
}

function SkillsSection() {
  return (
    <div className='flex flex-col items-start space-y-2 mx-8 mt-12 divide-y divide-green/30'>
      <div>
        <Circle />
        <h2 className="font-oswald font-medium text-white text-2xl text-left">Skills</h2>
      </div>
      <Skills />
    </div>
  )
}

export default function About() {
  return (
    <main className='overflow-y-scroll absolute left-[610px] top-12 rounded-lg bg-main w-[670px] h-[590px] z-[101] px-8'>
      <AboutMe />
      <MyServices />
      <SkillsSection />
      <TestimonialSection />
    </main>
  )
}
