import React, { useState } from 'react'
import Task from './Task';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function Tasks({tasks, submit, handle}) {
  const [newTask, setNewTask] = useState('');
  const handleTaskSubmit = () => {
    if (newTask === '') {
      alert("New task can't be an empty string");
    } else {
      submit(0, newTask);
      setNewTask('');

    }
  }
  return (
    <div className="tasks-container">
        {tasks.map((task) => 
          <Task key={task.taskId}
            task={task}
          />
        )}
        <div className="task-form">
          <form onSubmit={e => e.preventDefault()}>
            <input value={newTask}
              placeholder="Enter a new task" 
              onChange={e => setNewTask(e.target.value)}
            />
            <IconButton onClick={handleTaskSubmit}>
              <AddIcon/>
            </IconButton>

          </form>
        </div>
    </div>
  )
}