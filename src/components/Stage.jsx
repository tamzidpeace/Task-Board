import React from 'react'
import Task from './Task'

export default function Stage({ title = 'Title', tasks = [] }) {
  return (
    <div className='flex flex-col w-full min-w-[200px] border border-black'>

      <div className='text-center pt-[4px] border-b bg-[#ff6c47] text-black font-bold text-xl border-black h-10 w-full mb-5'>
        {title}
      </div>

      <div className='flex flex-col justify-start relative overflow-y-auto'>

        {tasks.map((task, index) => (<Task key={index} title={task.task} />))}

      </div>

    </div>
  )
}
