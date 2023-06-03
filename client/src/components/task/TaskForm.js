import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Button from '../buttons/Button';
import Label from '../form/Label';
import TextInput from '../form/TextInput';
import FormGrid from '../form/FormGrid';
import FlexContainer from '../../containers/FlexContainer';
import Textarea from '../form/TextArea';
import TagInput from '../tag/TagInput';
import TagSelect from '../tag/TagSelect';
import { statusOptions } from '../utility/statusTypes';
import StatusSelect from '../status/StatusSelect';

export default function TaskForm({ submit}) {
    const [name, setName] = useState('');
    const [status, setStatus] = useState(0);
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState(0);
    const config = {'Content-Type': 'application/json'};
    useEffect(() => {
        updateTags();
    }, []);

    const updateTags = () => {
        axios.get(`/tags/list`, config)
            .then(res => res.data)
            .then(data => setTags(data.tags));
    }
    const handleSubmit = () => {
        if (submit(name, statusOptions[status].value, tags, description)) resetForm();
    }

    const resetForm = () => {
        setName('');
        setDescription('');
        setStatus(0);
        setTag(0);
    }

    const handleTagSubmit = () => updateTags();

    return (
        <form onSubmit={e => e.preventDefault()}>
            <FormGrid>
                <Label htmlFor="new-task-name-form">Task Name</Label>
                <TextInput id="new-task-name-form" value={name}
                    placeholder="Task Name"
                    onChange={e => setName(e.target.value)}
                />
                <Label htmlFor="new-task-status-form">Status</Label>
                <StatusSelect id="new-task-status-form"
                    value={status}
                    setValue={setStatus}
                />
                <Label htmlFor="new-task-tags-form">Tags</Label>
                {tags.length > 0 
                    ? (
                        <TagSelect id="new-task-tags-form"
                            tags={tags}
                            tag={tag}
                            setTag={setTag}
                        />
                    ) 
                    : <TagInput tagSubmit={handleTagSubmit}/>
                }

                <Label htmlFor="new-task-description-form">Description</Label>
            </FormGrid>
            <Textarea id="new-task-description-form"
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={3}
                hasMarginTop={true}
            />
            <FlexContainer justifyContent="center">
                <Button type="submit" hasMarginTop={true} colour="blue"
                    sx={{width: 100, borderRadius: '10px'}}
                    onClick={handleSubmit}
                >
                    Create
                </Button>
            </FlexContainer>
        </form>
    )
}