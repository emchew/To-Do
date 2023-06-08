import React, { useState } from 'react'
import { Icon, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '../layout/Grid';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import FlexContainer from '../../containers/FlexContainer';
import StatusSelect from '../status/StatusSelect';
import Tag from '../tag/Tag';

export default function TaskDetails({ task, setReload }) {
  const [status, setStatus] = useState(0);
  return (
    <TaskContainer flexDirection="column">
       <Heading justifyContent="space-between">
          <h3>
            {task.taskName}
            <IconButton>
              <EditIcon/>
            </IconButton>
          </h3>
        <StatusSelect value={status} setValue={setStatus}/>
      </Heading>
      <FlexContainer justifyContent="start" alignItems="center">   
        {task.tags.map(tag => {
          return <Tag key={tag} tagId={tag} setReload={setReload} tagDelete={() => console.log("tried to delete")}/>
        })}
        <IconButton>
          <AddIcon/>
        </IconButton>
      </FlexContainer>
      <Heading justifyContent="space-between">
        <h3>
          Description
          <IconButton>
            <EditIcon/>
          </IconButton>
        </h3>
      </Heading>
      <Typography marginBottom={'0.6em'}>
        {task.description === '' ? 'No description yet' : task.description}
      </Typography>
        
        <FlexContainer>
        </FlexContainer>
        {/* <Heading>
          <h3>Tags</h3>
        </Heading> */}
    </TaskContainer>
  )
}

const TaskContainer = styled(FlexContainer)({
    minWidth: 300,
    minHeight: '12vh',
    padding: '0px 1em'
});


const Heading = styled(FlexContainer)({
  width: '100%',
  flexGrow: 1,
  alignItems: "center",
  '& select': {
    height: '2em'
  },
  '& h3': {
    fontSize: '1em',
    marginBlockStart: '0.5em',
    marginBlockEnd: '0.5em'
  }
});