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