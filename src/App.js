import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleRemove = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>📝 To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="task-text">
              {todo.completed ? '✅ ' : '⬜ '} 
              {todo.text}
            </span>
            <div className="buttons">
              <button onClick={() => handleToggle(index)}>
                {todo.completed ? 'Undone' : 'Done'}
              </button>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
