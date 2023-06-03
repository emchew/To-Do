import React from 'react'
import { TwitterPicker as ColourPicker } from 'react-color';

const colours = [
  '#FD4437', '#FFC979', '#FCB900', '#FFEB3B', '#7BDCB5', '#00D084', '#18AA64',
  '#8ED1FC', '#74B4FF', '#2196F3', '#ABB8C3', '#FFADCB', '#DCBAFF', '#9900EF'
];

export default function TagColour({change}) {
  const handleChange = (colour) => {
    change(colour.hex, generateTextColour(colour.rgb.r, colour.rgb.g, colour.rgb.b));
  }

  const generateTextColour = (r, g, b) => {
    if (r*0.299 + g*0.587 + b*0.114 > 150) {
      return '#5C5C5C';
    } else {
      return '#ffffff';
    }
  }
  return (
    <ColourPicker triangle="top-right" onChange={handleChange} colors={colours}/>
  )
}
