import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';

function App() {

  const onTaskDrop = (e, type) => {
    e.preventDefault();
    console.log('type', type);
    if (type === 'run') {
      if (dragItem.type === 'new') {
        setNewT(newT.filter((item, index) => index !== dragItem.index));
        setRunT([...runT, newT[dragItem.index]])
      }
    }

    if (type === 'new') {
      if (dragItem.type === 'run') {
        setRunT(runT.filter((item, index) => index !== dragItem.index));
        setNewT([...newT, runT[dragItem.index]])
      }
    }
  }

  const onTaskDragOver = (e) => {
    e.preventDefault();
    // console.log('data', dragItem);
  }

  const [newT, setNewT] = useState([
    'task1',
    'task2',
    'task3',
  ])

  const [runT, setRunT] = useState([
    'task4',
    'task5',
    'task6',
  ])

  const [completedT, setCompletedT] = useState([
    'task7',
    'task8',
    'task9',
  ])

  const [dragItem, setDragItem] = useState(null);


  return (
    <>

      <AddTodo />

      <div className='flex flex-row space-x-5 p-20 bg-gray-100 h-[100vh] w-full'>

        <div onDragOver={onTaskDragOver} onDrop={(e) => onTaskDrop(e, 'new')} className='flex-1 flex flex-col space-y-2 bg-gray-200 rounded-md py-5 overflow-y-auto'>

          {newT.map((task, index) => (
            <div

              key={index}
              className='flex flex-row space-x-2 items-center p-2 bg-white rounded-md shadow-md'
              draggable
              onDragStart={(e) => {
                setDragItem({ task, index, type: 'new' })
              }}

            >
              <div className='w-4 h-4 bg-gray-400 rounded-full'></div>
              <div className='text-sm'>{task}</div>
            </div>
          ))}




        </div>


        <div onDragOver={onTaskDragOver} onDrop={(e) => onTaskDrop(e, 'run')} className='flex-1 flex flex-col space-y-2 bg-gray-200 rounded-md py-5 overflow-y-auto'>

          {runT.map((task, index) => (
            <div

              key={index}
              className='flex flex-row space-x-2 items-center p-2 bg-white rounded-md shadow-md'
              draggable
              onDragStart={(e) => {
                setDragItem({ task, index, type: 'run' });
              }}

            >
              <div className='w-4 h-4 bg-gray-400 rounded-full'></div>
              <div className='text-sm'>{task}</div>
            </div>
          ))}

        </div>


        <div className='flex-1 bg-gray-200 rounded-md'>

        </div>


      </div>
    </>
  );
}

export default App;
