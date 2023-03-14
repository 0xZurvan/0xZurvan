import Form from '../components/sections/contact/Form';

export default function Contact() {
  return (
    <main 
    className='
    scrollbar-thin 
    scrollbar-thumb-darkGreen 
    scrollbar-track-main 
    overflow-y-scroll 
    overflow-x-hidden 
    bg-main
    z-[99]
    flex flex-col
    justify-start items-start
    w-[350px]
    h-[650px]
    ml-10
    xl:ml-0
    lg:ml-0
    rounded-lg
    md:rounded-lg
    md:w-[720px]
    md:h-[590px] 
    xl:rounded-lg 
    xl:w-[670px] 
    xl:h-[590px] 
    lg:rounded-lg 
    lg:w-[670px] 
    lg:h-[590px] 
    px-8
    '
    >
      <div className='flex flex-col justify-start items-start xl:items-start lg:items-start space-y-2 mx-8 my-4 divide-y divide-green/30'>

        <div className='flex flex-col items-start'>
          <h2 className="font-oswald font-medium text-white text-xl text-left md:text-2xl xl:text-2xl xl:text-left lg:text-2xl lg:text-left">Contact me</h2>
        </div>

        <Form />

      </div>
    </main>
  )
}
