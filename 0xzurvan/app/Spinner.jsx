'use client';

import { ProgressBar } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div className='bg-main max-w-full max-h-full flex justify-center z-[103]'>
      <ProgressBar
      height="90"
      width="90"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor = '#38E54D'
      barColor = '#38E54D'
      />
    </div>
  )
}
