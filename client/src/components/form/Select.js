import React from 'react'
import { styled } from '@mui/material';
const colour = '#5C5C5C';

export default function Select({ id, options, colour, value, setValue, ...props}) {    
    return (
        <SelectStyle id={id}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            color={options[value].textColour ? options[value].textColour : colour}
            backgroundColor={options[value].colour}
            {...props}
        >
            {options && options.map((o, key) => {
                return <option key={key} value={key}>{o.name}</option>
            })}
        </SelectStyle>
    )
}

const SelectStyle = styled("select")(({color, backgroundColor}) => ({
    padding: '5px 10px',
    borderRadius: '20px',
    border: '1px #E9E9E9 solid',
    font: 'inherit',
    color,
    backgroundColor
}))