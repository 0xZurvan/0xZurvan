
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

  const _index = index + 1;

  const testimonial = TestimonialsData[index];

  return (
    <motion.div 
    className='xl:w-full lg:w-full md:w-full flex flex-col justify-center items-center overflow-hidden pt-6'
    >
      <motion.div layout className='flex flex-col justify-center items-center space-y-20'>
        <motion.div>
          <ImQuotesLeft className='text-white w-4 h-4 md:w-6 md:h-6 xl:w-6 xl:h-6 lg:w-6 lg:h-6 opacity-70' />
          <motion.p className='w-48 md:w-80 xl:w-80 lg:w-80 h-32 font-oswald italic text-sm md:text-base xl:text-base lg:text-base text-center text-white opacity-70'>{ testimonial.text }</motion.p>
        </motion.div>
        <motion.div className='flex flex-col items-center gap-4'>
          <motion.p className='font-oswald text-base text-white text-center'>{ testimonial.name } | { testimonial.profession }</motion.p>
          <p className='mb-16 font-oswald text-sm text-white text-center'>{_index}-3</p>
        </motion.div>

      </motion.div>
      <div className='mb-16 flex flex-row justify-center items-center space-x-20'>
        <motion.button 
        whileHover={{ scale: 1.2 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        >
          <ImCircleLeft onClick={handleBackwards} className='text-white hover:text-green text-center w-6 h-6 opacity-70' />
        </motion.button>
  
        <motion.button 
        whileHover={{ scale: 1.2 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        >
          <ImCircleRight onClick={handleForward} className='text-white hover:text-green text-center w-6 h-6 opacity-70' />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <div className='xl:w-full lg:w-full md:w-full flex flex-col items-center xl:items-start lg:items-start space-y-2 mx-8 my-4 divide-y divide-green/30'>
      <div>
        <h2 className='font-oswald font-medium text-white text-xl text-center md:text-2xl xl:text-2xl xl:text-left lg:text-2xl lg:text-left'>Testimonials</h2>
      </div>
      <TestimonialsUI />
    </div>
  )
}
