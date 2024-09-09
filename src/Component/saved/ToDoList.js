import React, { useState, useEffect } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState(() => {
   
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className='a2b'>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
