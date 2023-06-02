import React, { useState } from 'react';
import StatusSelect from '../Status/StatusSelect';
import Tags from '../Tag/Tags';
// import Status from './Status'

// import '../../css/task.css';

export default function Task({task, submitTag}) {
  const [status, setStatus] = useState(0);

  return (
    <div className="task-container">

      {/* <div className="task-status">
        <Status status={props.status}/>
      </div>
       */}

       <StatusSelect status={status} setStatus={setStatus}/>

      <div className="task-due">
        <b>{task.due}</b>
      </div>
      <div className="task-name">
        {task.taskName}
      </div>
      
      <Tags tags={task.tags} submit={submitTag}/>
      {/* <div className="tags-container">
        {props.tags.map((tag) => 
          <Tag key={tag.tagId} tagName={tag.tagName} colour={tag.colour} />
        )}
      </div> */}
     
    </div>
  )
}
