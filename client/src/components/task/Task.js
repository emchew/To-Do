import React, { useState } from 'react'
import { statusOptions } from '../utility/statusTypes';
import FlexContainer from '../../containers/FlexContainer';
import StatusSelect from '../status/StatusSelect';
export default function Task({task, change}) {
  const [status, setStatus] = useState(() => {
      return statusOptions.findIndex(o => o.value === task.status);
  });

  const handleStatusChange = (value) => {
    setStatus(value);
    change(task.taskId, task.taskName, statusOptions[value].value, task.tags, task.description);
  }

  return (
    <FlexContainer id="task-container">
        <StatusSelect value={status} setValue={handleStatusChange}/>
        <b>2pm-5pm</b>
        {task.taskName}
    </FlexContainer>
  )
}
