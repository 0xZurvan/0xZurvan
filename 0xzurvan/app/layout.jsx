import './globals.css';
import Nav from './Nav';
import Shadow from './Shadow';
import PersonalCard from './PersonalCard';
import { ParticlesAnimation } from './ParticlesAnimation';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <div className='flex flex-row'>
          <Nav />
          <Shadow />
          <PersonalCard />
        </div>
        <ParticlesAnimation />
        {children}
      </body>
    </html>
  )
}
