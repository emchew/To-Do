import React from 'react'
import { styled } from '@mui/material';
import FlexContainer from '../../containers/FlexContainer';

export default function TaskDetails({ task }) {
  return (
    <TaskContainer>
        {task.description}
    </TaskContainer>
  )
}

const TaskContainer = styled(FlexContainer)({
    minWidth: 300
});