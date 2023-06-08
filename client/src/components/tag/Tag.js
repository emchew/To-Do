import React, { useState, useEffect } from 'react'
import useVisible from '../../hooks/useVisible';
import axios from 'axios';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import EditTagForm from './EditTagForm';
import FlexContainer from '../../containers/FlexContainer';

const defaultColours = {
    colour: '#607D8B',
    textColour: '#FFFFFF'
}
export default function Tag({tagId, setReload, tagDelete, allowDelete}) {
    const [tag, setTag] = useState({});
    const [editTagName, setEditTagName] = useState('');
    const { ref, isComponentVisible, setIsComponentVisible } = useVisible(false);
    const config = {'Content-Type': 'application/json'};

    useEffect(() => {
        updateTag();
    }, [tagId]);

    useEffect(() => {
        updateTag();
    });
    
    const updateTag = () => {
        axios.get(`/tag/details/${tagId}`, config)
            .then(res => res.data)
            .then((data) => setTag(data.tag))
            .catch(error => console.log("Crashed"));
        
    }

    const handleDelete = () => {
        tagDelete(tagId);
        setReload(true);
    }

    const editTag = (body) => {
        axios.put(`/tag/edit/`, body, config)
            .then(res => res.data)
            .then(() => setReload(true))
    }

    const handleColourChange = (colour, textColour) => {
        editTag({tagId, ...tag, colour, textColour});
    }

    const handleNameChange = () => {
        if (editTagName !== "") {
            editTag({tagId, ...tag, tagName: editTagName});
        }
    }

    const handleClick = (e) => {
        e.stopPropagation();
        setIsComponentVisible(true);
    }

    return (
        <WrapperContainer onClick={e => e.stopPropagation()}>
            {!isComponentVisible
                ? (
                    <TagStyle justifyContent="space-evenly" tag={tag} onClick={handleClick} Mouse>
                        <Typography noWrap={true}>
                            {tag.tagName}
                        </Typography>
                        {allowDelete != false && 
                            <CloseStyle tag={tag} onClick={handleDelete}>
                                <CloseIcon/>
                            </CloseStyle>
                        }
                        
                    </TagStyle>
                )
                : ( <>
                        <div ref={ref}>
                            <TagInputStyle tag={tag}
                                placeholder={tag.tagName}
                                value={editTagName}
                                onChange={(e) => setEditTagName(e.target.value)}
                                onBlur={handleNameChange}
                            />
                            <EditTagForm tag={tag} colourChange={handleColourChange}/>
                        </div>
                    </>
                )
            }
        </WrapperContainer>
    )
}

const WrapperContainer = styled('div')({
    position: 'relative',
})
const TagStyle = styled(FlexContainer)(({tag}) => ({
    color: tag.textColour ? tag.textColour : defaultColours.textColour,
    backgroundColor: tag.colour ? tag.colour : defaultColours.colour,
    padding: '0.3em 1em',
    marginRight: '10px',
    borderRadius: '40px',
    minWidth: '120px',
    maxWidth: '150px',
    textAlign: 'center',
}));

const TagInputStyle = styled('input')(({tag}) => ({
    '&': {
        color: tag.textColour ? tag.textColour : defaultColours.textColour,
        backgroundColor: tag.colour ? tag.colour : defaultColours.colour,
        padding: '0.3em 1em',
        marginRight: '10px',
        borderRadius: '40px',
        maxWidth: '120px',
        textAlign: 'center',
        fontSize: 'inherit',
    }, 
    '&::placeholder': {
        color: tag.textColour ? tag.textColour : defaultColours.textColour,
        opacity: 0.5
    }
}));

const CloseStyle = styled(IconButton)(({tag}) => ({
    '&': {
        marginLeft: '5px',
        padding: '5px'
    },
    '& svg': {
        width: '15px',
        height: '15px',
        color: tag.textColour ? tag.textColour : defaultColours.textColour,
    }
}))

