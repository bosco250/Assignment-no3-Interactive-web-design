import React, { useState, memo } from 'react';

const TodoItem = ({ todo }) => {
  console.log(`Rendering Todo: ${todo.text}`);
  return (
    <li style={styles.todoItem}>
      <input type="checkbox" checked={todo.completed} readOnly style={styles.checkbox} /> {todo.text}
    </li>
  );
};

const TodoList = memo(({ todos }) => {
  console.log('Rendering TodoList');
  return (
    <ul style={styles.todoList}>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  );
});

const AppToDo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.title}>Todo List</h1>
      <div style={styles.inputContainer}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter a new todo" 
          style={styles.inputField}
        />
        <button onClick={addTodo} style={styles.addButton}>Add Todo</button>
      </div>
      <TodoList todos={todos} />
    </div>
  );
};

// Inline styles object
const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  title: {
    color: '#333',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  inputField: {
    padding: '8px',
    width: '70%',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  addButton: {
    padding: '8px 12px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '14px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  addButtonHover: {
    backgroundColor: '#45a049',
  },
  todoList: {
    listStyleType: 'none',
    padding: '0',
  },
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 0',
  },
  checkbox: {
    marginRight: '10px',
  },
};

export default AppToDo;
