import React from 'react';
import loading from '../public/Assets/loading.gif';
import Image from 'next/image';

const Loading = () => {
  return (
    <>
      <Image className='w-[200px] m-auto block' src={loading} alt="loading..."/>
    </>
  )
}

export default Loading
