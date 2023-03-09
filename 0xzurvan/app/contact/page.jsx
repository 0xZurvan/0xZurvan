import Circle from '../Circle';

export default function page() {
  return (
    <main className='scrollbar-thin scrollbar-thumb-darkGreen scrollbar-track-main overflow-y-scroll absolute left-[610px] top-12 rounded-lg bg-main w-[670px] h-[590px] z-[101] px-8'>
      <div className='space-y-2 mx-8 my-4 divide-y divide-green/30'>

        <div className='flex flex-col'>
          <Circle />
          <h2 className="font-oswald font-medium text-white text-2xl text-left">Contact me</h2>

        </div>
      </div>
    </main>
  )
}
