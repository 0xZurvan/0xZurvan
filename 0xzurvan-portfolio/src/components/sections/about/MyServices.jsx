
import { DiJavascript } from 'react-icons/di';
import { SiEthereum } from 'react-icons/si';
import Circle from '../../common/Circle';

export default function MyServices() {
  return (
    <div className='flex flex-col items-start space-y-2 mx-8 mt-12 divide-y divide-green/30'>

      <div>
        <Circle />
        <h2 className="font-oswald font-medium text-white text-2xl text-left">My Services</h2>
      </div>

      <div className='flex flex-row justify-between divide-x divide-green/30 pt-6'>

        <div className='flex flex-col justify-center gap-4 pr-10'>
          <DiJavascript className='text-green border border-green rounded-full  text-center p-2 w-12 h-12' />
          <h3 className='font-oswald font-normal text-lg text-white opacity-90'>Front End</h3>
          <p className='font-oswald font-thin text-white text-base opacity-70'>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. adipisicing elit.
          </p>
        </div> 

        <div className='flex flex-col justify-center gap-4 pl-10'>
          <SiEthereum className='text-green border border-green rounded-full text-center p-2 w-12 h-12' />
          <h3 className='font-oswald font-normal text-lg text-white opacity-90'>Smart Contracts</h3>
          <p className='font-oswald font-thin text-white text-base opacity-70'>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. adipisicing elit.
          </p>
        </div>

      </div>

    </div>
  ) 
}