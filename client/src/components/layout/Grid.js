import React from 'react'
import { styled } from '@mui/material';

export default function Grid({ children, sx, onClick, ...props }) {
    return (
        <GridStyle
            sx={sx}
            onClick={onClick}
            {...props}>
            {children}
        </GridStyle>
    )
}

const GridStyle = styled("div")(({flexDirection, justifyContent, alignItems, flexGrow }) => ({
   display: 'grid',
   width: 'calc(100%)',
   gridTemplateColumns: '2fr 1fr',
   flexDirection,
   justifyContent,
   alignItems,
   flexGrow
}))
