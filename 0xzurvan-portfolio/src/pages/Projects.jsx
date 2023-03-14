
import { useState } from 'react';
import ProjectCard from '../components/sections/projects/ProjectCard';
import { ProjectsData } from '../const/ProjectsData';

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
    <main 
    className='
    scrollbar-thin 
    scrollbar-thumb-darkGreen 
    scrollbar-track-main 
    overflow-y-scroll 
    overflow-x-hidden 
    bg-main
    z-[99]
    flex flex-col
    justify-start items-start
    w-[350px]
    h-[650px]
    ml-10
    rounded-lg
    md:rounded-lg
    md:w-[720px]
    md:h-[590px] 
    xl:rounded-lg 
    xl:w-[670px] 
    xl:h-[590px] 
    lg:rounded-lg 
    lg:w-[670px] 
    lg:h-[590px] 
    px-8
    '
    >
      <div className='space-y-2 mx-8 my-4 divide-y divide-green/30'>
        <div className='flex flex-row justify-between items-baseline'>

          <div className='flex flex-col'>
            <h2 className="font-oswald font-medium text-white text-xl text-center md:text-2xl xl:text-2xl xl:text-left lg:text-2xl lg:text-left">Projects</h2>
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
