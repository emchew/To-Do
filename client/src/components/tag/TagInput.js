import React, { useState } from 'react'
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/AddBox';
import FlexContainer from '../../containers/FlexContainer';
import TextInput from '../form/TextInput';
export default function TagInput({ tagSubmit }) {
    const [tag, setTag] = useState('');
    const config = {'Content-Type': 'application/json'};

    const handleTagSubmit = () => {
        if (tag === '') {
            alert("Name cannot be an empty string");
            return;   
        }
        const body = {tagName: tag, colour: '', textColour: ''};
        axios.post(`/tag/create`, body, config)
            .then(res => res.data)
            .then(() => tagSubmit());
    }
    return (
        <FlexContainer>
            <TextInput placeholder="New Tag"
                sx={{marginRight: '10px'}}
                onChange={e => setTag(e.target.value)}
            />
            <IconButton onClick={handleTagSubmit}>
                <AddIcon/>
            </IconButton>
        </FlexContainer>
    )
}
