import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { styled } from '@mui/material';
import FlexContainer from '../../containers/FlexContainer';
import RoundModal from '../modals/RoundModal'
import TagForm from './TagForm'
import Tag from './Tag';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '../layout/Grid';

export default function TagModal({open, setOpen, setReload, submit}) {
    const [tags, setTags] = useState([]);
    const config = {'Content-Type': 'application/json'};

    useEffect(() => {
        updateTags();
    }, [open]);

    const updateTags = () => {
        axios.get(`/tags/list`, config)
            .then(res => res.data)
            .then(data => setTags(data.tags))
            .catch(() => alert("Network error"));
    }
    const tagDelete = (tagId) => {
        axios.delete(`/tag/delete/${tagId}`, config)
            .then(res => res.data)
            .then(() => updateTags());
    }

    const handleDelete = (index) => {
        tagDelete(tags[index].tagId);
    }
    return (
      <RoundModal open={open} setOpen={setOpen}
          hasTitle={true}
          title="Your Tags"
      >
        <StyledContainer flexDirection="column" alignItems="center">
            <TagForm setReload={setReload} updateTags={updateTags}/>
            <Grid flexDirection="column" alignItems="center" sx={{justifyItems: 'center'}}>
                {tags.map((tag, key) => 
                    <React.Fragment key={key}>
                        <Tag tagId={tag.tagId} setReload={updateTags} allowDelete={false}/>
                        <IconButton onClick={() => handleDelete(key)} sx={{ fontSize: '1.5em' }}>
                            <DeleteIcon/>
                        </IconButton>
                    </React.Fragment>
                )}
            </Grid>
        </StyledContainer>
      </RoundModal>
    )
  }


const StyledContainer = styled(FlexContainer)({
    minWidth: '300px',
    minHeight: '10vh',
});
