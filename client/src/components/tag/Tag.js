import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { styled } from '@mui/material';
import Popover from '@mui/material/Popover';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import EditTagForm from './EditTagForm';

const defaultColours = {
    colour: '#607D8B',
    textColour: '#FFFFFF'
}
export default function Tag({tagId, setReload, tagDelete}) {
    const [tag, setTag] = useState({});
    const [anchor, setAnchor] = useState(null);
    
    const config = {'Content-Type': 'application/json'};

    useEffect(() => {
        updateTag();
    }, [tagId]);
    
    const updateTag = () => {
        axios.get(`/tag/details/${tagId}`, config)
            .then(res => res.data)
            .then((data) => setTag(data.tag));
    }

    const handleDelete = () => {
        tagDelete(tagId);
        setReload(true);
    }

    return (
        <>
            <TagStyle tag={tag} onClick={e => setAnchor(e.currentTarget)}>
                {tag.tagName}
                <CloseStyle tag={tag} onClick={handleDelete}>
                    <CloseIcon/>
                </CloseStyle>
            </TagStyle>
            <Popover open={anchor != null}
                onClose={() => setAnchor(null)}
                anchorEl={anchor}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <EditTagForm tag={tag}/>
            </Popover>
        </>
    )
}
const TagStyle = styled('div')(({tag}) => ({
    color: tag.textColour ? tag.textColour : defaultColours.textColour,
    backgroundColor: tag.colour ? tag.colour : defaultColours.colour,
    padding: '0.3em 1em',
    marginRight: '10px',
    borderRadius: '40px',
    minWidth: '80px',
    textAlign: 'center'
}));

const CloseStyle = styled(IconButton)(({tag}) => ({
    '&': {
        marginLeft: '5px',
        padding: '5px'
    },
    '& svg': {
        width: '15px',
        height: '15px',
        color: tag.textColour ? tag.textColour : defaultColours.textColour
    }
}))

