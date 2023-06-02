import { getData, setData } from '../data';

export type Task = {
    taskId: String,
    taskName: String,
    status: String,
    tags: String[],
    description: String
}

export function createTask(taskId: String, taskName: String, tags: String[], status: String, description) {
    let data = getData();
    let task = { taskId, taskName, tags, status, description}
    data.tasks.push(task);
    setData(data);
}

/** Edit a task
 *  Assumes the index is within range of the array of tasks
 */
export function editTask(index: number, taskName: String, status: String, tags: String[], description) {
    let data = getData();
    let task = data.tasks[index];
    task = {
        ...task,
        taskName,
        tags,
        status,
        description
    };
    data.tasks[index] = task;
    setData(data);
}

export function getTaskIndex(taskId: String): number {
    let tasks = getData().tasks;
    return tasks.findIndex(task => task.taskId === taskId);
}