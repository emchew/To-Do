import { Tag } from "../tag/tag"
import { getData, setData } from '../data';

type Task = {
    taskId: String,
    taskName: String,
    status: String,
    tags: Tag[],
    description: String
}


/** Create a task
 * 
 * @param { String } taskId 
 * @param { String } taskName 
 * @param { Tag[] }tags 
 * @param { String } status 
 * @param { String } description 
 */
function createTask(taskId: String, taskName: String, tags: Tag[], status: String, description) {
    let data = getData();
    let task: Task = {
        taskId: taskId,
        taskName: taskName,
        status: status,
        tags: tags,
        description: description
    }
    data.tasks.push(task);
    setData(data);
}

export { Task, createTask }