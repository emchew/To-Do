import { getData } from "../data";
import { Task } from "../task/task";

/** List tasks from most recent first
 * 
 * @returns { Task[] }
 */

function listTasks() {
    let tasks: Task[] = getData().tasks;
    return tasks.reverse();
}

export { listTasks }