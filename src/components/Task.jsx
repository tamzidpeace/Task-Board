import React from 'react'

export default function Task({ title = 'Task' }) {

  return (
    <div draggable className='h-auto  min-w-[160px]  mx-5 mb-5 p-3 text-center border border-black text-base font-semibold break-words'>
      {title}
    </div>
  )

}
