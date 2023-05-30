import React, { useState } from 'react'
import Tag from './Tag';
export default function Tags({tags}) {
    const [toggleAddTag, setToggleAddTag] = useState(false);
    const handleAddTag = () => {

    }

  return (
        <>
            {tags.length > 0 
                ? (tags.map((tag, key) => <Tag key={key} tag={tag}></Tag>))
                : (!toggleAddTag && <button onClick={() => setToggleAddTag(true)}>Add Tag</button>)
            }
            {toggleAddTag && (
                <form>
                    <label>Tag</label>
                    <input placeholder="New Tag"/>
                </form>
            )}
        
        </>
  )
}
