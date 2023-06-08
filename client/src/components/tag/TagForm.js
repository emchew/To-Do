import React from 'react'
import { styled } from '@mui/material';
import TagInput from './TagInput'

export default function TagForm({ setReload, updateTags }) {
    const handleSubmit = () => {
        updateTags();
        setReload();
    }
  return (
        <FormContainer onSubmit={e => e.preventDefault()}>
            <TagInput tagSubmit={handleSubmit}/>
        </FormContainer>
  )
}

const FormContainer = styled('form')({
    marginBottom: '1em'
})