import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Button from '../buttons/Button';
import TextInput from '../form/TextInput';
import FormGrid from '../form/FormGrid';
import Select from '../form/Select';
import FlexContainer from '../../containers/FlexContainer';
import Textarea from '../form/TextArea';
import TagInput from '../tag/TagInput';
import TagSelect from '../tag/TagSelect';
const statusOptions = [
    {name: 'To Do', value: 'to-do', colour: '#FFFA7D'},
    {name: 'Doing', value: 'doing', colour: '#FFC979'},
    {name: 'Completed', value: 'completed', colour: '#91EB82'},
]
export default function TaskForm({ submit, tagSubmit }) {
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
        if (name === '') {
            alert("Name cannot be an empty string");
        } else {
            
        }
    }

    const handleTagSubmit = () => updateTags();

    return (
        <form onSubmit={e => e.preventDefault()}>
            <FormGrid>
                <label htmlFor="new-task-name-form">Task Name</label>
                <TextInput id="new-task-name-form" value={name}
                    placeholder="Task Name"
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="new-task-status-form">Status</label>
                <Select id="new-task-status-form"
                    options={statusOptions}
                    value={status}
                    setValue={setStatus}
                    colour='#5C5C5C'
                />
                {console.log(tags)}
                <label htmlFor="new-task-tags-form">Tags</label>
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

                <label htmlFor="new-task-description-form">Description</label>
            </FormGrid>
            <Textarea id="new-task-description-form"
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={3}
                hasMarginTop={true}
            />
            <FlexContainer centreHorizontal={true}>
                <Button type="submit" hasMarginTop={true} colour="blue"
                    sx={{width: 100, borderRadius: '10px'}}
                    onSubmit={handleSubmit}
                >
                    Create
                </Button>
            </FlexContainer>
        </form>
    )
}