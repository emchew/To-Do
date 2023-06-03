import React from 'react'
import Select from "../form/Select";
export default function TagSelect({id, tags, tag, setTag, ...props}) {
    const options = tags.map((tag, key) => {
        return {
            name: tag.tagName,
            value: key,
            colour: tag.colour,
            textColour: tag.textColour
        }
    })
  return (
    <Select id={id} {...props}
        onChange={(e) => setTag(e.target.value)}
        options={options}
        value={tag}
        setValue={setTag}
    />
  )
}
