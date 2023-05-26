import { Link as LinkBase } from 'react-router-dom';
import { styled } from '@mui/material';

const Link = styled(LinkBase)({
    textDecoration: 'none',
    color: '#333232',
    fontWeight: 'bold'
})

export default Link;