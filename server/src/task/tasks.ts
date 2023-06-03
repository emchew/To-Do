import { getData } from "../data";
import { Task } from "./task";

/** List tasks from most recent first
 * 
 * @returns { Task[] }
 */
export function listTasks() {
    let tasks: Task[] = [...getData().tasks];
    return tasks.reverse();
}