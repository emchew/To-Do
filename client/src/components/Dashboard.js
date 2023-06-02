import React, { useState } from 'react'
import { styled } from '@mui/material';

import FlexContainer from '../containers/FlexContainer';

export default function Dashboard({tasks}) {
    return (
        <FlexContainer centreHorizontal={true} id="dashboard-container">
            {/* <Tasks tasks={tasks}/> */}
            {/* <TaskModal open={addTagModal} setOpen={setAddTagModal} submit={handleTagSubmit}/> */}
        </FlexContainer>
    )
}
