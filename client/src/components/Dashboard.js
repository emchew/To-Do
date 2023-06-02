import React, { useState } from 'react'
import Button from './Button/Button'
import TaskModal from './Task/TaskModal';
import FlexContainer from '../containers/FlexContainer';
import Tasks from './Task/Tasks';

export default function Dashboard() {
  const [addTagModal, setAddTagModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [index, setIndex] = useState(0);

  const handleTagSubmit = (taskId, taskName) => {
    const copy = [...tasks];
    if (taskName)
    copy.push({
        taskId: index,
        taskName,
        due: '2-5pm',
        tags: [],
    });
    setIndex(i => i + 1);
    setTasks(copy);
  }

  // const handleTaskAdd = (taskId, taskName, tags) => {
  //   const copy = [...tasks];
  //   let index = copy.findIndex(task => task.taskId === taskId);
  //   if (index !== -1) {
  //     copy[index] = {...copy[index], taskName, tags};
  //   }
  //   setTasks(copy);
  // }

  return (
    <FlexContainer centreHorizontal={true} id="dashboard-container">
      <Tasks tasks={tasks} submit={handleTagSubmit}/>
      <FlexContainer id="dashboard-buttons">
        <Button colour="default">Add a Tag</Button>
        <Button colour="green" sx={newTaskBtnStyle} onClick={() => setAddTagModal(true)}>
          + New Task
        </Button>
      </FlexContainer>
      <TaskModal open={addTagModal} setOpen={setAddTagModal} submit={handleTagSubmit}/>
    </FlexContainer>

  )
}

const newTaskBtnStyle = {
    filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))'
}