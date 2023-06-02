import React from 'react'

import FlexContainer from '../../containers/FlexContainer';
import Task from './Task';

export default function Tasks({ tasks, taskEdit }) {
  return (
    <FlexContainer id="tasks-container">
        {tasks.map(task => {
            return <Task key={task.taskId} task={task} change={taskEdit}/>
        })}
    </FlexContainer>
  )
}
