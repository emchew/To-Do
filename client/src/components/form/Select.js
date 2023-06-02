import React from 'react'
import { styled } from '@mui/material';

export default function Select({name, id, options, colour, value, setValue, ...props}) {
    const style ={
        backgroundColor: options[value].colour,
        color: colour
    }
    return (
        <SelectStyle id={id} name={name} {...props}
            style={style}
            onChange={(e) => setValue(e.target.value)}
        >
            {options && options.map((o, key) => {
                return <option key={key} value={key}>{o.name}</option>
            })}
        </SelectStyle>
    )
}

const SelectStyle = styled("select")({
    padding: '5px 10px',
    borderRadius: '20px',
    border: '1px #E9E9E9 solid',
    font: 'inherit'
})