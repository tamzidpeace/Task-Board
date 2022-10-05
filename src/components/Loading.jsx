import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

export default function Loading() {
  return (
    <div className='flex flex-col w-full h-[100vh] justify-center items-center text-xl font-bold'>
      <RotatingLines
        strokeColor="#ff6c47"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      Loading...
    </div>
  )
}
