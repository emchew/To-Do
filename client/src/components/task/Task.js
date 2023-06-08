import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { statusOptions } from '../utility/statusTypes';
import FlexContainer from '../../containers/FlexContainer';
import StatusSelect from '../status/StatusSelect';
import Tags from '../tag/Tags';
export default function Task({task, taskChange, taskClick, allTags, setReload}) {
  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (task != null) {
      setStatus(statusOptions.findIndex(o => o.value === task.status));
    }
  }, [task])

  const handleStatusChange = (value) => {
    setStatus(value);
    taskChange(task.taskId, task.taskName, statusOptions[value].value, task.tags, task.description);
  }

  const handleClick = (e) => {
      if (e.currentTarget != e.target) {
        taskClick(task);
      }
  }

  return (
    <FlexContainer id="task-container" onClick={handleClick}>
        <StatusSelect value={status} setValue={handleStatusChange}/>
        <BlockText fontWeight={'bold'}>2pm-5pm</BlockText>
        <BlockText sx={{width: '25vw'}}>{task.taskName}</BlockText>

        <Tags task={task} allTags={allTags} setReload={setReload} taskChange={taskChange}/>
    </FlexContainer>
  )
}

const BlockText = styled(Typography)({
  marginLeft: '20px'
})
