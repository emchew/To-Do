import { styled } from '@mui/material';

const Textarea = styled('textarea')(({hasMarginTop}) => ({
  padding: '10px 10px',
  borderRadius: '5px',
  border: '1px #E9E9E9 solid',
  resize: 'none',
  width: 'calc(100% - 20px)',
  font: 'inherit',
  marginTop: hasMarginTop ? '1em' : null
}));

export default Textarea;