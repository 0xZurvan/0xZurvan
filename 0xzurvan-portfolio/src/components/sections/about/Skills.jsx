import { motion } from 'framer-motion';
import { TechIcons } from '../../../const/TechIcons';
import Circle from '../../common/Circle';

function SkillsUI() {
  return (
    <motion.div className='flex flex-row flex-wrap justify-center gap-12 pt-6'>
      {TechIcons.map((item, index) => {
        return (
          <motion.div 
          className='flex flex-col justify-evenly items-center gap-2'
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          >
            <motion.div>
              { <item.icon className='w-12 h-12 text-green border border-green rounded-full p-2' /> }
            </motion.div>
            <motion.p className='font-oswald text-base text-white'>
              { item.name }
            </motion.p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <div className='flex flex-col items-start space-y-2 mx-8 mt-12 divide-y divide-green/30'>
      <div>
        <Circle />
        <h2 className="font-oswald font-medium text-white text-2xl text-left">Skills</h2>
      </div>
      <SkillsUI />
    </div>
  )
}