import { createTask, editTask, getTaskIndex } from "./task";
import { listTasks } from "./tasks";
import { checkValidTags } from "../tag/tag";
import { checkTaskStatus } from '../status/status';
import { v4 as uuidv4 } from 'uuid'; 

/** Create a task with optional tags and a description
 * 
 * @param taskName 
 * @param tags  A list of tagIds
 */
export function taskCreate(taskName: String, status: String, tags: String[], description: String) {
    if (taskName == '') {
        throw Error(`Invalid task name ${taskName}`);
    } else if (!checkTaskStatus(status)) {
        throw Error(`Invalid status ${status}`);
    } else if (!checkValidTags(tags) && tags.length !== 0) {
        throw Error (`Invalid tags`);
    }
    let taskId = uuidv4();
    createTask(taskId, taskName, tags, status, description);
    return { taskId };
}

/** Create a task with optional tags and a description
 * 
 * @param taskName 
 * @param tags  A list of tagIds
 */
export function taskEdit(taskId: String, taskName: String, status: String, tags: String[], description: String) {
    let taskIndex = getTaskIndex(taskId);
    if (taskIndex === -1) {
        throw Error(`Invalid taskId`);
    }  else if (taskName == '') {
        throw Error(`Invalid task name ${taskName}`);
    } else if (!checkTaskStatus(status)) {
        throw Error(`Invalid status ${status}`);
    }

    editTask(taskIndex, taskName, status, tags, description);
}

/** List tasks from most recent first
 * 
 * @returns { tasks }
 */

export function tasksList() {
    return { tasks: listTasks() };
}   