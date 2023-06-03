import React from 'react'
import { TwitterPicker as ColourPicker } from 'react-color';

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
    <ColourPicker triangle="top-right" onChange={handleChange}/>
  )
}
