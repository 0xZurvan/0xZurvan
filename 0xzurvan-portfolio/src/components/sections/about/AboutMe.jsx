
export default function AboutMe() {
  return (
    <div className='xl:w-full lg:w-full flex flex-col items-center xl:items-start lg:items-start space-y-2 mx-8 my-4 divide-y divide-green/30'>
      <div className='flex flex-col'>
        <h2 className='font-oswald font-medium text-white text-xl text-left md:text-2xl xl:text-2xl xl:text-left lg:text-2xl lg:text-left'>About me</h2>
      </div>
      <div className='flex flex-col space-y-2 pt-6'>
        <p className='font-oswald font-normal text-white text-base md:text-lg xl:text-lg lg:text-lg opacity-70'>
          Hello! I'm 0xZurvan
        </p>
        <p className='font-oswald font-thin text-white text-sm md:text-base xl:text-base lg:text-base opacity-70 pb-4'>
        Experienced self-taught Smart Contract and Front-End developer passionate about cutting-edge dApps. 
        Seeking challenging job opportunities to learn new technologies and solve complex problems while building 
        innovative ideas. Thrives in collaborative and creative environments, excited to join a team with similar values. 
         Let's build the future of the decentralized web together!
        </p>
        <ul className='grid grid-cols-2 place-content-evenly gap-2'>
          <li className='font-oswald font-thin text-white text-[10px] md:text-base xl:text-base lg:text-base opacity-70'>AGE-20</li>
          <li className='font-oswald font-thin text-white text-[10px] md:text-base xl:text-base lg:text-base opacity-70'>FOR HIRE-Available</li>
          <li className='font-oswald font-thin text-white text-[10px] md:text-base xl:text-base lg:text-base opacity-70'>FREELANCE-Available</li>
          <li className='font-oswald font-thin text-white text-[10px] md:text-base xl:text-base lg:text-base opacity-70'>RESIDENCE-Dominican Republic</li>
        </ul>
      </div>
    </div>
  )
}