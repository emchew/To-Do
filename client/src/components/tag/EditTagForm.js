import React from 'react'
import { styled } from '@mui/material';
import FlexContainer from '../../containers/FlexContainer'
import TagColour from './TagColour'
export default function EditTagForm({tag, colourChange}) {
  return (
    <EditTagContainer flexDirection="column">
        <TagColour change={colourChange}/>
        {/* <h3>Edit Tag</h3>
        <form>
            {tag.tagName}
        </form> */}
    
    </EditTagContainer>
  )
}


const EditTagContainer = styled(FlexContainer)({
  position: 'absolute',
  padding: '1em',
  right: '10px',
  zIndex: 1
});