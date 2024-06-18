import './App.css';
import ToDolist from './components/ToDolist';
import ToDoInput from './components/ToDoInput';
import { useState, useEffect } from 'react';

function App() {
  
  const[todos, setTodos] = useState([]);
  const[todoInput, setTodoInput] = useState('');

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function addTodoValue(newValue){
    const newTodoList = [...todos, newValue];
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function deleteTodo(index){
    const newTodoList = todos.filter((todo, todoIdx) => {
      return todoIdx !== index;
    })
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function editValue(index){
    const newValue = todos[index];
    setTodoInput(newValue);
    deleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <ToDoInput todoInput = {todoInput} setTodoInput = {setTodoInput} addTodoValue = {addTodoValue}/>
      <ToDolist editValue = {editValue} todoInput = {todoInput} setTodoInput = {setTodoInput} deleteTodo = {deleteTodo} todos= {todos}/>
    </>
  );
}

export default App;
