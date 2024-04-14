import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [{ id: 1, title: "todo1", isCompleted: false }],
  },
  reducers: {
    addTodos(state, action) {
      const newTodo = {
        id: action.payload.id,
        title: action.payload.title,
        isCompleted: action.payload.isCompleted,
      };
      state.todo.push(newTodo);
    },
    deleteTodos(state, action) {
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.payload.id),
      };
    },
    editTodos(state, action) {
      const { id, title, isCompleted } = action.payload;
      const index = state.todo.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todo[index] = { id, title, isCompleted };
      }
      return state;
    },
    todoCompleted(state, action) {
      //   const { id, title, isCompleted } = acion.payload;
      const index = state.todo.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.todo[index].isCompleted = action.payload.isCompleted;
      }
      return state;
    },
  },
});

export const { addTodos, deleteTodos, editTodos, todoCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
