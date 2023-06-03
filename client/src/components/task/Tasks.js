import React from 'react'

import FlexContainer from '../../containers/FlexContainer';
import Task from './Task';

export default function Tasks({ tasks, taskEdit, allTags, updateTags, setReload }) {
  return (
    <FlexContainer id="tasks-container">
        {tasks.map(task => {
            return (
              <Task key={task.taskId}
                task={task}
                allTags={allTags}
                taskChange={taskEdit}
                updateTags={updateTags}
                setReload={setReload}
              />
            )
        })}
    </FlexContainer>
  )
}
