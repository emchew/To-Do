import { getData } from "../data";
import { Tag } from "../tag/tag";

/** List tasks from most recent first
 * 
 * @returns { Task[] }
 */

function listTags() {
    let tags: Tag[] = getData().tags;
    return tags.reverse();
}

export { listTags }