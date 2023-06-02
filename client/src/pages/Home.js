import React, { useState } from 'react'
import { styled } from '@mui/material';

import Button from '../components/buttons/Button';
import Dashboard from '../components/Dashboard'
import FlexContainer from '../containers/FlexContainer'
import TaskModal from '../components/task/TaskModal';
export default function Home() {
  const [addTagModal, setAddTagModal] = useState(false);
  const handleTagSubmit = (tagId, colour, textColour) => {
    console.log(tagId, colour, textColour);
  }
  return (
    <main>
        <Dashboard/>
        <FlexContainer id="main-button-container">
            <Button colour="default">Add a Tag</Button>
            <Button colour="green" sx={newTaskBtnStyle} onClick={() => setAddTagModal(true)}>
                + New Task
            </Button>
        </FlexContainer>
        <TaskModal open={addTagModal} setOpen={setAddTagModal} tagSubmit={handleTagSubmit}/>
    </main>
  )
}

const newTaskBtnStyle = {
  filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))'
}
