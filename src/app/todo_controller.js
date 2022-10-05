import { toast } from 'react-toastify';
import create from 'zustand'
import { add_todo_url, get_todo_url } from './const';

// store
const useTodoStore = create((set, get) => ({
  todo: [],
  setTodo: (data) => set({ todo: data }),
  in_progress: [],
  setInProgress: (data) => set({ in_progress: data }),
  done: [],
  setDone: (data) => set({ done: data }),
  is_get_all_todo_loading: false,
  setIsGetAllTodoLoading: (data) => set({ is_get_all_todo_loading: data }),
  is_loading: false,
  setIsLoading: (data) => set({ is_loading: data }),
  new_todo: '',
  setNewTodo: (data) => set({ new_todo: data }),
}));


// api calls
export const getAllTodo = async () => {
  const { setIsGetAllTodoLoading } = useTodoStore.getState();
  setIsGetAllTodoLoading(true);

  fetch(get_todo_url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      success('Tasks Loaded!');
      setIsGetAllTodoLoading(false);
      setTodoData(data.data);
      console.log('Success:', data);
    })
    .catch((error) => {
      err('Something went wrong! Unable to add task.');
      setIsGetAllTodoLoading(false);
      console.error('Error:', error);
    });
}

export const addTodo = async (data) => {
  if (data === '' || data === null) {
    warn('Please Enter a Task!');
    return;
  }

  const { setIsLoading, setNewTodo } = useTodoStore.getState();
  setIsLoading(true);

  fetch(add_todo_url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task: data }),
  })
    .then((response) => response.json())
    .then((data) => {
      success('New Task Added!');
      setIsLoading(false);
      setNewTodo('');
      setTodoData(data.data);
      console.log('Success:', data);

    })
    .catch((error) => {
      err('Something went wrong! Unable to add task.');
      setIsLoading(false);
      console.error('Error:', error);
    });
}

// helpers functions
export const success = (message) => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export const warn = (message) => {
  toast.warn(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export const err = (message) => {
  toast.error(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

const setTodoData = (data) => {
  const { setTodo, setInProgress, setDone } = useTodoStore.getState();
  setTodo(data?.todo ?? []);
  setInProgress(data?.in_progress ?? []);
  setDone(data?.done ?? []);
}



export default useTodoStore;