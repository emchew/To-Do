import React, { useState } from 'react'
import Tag from './Tag'
import FlexContainer from '../../containers/FlexContainer'
import TagSelect from "../tag/TagSelect";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/AddBox';

export default function Tags({ task, taskChange, setReload, allTags }) {
  const [tag, setTag] = useState(0);
  const [reloadTags, setReloadTags] = useState(false);

  const handleTagChange = () => {
    let newTags = [...task.tags, allTags[tag].tagId];
    newTags = [...new Set(newTags)]; 
    taskChange(task.taskId, task.taskName, task.status, newTags, task.description);
  }

  const handleTagDelete = (tagId) => {
    let newTags = [...task.tags];
    let index = newTags.findIndex(t => t === tagId);
    if (index !== -1) {
      newTags.splice(index, 1);

      taskChange(task.taskId, task.taskName, task.status, newTags, task.description);
    }
  }
  return (
    <FlexContainer justifyContent="end" alignItems="center" flexGrow="1">
      {task.tags.length > 0  && task.tags.map(tag => {
          return (
            <Tag key={tag} tagId={tag}
              tagDelete={handleTagDelete}
              setReload={setReload}
              reloadTags={reloadTags}
              setReloadTags={setReloadTags}
            />
          )
      })}

      {allTags.length > 0 && task.tags.length < 3 && (
        <>
          <TagSelect tags={allTags} tag={tag} setTag={setTag}/> 
            <IconButton onClick={handleTagChange}>
              <AddIcon/>         
            </IconButton>
        </>
      )}
    </FlexContainer>
  )
}