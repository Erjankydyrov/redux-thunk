import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const responce = await axios
        .get("http://localhost:3001/todos")
        .then((responce) => responce.data)
        .catch(() => {
          throw new Error("Server error");
        });

      return responce;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (text, { rejectWithValue, dispatch }) => {
    try {
      const data = {
        title: text,
        completed: false,
      };
      await axios
        .post(`http://localhost:3001/todos`, data)
        .then((responce) => {
          dispatch(addTodo(responce.data));
        })
        .catch(() => {
          throw new Error("Can't add new todo. Server error.");
        });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const completeTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      completeTodo.completed = !completeTodo.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "success";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })
      .addCase(addNewTodo.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
