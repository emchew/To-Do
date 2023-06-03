import React, { useState, useEffect } from 'react'
import useVisible from '../../hooks/useVisible';
import axios from 'axios';
import { styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import EditTagForm from './EditTagForm';

const defaultColours = {
    colour: '#607D8B',
    textColour: '#FFFFFF'
}
export default function Tag({tagId, setReload, reloadTags, setReloadTags, tagDelete}) {
    const [tag, setTag] = useState({});
    const { ref, isComponentVisible, setIsComponentVisible } = useVisible(false);
    const config = {'Content-Type': 'application/json'};
    // const [toggleTagModal, setToggleTagModal] = useState(false);

    useEffect(() => {
        updateTag();
    }, [tagId]);

    useEffect(() => {
        if (reloadTags) {
            updateTag();
            setReloadTags(false);
        }
    }, [reloadTags]);
    
    const updateTag = () => {
        axios.get(`/tag/details/${tagId}`, config)
            .then(res => res.data)
            .then((data) => setTag(data.tag));
    }

    const handleDelete = () => {
        tagDelete(tagId);
        setReload(true);
    }

    const handleColourChange = (colour, textColour) => {
        const body = {tagId, ...tag, colour, textColour};
        axios.put(`/tag/edit/`, body, config)
            .then(res => res.data)
            .then(() => setReloadTags(true))
            .then(() => setReload(true))
    }

    const handleClick = (e) => {
        // e.stopPropagation();
        setIsComponentVisible(true);
    }

    return (
        <>
            <TagStyle tag={tag} onClick={handleClick} Mouse>
                {tag.tagName}
                <CloseStyle tag={tag} onClick={handleDelete}>
                    <CloseIcon/>
                </CloseStyle>
                
                {isComponentVisible && (
                    <div ref={ref}>
                        <EditTagForm tag={tag} colourChange={handleColourChange}/>
                    </div>
                )}
            </TagStyle>
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
    textAlign: 'center',
    position: 'relative',
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

