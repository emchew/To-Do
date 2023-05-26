import React from 'react'
import BaseButton from '@mui/material/Button';

export default function Button({colour, hasMarginTop, sx, children, ...props}) {
    const colourSx = generateColour(colour);
    sx = {...sx, ...colourSx};
    sx = hasMarginTop = {...sx, marginTop: '1.5em'};
  return (
    <BaseButton sx={sx} {...props}>
        {children}
    </BaseButton>
  )
}

const generateColour = (colour) => {
    let set = getColourSet('default');
    if (colour in colourSet) {
        set = getColourSet(colour);
    }
    return {
        '&': {
            color: set.colour,
            backgroundColor: set.base,
            textTransform: 'none',
            fontWeight: 'bold',
            borderRadius: '10px',
            padding: '5px 1em'
        },
        '&:hover': {
            backgroundColor: set.hover
        }
    }
}

const getColourSet = (colour) => {
    return colourSet[colour];
}

const colourSet = {
    green: {
        colour: '#FFFFFF', base: '#42DB7F', hover: '#2ECB6D'
    },
    default: {
        colour: '#AFA7A7', base: '#F9F9F9', hover: '#F9F9F9'
    },
    blue: {
        colour: '#FFFFFF', base: '#5EB1FF', hover: '#2F84E8'
    }
};

