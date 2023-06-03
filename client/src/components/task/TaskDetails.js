import React from 'react'
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import FlexContainer from '../../containers/FlexContainer';

export default function TaskDetails({ task }) {
  return (
    <TaskContainer flexDirection="column">
        <h3>Description</h3>
        <FlexContainer>
          <Typography>{task.description}</Typography>
        </FlexContainer>
    </TaskContainer>
  )
}

const TaskContainer = styled(FlexContainer)({
    minWidth: 300,
    minHeight: '12vh',
    padding: '0px 1em'
});