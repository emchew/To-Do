import React from 'react'
import Modal from './Modal';

export default function RoundModal({open, setOpen, children, ...props}) {

  return (
    <Modal open={open} setOpen={setOpen} {...props} isRounded={true}>
        {children}
    </Modal>
  )
}
