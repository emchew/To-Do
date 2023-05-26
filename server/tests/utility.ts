import { getData, setData } from "../src/data";

function clear() {
    let data = getData();
    data.tasks = [];
    data.tags = [];
    setData(data);
}

export { clear }