import { ProjectsData } from './ProjectsData';
import Circle from '../Circle';
import { AiFillFolderOpen } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

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
      {stacks .map(stack  => {
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
    <div className='
    w-[500px] 
    h-[200px]
    flex
    flex-col
    justify-items-start
    bg-white 
    shadow-2xl shadow-black
    rouded-lg
    py-6
    '>

      <div className='flex flex-row justify-around items-baseline'>
        <div className='flex flex-row items-baseline gap-4'>
        <AiFillFolderOpen className='text-green' />
          <h3 className='font-oswald font-bold text-green text-lg'>{ title }</h3>
        </div>
        {link !== "" ? <a href={ link }><AiFillEye className='text-main hover:text-green' /></a> : ""}
        {github !== "" ? <a href={ github }><AiFillGithub className='text-main hover:text-green'  /></a> : ""}
      </div>

      <div className='flex flex-col justify-items-start gap-8'>
        <p className='font-oswald font-normal text-sm text-main'>Build time: { timeline }</p>
        <p className='font-oswald font-normal text-base text-main' >{ description }</p>
        <Stack stacks={ stacks } />
      </div>

      <button>See more</button>

    </div>
  )
}

export default function Projects() {
  const stack = ['stack', 'stack', 'stack', 'stack', 'stack'];
  return (
    <main className='overflow-y-scroll absolute left-[610px] top-12 rounded-lg bg-main w-[670px] h-[590px] z-[101] px-8'>
      <div className='space-y-2 mx-8 my-4 divide-y divide-green/30'>
        <div className='flex flex-col'>
          <Circle />
          <h2 className="font-oswald font-medium text-white text-2xl text-left">Projects</h2>
        </div>

        <div className='pt-6'>
        <ProjectCard 
        title='Pris0nerz' 
        description='lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem v' 
        stacks={ stack }
        timeline="6 months"
        link="Hello"
        github="hello"
        /> 
        </div>

      </div>
    </main>
  )
}
