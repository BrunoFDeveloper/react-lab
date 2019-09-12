import React, { useState, useMemo, useEffect, useReducer } from 'react';
import List from './List';

const HooksLearn = () => {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = () => {
    if (todoName.trim() === '') return;

    const newTodo = {
      id: Math.floor(Math.random() * 10),
      text: todoName
    };

    setTodoList(todoList.concat(newTodo));
  }

  const removeTodo = todoId => setTodoList(todoList.filter(todo => todo.id !== todoId));

  // Use Reducer
  // const todoListReducer = (state, action) => {
  //   switch (action.type) {
  //     case 'ADD':
  //       return state.concat(action.payload);
  //     case 'SET':
  //       return action.payload;
  //     case 'REMOVE':
  //       return state.filter(todo => todo.id !== action.payload);
  //     default:
  //       return state;
  //   }
  // };

  // const [todoList, dispatch] = useReducer(todoListReducer, []);
  // useEffect(() => console.log('Todo render only one time'), []);
  // useEffect(() => console.log('Todo render everytime when todoList update'), [todoList]);
  // useEffect(() => {
  //   console.log('Mount')
  //   return () => {
  //     console.log('UnMount')
  //   }
  // }, []);


  return (
    <div>
      <input onChange={({ target }) => setTodoName(target.value)} value={todoName} />
      <button onClick={addNewTodo}>Add</button>
      <br />
      <br />
      {/* Only re-render if todoList update */}
      {useMemo(() => <List list={todoList} removeTodoHandle={removeTodo} />, [todoList])}
    </div>
  );
};

export default HooksLearn;