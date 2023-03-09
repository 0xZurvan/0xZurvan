'use client';

import { Rings } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div className='z-[104]'>
      <Rings
      height="90"
      width="90"
      color="#4fa94d"
      radius="6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
      />
    </div>
  )
}
