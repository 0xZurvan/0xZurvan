'use client';

import { ProjectsData } from './ProjectsData';
import Circle from '../Circle';
import { AiFillFolderOpen } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { useState } from 'react';
import { motion } from 'framer-motion';

// TODO - Create 2 methods : filter main projects and filter secondary projects
// TODO - Add two buttons to call the filters and display the data
// TODO - Add the slice/line animation

function Stack({ stacks }) {
  return (
    <div className="
    flex
    flex-row
    flex-wrap
    justify-start
    items-baseline
    gap-2
    ">
      {stacks.map(stack  => {
        return <p 
        className="
        font-oswald
        text-sm
        text-green
        " 
        key={ stack }
        >
          { stack }
        </p>;
      })}
    </div>
  )
}

function ProjectCard({ title, description, stacks, timeline, link, github }) {
  return (
    <motion.div 
    className='
    w-[500px]
    h-[200px]
    flex
    flex-col
    bg-main
    hover:border-2
    hover:border-b-green
    hover:border-l-green
    hover:border-t-main
    hover:border-r-main
    shadow-xl shadow-black
    rounded-lg
    py-6
    '>

      <motion.div className='flex flex-row justify-between items-baseline px-6'>
        <motion.div className='flex flex-row justify-evenly gap-3'>
          <AiFillFolderOpen className='text-green w-6 h-6' />
          <motion.h3 className='font-oswald font-bold text-green text-xl'>{ title }</motion.h3>
        </motion.div>
        <motion.div className='flex flex-row justify-evenly gap-2'>
          {link !== "" ? <a href={ link }><AiFillEye className='text-green hover:text-darkGreen w-6 h-6' /></a> : ""}
          {github !== "" ? <a href={ github }><AiFillGithub className='text-green hover:text-darkGreen w-6 h-6'  /></a> : ""}
        </motion.div>
      </motion.div>

      <motion.div className='flex flex-col justify-items-start gap-4 px-6 pt-2'>
        <motion.p className='font-oswald font-normal text-sm text-white'>Build time: { timeline }</motion.p>
        <motion.p className='font-oswald font-normal text-base text-white' >{ description }</motion.p>
        <motion.div className='flex flex-row justify-between'>
          <Stack stacks={ stacks } />
          {/* <motion.button className='font-oswald text-sm text-white hover:text-green mr-4'>See more</motion.button> */}
        </motion.div>
      </motion.div>
 
    </motion.div>
  )
}

export default function Projects() {

  const [filter, setFilter] = useState(false);

  const primaryProjects = ProjectsData.filter((project) => project.category === 'primary');
  const secondaryProjects = ProjectsData.filter((project) => project.category === 'secondary');

  const displayPrimaryProjects = primaryProjects.map(project => {
    return <ProjectCard key={ project.id }
      title={ project.title } 
      description={ project.description }
      stacks={ project.stack }
      timeline={ project.timeline }
      link={ project.link }
      github={ project.github }
    /> 
  });

  const displaySecondaryProjects = secondaryProjects.map(project =>  {
    return <ProjectCard key={ project.id }
      title={ project.title } 
      description={ project.description }
      stacks={ project.stack }
      timeline={ project.timeline }
      link={ project.link }
      github={ project.github }
    />
  });

  return (
    <main className='scrollbar-thin scrollbar-thumb-darkGreen scrollbar-track-main overflow-y-scroll absolute left-[610px] top-12 rounded-lg bg-main w-[670px] h-[590px] z-[101] px-8'>
      <div className='space-y-2 mx-8 my-4 divide-y divide-green/30'>
        <div className='flex flex-row justify-between items-baseline'>

          <div className='flex flex-col'>
            <Circle />
            <h2 className="font-oswald font-medium text-white text-2xl text-left">Projects</h2>
          </div>

          <div className='flex flex-row justify-end gap-4'>
            <button 
            onClick={ () => setFilter(false) } 
            className={filter === false ? 
              'font-oswald font-medium text-base text-green'
               : 
              'font-oswald font-medium text-base text-white hover:text-green'
            }
            >
              Primary
            </button>
            <button 
            onClick={ () => setFilter(true)  } 
            className={filter === true ? 
              'font-oswald font-medium text-base text-green'
               : 
              'font-oswald font-medium text-base text-white hover:text-green'
            }
            >
              Secondary
            </button>
          </div>

        </div>

        <div>
          {filter === false ? 
            <div className='flex flex-col space-y-8 pt-6 pb-16'>
              { displayPrimaryProjects }
            </div>
           : 
            <div className='flex flex-col space-y-8 pt-6 pb-16' >
              { displaySecondaryProjects }
            </div>
          }
        </div>

      </div>
    </main>
  )
}
