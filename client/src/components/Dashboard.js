import React, { useState } from 'react'
import Button from './Button/Button'
import TaskModal from './Task/TaskModal';
import FlexContainer from '../containers/FlexContainer';

export default function Dashboard() {
  const [addTagModal, setAddTagModal] = useState(false);

  const handleTagSubmit = () => {

  }
  return (
    <div>
        <FlexContainer id="dashboard-buttons">
          <Button colour="default">Add a Tag</Button>
          <Button colour="green" sx={newTaskBtnStyle} onClick={() => setAddTagModal(true)}>
            + New Task
          </Button>
        </FlexContainer>
        <TaskModal open={addTagModal} setOpen={setAddTagModal} submit={handleTagSubmit}/>
    </div>
  )
}

const newTaskBtnStyle = {
    filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))'
}