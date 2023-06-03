import React from 'react'
import FlexContainer from '../../containers/FlexContainer'
export default function EditTagForm({tag}) {
  return (
    <FlexContainer flexDirection="column">
        <h3>Edit Tag</h3>
        <form>
            {tag.tagName}
        </form>
    
    </FlexContainer>
  )
}
