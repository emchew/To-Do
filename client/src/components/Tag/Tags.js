import React, { useState } from 'react'
import Tag from './Tag';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
export default function Tags({tags, submit}) {
    const [newTag, setNewTag] = useState('');
    const [toggleAddTag, setToggleAddTag] = useState(false);
    const handleAddTag = () => {
        if (newTag === '') {
            alert("Tag cannot be an empty string");
        } else {
            submit(newTag);
        }
    }

  return (
        <>
            {tags.length > 0 
                ? (tags.map((tag, key) => <Tag key={key} tag={tag}></Tag>))
                : (!toggleAddTag && <button onClick={() => setToggleAddTag(true)}>Add Tag</button>)
            }
            {toggleAddTag && (
                <form onSubmit={e => e.preventDefault()}>
                    <label>Tag</label>
                    <input placeholder="New Tag"
                        value={newTag}
                        onChange={(e) => {setNewTag(e.target.value)}}
                    />
                    <IconButton onClick={handleAddTag}>
                        <AddIcon/>
                    </IconButton>
                </form>
            )}
        
        </>
  )
}
