import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import useTodoStore, { getAllTodo } from './app/todo_controller';
import AddTodo from './components/AddTodo';
import Loading from './components/Loading';
import Stage from './components/Stage';
import ToastInit from './components/ToastInit';

function App() {
  const { todo, in_progress, done, is_get_all_todo_loading } = useTodoStore();

  useEffect(() => { getAllTodo() }, [])

  return (
    <>
      {is_get_all_todo_loading ?
        <Loading />
        :
        <>
          <ToastInit />

          <div className='bg-white p-[50px]  overflow-x-auto'>

            <AddTodo />

            <div className='flex flex-row space-x-5 min-w-[650px] h-[80vh] w-full mt-5'>

              <Stage title='Todo' tasks={todo} />
              <Stage title='In Progress' tasks={in_progress} />
              <Stage title='Done' tasks={done} />

            </div>
          </div>

        </>}
    </>
  );
}

export default App;
