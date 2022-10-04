import useTodoStore, { addTodo } from '../app/todo_controller';
import { ImSpinner2 } from 'react-icons/im'

export default function AddTodo() {
  const { new_todo, setNewTodo, is_loading } = useTodoStore();

  const onTaskAdd = (e) => {
    e.preventDefault();
    addTodo(new_todo);
  }


  return (
    <form onSubmit={onTaskAdd}>
      <div className='flex flex-row justify-center w-full space-x-4'>
        <input value={new_todo} onChange={(e) => setNewTodo(e.target.value)} required className='w-[270px] p-3 border-black border text-lg font-medium' placeholder='Write your task...' type={'text'} />
        <button type='submit' className='bg-white  text-red-600 p-3 border border-black w-[100px] text-lg font-medium'>
          <div className='flex flex-row justify-center space-x-1 items-center'>
            <span>Add</span>
            {is_loading && <ImSpinner2 className="animate-spin duration-150 text-gray-500 border-gray-400 w-5 h-[60%]" />}
          </div>
        </button>


      </div>
    </form>
  )
}
