import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState(['create project', 'complete notes']);
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };
  
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  return (
    <div className="todo-container">
      <h1 className="todo-header">
        TO-DO LIST
        <span className="clipboard-icon">📋</span>
      </h1>
      
      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="Add your Text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={handleAddTodo}>
          Add Task
        </button>
      </div>
      
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input type="checkbox" className="todo-checkbox" />
            <span className="todo-text">{todo}</span>
            <button 
              className="delete-button" 
              onClick={() => handleDeleteTodo(index)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;