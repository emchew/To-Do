import { Tag } from "./tag/tag";
import { Task } from "./task/task";

type Data = {
    tasks: Task[],
    tags: Tag[],
}

let data: Data = {
    tasks: [],
    tags: [],
}

function getData(): Data {
    return data;
}

function setData(newData: Data) {
    data = newData;
}

export { getData, setData }