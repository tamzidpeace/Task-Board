import React from 'react'
import useTodoStore from '../app/todo_controller'

export default function Task({ index, title = 'Task', type = 'todo', data = {} }) {

  const handleOnDragStart = (e) => {
    useTodoStore.getState().setDragItem(data);
    // console.log('Drag Start', data);
  }
  return (
    <div draggable className='h-auto  min-w-[160px]  mx-5 mb-5 p-3 text-center bg-[#dddddd] border border-black text-base font-semibold break-words'
      onDragStart={handleOnDragStart}>
      {title}
    </div>
  )

}
