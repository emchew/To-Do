import { Tag } from "./tag";
import { getData } from "../data";
/** List tasks from most recent first
 * 
 * @returns { Task[] }
 */

export function listTags() {
    let tags: Tag[] = getData().tags;
    return tags.reverse();
}