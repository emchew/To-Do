import React, { useState, useEffect } from 'react'
import Button from '../buttons/Button';
import TextInput from '../form/TextInput';
import FormGrid from '../form/FormGrid';
import Select from '../form/Select';
import FlexContainer from '../../containers/FlexContainer';
import Textarea from '../form/TextArea';
const statusOptions = [
    {name: 'To Do', value: 'to-do', colour: '#FFFA7D'},
    {name: 'Doing', value: 'doing', colour: '#FFC979'},
    {name: 'Completed', value: 'completed', colour: '#91EB82'},
]
export default function TaskForm({ submit }) {
    const [name, setName] = useState('');
    const [status, setStatus] = useState(0);
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    // useEffect(() => {
    //     axios.post
    // }, []);
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

                <label htmlFor="new-task-tags-form">Tags</label>
                <Select id="new-task-tags-form"
                    options={statusOptions}
                    value={status}
                    setValue={setStatus}
                    colour='#5C5C5C'
                />

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
                    onSubmit={() => submit()}
                >
                    Create
                </Button>
            </FlexContainer>
        </form>
    )
}