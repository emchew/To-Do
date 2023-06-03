import React from 'react'
import Select from '../form/Select'
import { statusOptions } from '../utility/statusTypes';
const colour = '#5C5C5C';
export default function StatusSelect({id, value, setValue}) {
  return (
    <Select id={id}
        options={statusOptions}
        colour={colour}
        value={value}
        setValue={setValue}
    />
  )
}
