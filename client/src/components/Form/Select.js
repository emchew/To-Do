import React from 'react'

export default function Select({name, id, options, colour, value, setValue, ...props}) {
    const style ={
        backgroundColor: options[value].colour,
        color: colour
    }
    return (
        <select id={id} name={name} {...props}
            style={style}
            onChange={(e) => setValue(e.target.value)}
        >
            {options && options.map((o, key) => {
                return <option key={key} value={key}>{o.name}</option>
            })}
        </select>
    )
}
