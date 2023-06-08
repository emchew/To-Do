import React, { useState } from 'react'
import axios from 'axios';

import Button from '../components/buttons/Button';
import Dashboard from '../components/Dashboard'
import FlexContainer from '../containers/FlexContainer'
import TaskModal from '../components/task/TaskModal';
import TagModal from '../components/tag/TagModal';
export default function Home() {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [addTagModal, setAddTagModal] = useState(false);
  const [reload, setReload] = useState(true);
  const config = {'Content-Type': 'application/json'};

  const handleTaskSubmit = (taskName, status, tags, description) => {
    if (taskName === '') {
      alert('Task name cannot be an empty string ')
      return false;
    }
    let tagIds = tags.map(tag => tag.tagId);
    const body = { taskName, status, tags: tagIds, description };
    axios.post(`/task/create`, body, config)
      .then(res => res.data)
      .then(() => setReload(true));
    return true;
  }

  const handleTaskEdit = (taskId, taskName, status, tags, description) => {
    if (taskName === '') {
      alert('Task name cannot be an empty string ')
      return false;
    }
    const body = { taskId, taskName, status, tags, description };
    axios.put(`/task/edit`, body, config)
      .then(res => res.data)
      .then(() => setReload(true));
    return false;
  }
  
  return (
    <main>
        <Dashboard reload={reload} setReload={setReload} taskEdit={handleTaskEdit}/>
        <FlexContainer id="main-button-container">
            <Button colour="default" onClick={() => setAddTagModal(true)}>All Tags</Button>
            <Button colour="green" sx={newTaskBtnStyle} onClick={() => setAddTaskModal(true)}>
                + New Task
            </Button>
        </FlexContainer>
        <TaskModal open={addTaskModal} setOpen={setAddTaskModal} submit={handleTaskSubmit}/>
        <TagModal open={addTagModal} setOpen={setAddTagModal} setReload={setReload}/>
    </main>
  )
}

const newTaskBtnStyle = {
  filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))'
}
