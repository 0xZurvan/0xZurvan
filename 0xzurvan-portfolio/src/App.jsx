import { ParticlesAnimation } from './components/layouts/ParticlesAnimation';
import Spinner from './components/common/Spinner'
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import DeskNav from './components/layouts/DeskNav';
import MobileNav from './components/layouts/MobileNav';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PersonalCard from './components/layouts/PersonalCard';
import { HiBars3 } from "react-icons/hi2";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [nav, setNav] = useState(false);

  if(loading === true) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <div>
      {loading === true  ? 
        <div className='grid h-screen place-items-center'>
          <Spinner />
        </div>
        :
        <div className='flex flex-col items-center'>
          <MobileNav nav={nav} onClick={() => setNav(false)} />
          <div 
          className='
          flex flex-row justify-center items-center h-screen 
          xl:flex 
          xl:flex-row 
          xl:justify-center 
          xl:items-center 
          lg:flex 
          lg:flex-row 
          lg:justify-center 
          lg:items-center 
          lg:space-x-[-12px] 
          xl:space-x-[-12px]
          '>
            <DeskNav />
            <div className='flex flex-row justify-center items-center lg:space-x-[-30px] lg:space-y-10 xl:space-x-[-30px] xl:space-y-10'>
              <PersonalCard />
              <Routes>
                <Route path='/' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
              <button>
                <HiBars3 onClick={() => setNav(true)} 
                className={nav === false ? 'relative bottom-[330px] right-6 z-[100] xl:hidden lg:hidden w-8 h-8 text-white bg-green hover:bg-darkGreen rounded-full' : ""} 
                />
              </button>
            </div>
          </div>
          <ParticlesAnimation />
        </div>
      } 
    </div>
  )
}


