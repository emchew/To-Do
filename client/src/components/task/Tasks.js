import React, { useState } from 'react'

import FlexContainer from '../../containers/FlexContainer';
import Modal from '../modals/Modal';
import Task from './Task';
import TaskDetails from './TaskDetails';

export default function Tasks({ tasks, taskEdit, allTags, updateTags, setReload }) {
  const [toggleTaskModal, setToggleTaskModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const openTaskModal = (task) => {
    setCurrentTask(task);
    setToggleTaskModal(true);
  }
  return (
    <FlexContainer sx={tasksContainerStyle}>
        {tasks.map(task => {
            return (
              <Task key={task.taskId}
                task={task}
                taskClick={openTaskModal}
                allTags={allTags}
                taskChange={taskEdit}
                updateTags={updateTags}
                setReload={setReload}
              />
            )
        })}
        {currentTask && (
          <Modal open={toggleTaskModal}
            setOpen={setToggleTaskModal}
            dividers={true}
            hasTitle={true}
            title={currentTask.taskName}>
            <TaskDetails task={currentTask} setReload={setReload}/>
          </Modal>
        )}
    </FlexContainer>
  )
}

const tasksContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: 'calc(100% - 100px)'
}