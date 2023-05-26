import { createTask } from './task';
import { checkValidTags, Tag } from '../tag/tag';
import { checkTaskStatus } from '../status/status';
import { listTasks } from "./tasks"
import { v4 as uuidv4 } from 'uuid'; 

function taskCreate(taskName: String, status: String, tags: Tag[], description: String) {
    if (taskName == '') {
        throw Error(`Invalid task name ${taskName}`);
    } else if (!checkTaskStatus(status)) {
        throw Error(`Invalid status ${status}`);
    } else if (!checkValidTags(tags)) {
        throw Error (`Invalid tags`);
    }
    let taskId = uuidv4();
    createTask(taskId, taskName, tags, status, description);
    return { taskId };
}

/** List tasks from most recent first
 * 
 * @returns { tasks }
 */

function tasksList() {
    return { tasks: listTasks() };
}   

export { taskCreate, tasksList }