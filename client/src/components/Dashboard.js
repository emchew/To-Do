import React from 'react'
import Button from './Button/Button'

export default function Dashboard() {
  return (
    <div>
        <Button colour="green" sx={newTaskBtnStyle}>+ New Task</Button>
        <Button colour="default">Add a Tag</Button>
    </div>
  )
}

const newTaskBtnStyle = {
    filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))'
}