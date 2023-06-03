import React from 'react'
import { styled } from '@mui/material';

export default function FlexContainer({ children, sx, onClick, ...props }) {
    return (
        <ContainerStyle
            sx={sx}
            onClick={onClick}
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
