import AboutMe from "../components/sections/about/AboutMe";
import MyServices from "../components/sections/about/MyServices";
import Skills from "../components/sections/about/Skills";
import Testimonials from "../components/sections/about/Testimonials";

export default function About() {
  return (
    <main
      className="
    scrollbar-thin 
    scrollbar-thumb-darkGreen 
    scrollbar-track-main 
    overflow-y-scroll 
    overflow-x-hidden 
    bg-main
    z-[99]
    flex flex-col
    justify-start items-center
    w-[350px]
    h-[650px]
    ml-10
    xl:ml-0
    lg:ml-0
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
    "
    >
      <AboutMe />
      <MyServices />
      <Skills />
      <Testimonials />
    </main>
  );
}
