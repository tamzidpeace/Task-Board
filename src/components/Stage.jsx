import React from 'react'
import useTodoStore, { changeTaskStatus } from '../app/todo_controller';
import Task from './Task'

export default function Stage({ title = 'Title', tasks = [], type = 'todo' }) {
  const { drag_item, todo, in_progress, done, setTodo, setInProgress, setDone } = useTodoStore();

  const handleOnDrop = async (e) => {
    e.preventDefault();
    console.log('type', type);
    console.log('drag_item', drag_item);
    if (type !== drag_item.status) {
      addItem(type, drag_item);
      removeItem(drag_item);
      await changeTaskStatus(drag_item.id, type);
    }
  }

  const addItem = (type, item) => {
    if (type === 'todo') {
      item = { ...item, status: 'todo' };
      setTodo([...todo, item]);
    } else if (type === 'in_progress') {
      item = { ...item, status: 'in_progress' };
      setInProgress([...in_progress, item]);
    } else if (type === 'done') {
      item = { ...item, status: 'done' };
      setDone([...done, item]);
    }
  }

  const removeItem = (item) => {
    if (item.status === 'todo') {
      setTodo(todo.filter((i) => i !== item));
    } else if (item.status === 'in_progress') {
      setInProgress(in_progress.filter((i) => i !== item));
    } else if (item.status === 'done') {
      setDone(done.filter((i) => i !== item));
    }
  }

  return (
    <div className='flex flex-col w-full min-w-[200px] border border-black' onDragOver={(e) => e.preventDefault()} onDrop={handleOnDrop}>

      <div className='text-center pt-[4px] border-b bg-[#ff6c47] text-black font-bold text-xl border-black h-10 w-full mb-5'>
        {title}
      </div>

      <div className='flex flex-col justify-start relative overflow-y-auto'>

        {tasks.map((task, index) => (<Task key={index} index={index} title={task.task} type={type} data={task} />))}

      </div>

    </div>
  )
}
