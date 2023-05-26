import { Tag } from "./tag/tag";
import { Task } from "./task/task";

type Data = {
    tasks: Task[],
    tags: Tag[],
    //status: String[]
}

let data: Data = {
    tasks: [],
    tags: [],
    //status: 
}

function getData(): Data {
    return data;
}

function setData(newData: Data) {
    data = newData;
}

export { getData, setData }