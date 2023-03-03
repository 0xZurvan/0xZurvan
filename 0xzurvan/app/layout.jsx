import './globals.css';
import { ParticlesAnimation } from './ParticlesAnimation';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <ParticlesAnimation />
        {children}
      </body>
    </html>
  )
}
