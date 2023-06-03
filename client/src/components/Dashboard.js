import React, { useState, useEffect } from 'react'
import axios from 'axios';

import FlexContainer from '../containers/FlexContainer';
import Tasks from './task/Tasks';

export default function Dashboard({reload, setReload, taskEdit}) {
    const [tasks, setTasks] = useState([]);
    const [tags, setTags] = useState([]);
    const config = {'Content-Type': 'application/json'};
    useEffect(() => {
        updateTasks();
        updateTags();
    }, []);
    useEffect(() => {
       if (reload) {
            updateTasks();
            updateTags();
            setReload(false);
       }
    }, [reload]);

    const updateTasks = () => {
        axios.get(`/tasks/list`, config)
            .then(res => res.data)
            .then(data => setTasks(data.tasks));
    }
    const updateTags = () => {
        axios.get(`/tags/list`, config)
            .then(res => res.data)
            .then(data => setTags(data.tags));
    }

    return (
        <FlexContainer justifyContent="center" sx={dashboardContainerStyle}>
            <Tasks tasks={tasks} taskEdit={taskEdit} allTags={tags} updateTags={updateTags} setReload={setReload}/>
        </FlexContainer>
    )
}

const dashboardContainerStyle = {
    height: 'fit-content',
    padding: '1em 0em'
}
