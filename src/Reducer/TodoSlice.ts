import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface Todo{
    id:number;
    text:string;
    activated:boolean;
};

interface TodoState{
    todos:Todo[];
    activatedTodos:Todo[];
};

const initialState: TodoState = {
    todos:[],
    activatedTodos:[],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo:(state, action:PayloadAction <Todo> )=>{
            state.todos.push(action.payload);
        },
        toggleActivation:(state, action:PayloadAction <number>)=>{
            const todo=state.todos.find(todo => todo.id === action.payload);
            if(todo){
                todo.activated =! todo.activated;
                state.activatedTodos=state.todos.filter( todo =>todo.activated)
        }

        },
    },

  });

  export const {addTodo,toggleActivation}=todoSlice.actions;
  export default todoSlice.reducer;