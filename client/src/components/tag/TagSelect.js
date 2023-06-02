import React from 'react'
import Select from "../form/Select";
const colour = '#5C5C5C';
export default function TagSelect({id, tags, tag, setTag, ...props}) {
    const options = tags.map((tag, key) => {
        return {
            name: tag.tagName,
            value: key,
            colour: tag.colour,
        }
    })
  return (
    <Select id={id} {...props}
        onChange={(e) => setTag(e.target.value)}
        options={options}
        colour={colour}
        value={tag}
        setValue={setTag}
    />
  )
}
