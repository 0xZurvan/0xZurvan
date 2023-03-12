import AboutMe from '../components/sections/about/AboutMe';
import MyServices  from '../components/sections/about/MyServices';
import Skills from '../components/sections/about/Skills';
import Testimonials from '../components/sections/about/Testimonials';

export default function About() {
  
  return (
    <main className='scrollbar-thin scrollbar-thumb-darkGreen scrollbar-track-main overflow-y-scroll absolute left-[610px] top-12 rounded-lg bg-main w-[670px] h-[590px] z-[101] px-8'>
      <AboutMe />
      <MyServices />
      <Skills />
      <Testimonials />
    </main>
  )
}
