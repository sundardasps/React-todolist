import React, { useState } from "react";
import Todoform from "./Todoform";
import Todo from "./Todo";

function Todolist() {
  const [todos, setTodos] = useState([]);
//=================== NEW TODO ADDING ====================
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.teXt)) {
      return;
    }

    
    for (const existingTodo of todos) {
      if (existingTodo.text === todo.text) {
        return; 
      }
    }
     
    if(todo.text.trim() === "" ){
        alert("please add valid input! ")
        return
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };
//====================UPDATE TODO ==========================

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.teXt)) {
      return;
    }

    for (const ckeckVlaue of todos) {
      if (ckeckVlaue.text === newValue.text) {
        return;
      }
    }

    if(newValue.text.trim() === "" ){
        alert("please add valid input! ")
        return
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
//==================== DELETING TODO =========================

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };
//======================= FOR TODO COMPLETE =====================

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What is the plane for today?</h1>
      <Todoform onSubmit={addTodo} />
      <br></br>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo} 
      />
    </div>
  );
}

export default Todolist;
