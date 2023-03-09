'use client';

import './globals.css';
import Nav from './Nav';
import Shadow from './Shadow';
import PersonalCard from './PersonalCard';
import Spinner from './Spinner';
import { ParticlesAnimation } from './ParticlesAnimation';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  if(loading === true) {
    setTimeout(() => {
      <Spinner />
      setLoading(false);
    }, 2000);
  }

  return (
    <html lang="en">
      <body className='bg-black'>
        <div>
          {loading === true ? 
            <div className='grid h-screen place-items-center'>
              <Spinner />
            </div>
            :
            <div>
              <Nav />
              <Shadow />
              <PersonalCard />
              <ParticlesAnimation />
              {children}
            </div>
          }
        </div>
      </body>
    </html>
  )
}
