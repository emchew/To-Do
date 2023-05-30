import React from 'react'
import Select from '../Form/Select'

export default function StatusSelect({ status, setStatus }) {
  return (
    <Select
        options={statusOptions}
        value={status}
        setValue={setStatus}
        colour='#5C5C5C'
    />
  )
}


const statusOptions = [
    {name: 'To Do', value: 'to-do', colour: '#FFFA7D'},
    {name: 'Doing', value: 'doing', colour: '#FFC979'},
    {name: 'Completed', value: 'completed', colour: '#91EB82'},
  ]
