import React from 'react'
import { styled } from '@mui/material';

export default function FlexContainer({ children, sx, ...props }) {
    console.log(sx);
    return (
        <ContainerStyle
            sx={sx}
            {...props}>
            {children}
        </ContainerStyle>
    )
}

const ContainerStyle = styled("div")(({flexDirection, justifyContent, alignItems, flexGrow }) => ({
   display: 'flex',
   flexDirection,
   justifyContent,
   alignItems,
   flexGrow
}))
