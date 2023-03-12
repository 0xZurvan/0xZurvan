import Circle from '../../common/Circle';

export default function AboutMe() {
  return (
    <div className='flex flex-col items-start space-y-2 mx-8 my-4 divide-y divide-green/30'>
      <div className='flex flex-col'>
        <Circle />
        <h2 className="font-oswald font-medium text-white text-2xl text-left">About me</h2>
      </div>
      <div className='flex flex-col space-y-2 pt-6'>
        <p className='font-oswald font-normal text-white text-lg opacity-70'>
          Hello! I'm 0xZurvan
        </p>
        <p className='font-oswald font-thin text-white text-base opacity-70 pb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores aut cupiditate deleniti, sunt assumenda possimus eligendi deserunt 
          explicabo molestias necessitatibus vitae facere debitis quisquam, quibusdam 
          unde nisi magni natus suscipit.
        </p>
        <ul className='grid grid-cols-2 space-y-2'>
          <li className='font-oswald font-thin text-white text-base opacity-70'>AGE. . . 20</li>
          <li className='font-oswald font-thin text-white text-base opacity-70'>FOR HIRE. . . Available</li>
          <li className='font-oswald font-thin text-white text-base opacity-70'>FREELANCE. . . Available</li>
          <li className='font-oswald font-thin text-white text-base opacity-70'>RESIDENCE. . . Dominican Republic</li>
        </ul>
      </div>
    </div>
  )
}