
import Circle from '../../common/Circle';
import { ImQuotesLeft } from "react-icons/im";
import { ImCircleRight } from "react-icons/im";
import { ImCircleLeft } from "react-icons/im";
import { motion } from 'framer-motion';
import { TestimonialsData } from '../../../const/TestimonialsData';
import { useState } from 'react';

function TestimonialsUI() {
  const [index, setIndex] = useState(0);

  function handleForward() {
    if (index < 2) {
      setIndex(index + 1);
    }
  }

  function handleBackwards() {
    if (index !== 0) {
      setIndex(index - 1);
    }
  }

  const testimonial = TestimonialsData[index];

  return (
    <motion.div 
    className='w-full flex flex-row justify-evenly items-center overflow-hidden pt-6'
    >
      <motion.button 
      whileHover={{ scale: 1.2 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
      >
        <ImCircleLeft onClick={handleBackwards} className='text-white hover:text-green text-center w-6 h-6 opacity-70' />
      </motion.button>

      <motion.div layout className='flex flex-col items-center space-y-14'>
        <motion.div>
          <ImQuotesLeft className='text-white w-6 h-6 opacity-70' />
          <motion.p className='w-80 h-32 font-oswald italic text-base text-center text-white opacity-70'>{ testimonial.text }</motion.p>
        </motion.div>
        <motion.div>
          <motion.p className='mb-16 font-oswald text-base text-white text-center'>{ testimonial.name } | { testimonial.profession }</motion.p>
        </motion.div>
      </motion.div>

      <motion.button
      whileHover={{ scale: 1.2 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
      >
        <ImCircleRight onClick={handleForward} className='text-white hover:text-green text-center w-6 h-6 opacity-70' />
      </motion.button>

    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <div className='flex flex-col items-start space-y-2 mx-8 mt-12 divide-y divide-green/30'>
      <div>
        <Circle />
        <h2 className="font-oswald font-medium text-white text-2xl text-left">Testimonials</h2>
      </div>
      <TestimonialsUI />
    </div>
  )
}
