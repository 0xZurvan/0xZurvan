import { ParticlesAnimation } from './components/layouts/ParticlesAnimation';
import Spinner from './components/common/Spinner'
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import DeskNav from './components/layouts/DeskNav';
import Shadow from './components/layouts/Shadow';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PersonalCard from './components/layouts/PersonalCard';

export default function App() {
  const [loading, setLoading] = useState(true);

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
        <div>
          <DeskNav />
          <Shadow />
          <PersonalCard />
          <ParticlesAnimation />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      }
    </div>
  )
}


