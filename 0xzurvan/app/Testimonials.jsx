'use client';

import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight} from "react-icons/im";
import { motion } from 'framer-motion';
import { TestimonialsData } from './TestimonialsData';
import { useState, useRef, useEffect } from 'react';

export default function Testimonials() {
  const [width, setWidth] = useState(0);
 /*  const slider = useRef();

  useEffect(()  => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []); */

  return (
    <motion.div 
     className='flex flex-row justify-between items-center overflow-hidden'
     drag="x" 
     dragConstraints={{ right: 0, left: 300}}
     whileTap={{ cursor: "grabbing"}}
     >
      {TestimonialsData.map((testimonial, index) => {
        return (
          <motion.div className='w-screen overflow-hidden'>
            <motion.div>
              <ImQuotesLeft className='text-white opacity-70' />
              <p className='h-32 font-oswald italic text-lg text-white opacity-70'>{ testimonial.text }</p>
              <ImQuotesRight className='text-white opacity-70' />
            </motion.div>
            <motion.div>
              <p className='font-oswald text-lg text-white'>{ testimonial.name } | { testimonial.profession }</p>
              <p>{ index + 1 } of { TestimonialsData.length }</p>
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
