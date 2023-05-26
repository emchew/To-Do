import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const roundedSx = {
    boxShadow: '0px 4px 4px #A89B9B',
    borderRadius: '20px'
}

export default function Modal(props) {
    const { id, open, setOpen, hasTitle, title, hasFooter, footer, children, dividers, isRounded } = props;
    let sx = {
        '& h2': {
            textAlign: 'center',
            marginBlockStart: '0.5em',
            marginBlockEnd: '0em',
            fontWeight: 'bold'
        }
    };
    if (isRounded) sx['& .MuiPaper-root'] = roundedSx;
    
    return (
      <BootstrapDialog
        onClose={() => setOpen(false)}
        aria-labelledby={id}
        open={open}
        sx={sx}
      >
        {hasTitle && (
            <BootstrapDialogTitle id={id} onClose={() => setOpen(false)}>
              {title}
            </BootstrapDialogTitle>
        )}
       
        <DialogContent {...dividers}>
            {children}
        </DialogContent>
        {hasFooter && (
            <DialogActions>
                {footer}
            </DialogActions>
        )}
      </BootstrapDialog>
  );
}