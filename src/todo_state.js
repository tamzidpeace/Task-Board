import create from 'zustand'

const useTodoStore = create((set, get) => ({
  todo: [],
  setTodo: (data) => set({ todo:  data}),
  in_progress: [],
  setInProgress: (data) => set({ in_progress: data }),
  done: [],
  setDone: (data) => set({ done: data }),
}));



export default useTodoStore;