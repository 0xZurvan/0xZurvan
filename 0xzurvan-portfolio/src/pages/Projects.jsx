
import { useState } from 'react';
import ProjectCard from '../components/sections/projects/ProjectCard';
import Circle from '../components/common/Circle';
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
