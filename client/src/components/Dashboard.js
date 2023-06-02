import React, { useState, useEffect } from 'react'
import axios from 'axios';

import FlexContainer from '../containers/FlexContainer';
import Tasks from './task/Tasks';

export default function Dashboard({reload, setReload, taskEdit}) {
    const [tasks, setTasks] = useState([]);
    const config = {'Content-Type': 'application/json'};
    useEffect(() => {
        updateTasks();
    }, []);
    useEffect(() => {
       if (reload) {
            updateTasks();
            setReload(false);
       }
    }, [reload]);

    const updateTasks = () => {
        axios.get(`/tasks/list`, config)
            .then(res => res.data)
            .then(data => setTasks(data.tasks));
    }

    return (
        <FlexContainer centreHorizontal={true} id="dashboard-container">
            <Tasks tasks={tasks} taskEdit={taskEdit}/>
        </FlexContainer>
    )
}
