import React from 'react'
import RoundModal from '../Modal/RoundModal';
import TaskForm from './TaskForm';

export default function TaskModal({open, setOpen, submit}) {

  return (
    <RoundModal open={open} setOpen={setOpen}
        hasTitle={true}
        title="Add a New Task"
    >
        <TaskForm submit={submit}/>
    </RoundModal>
  )
}
