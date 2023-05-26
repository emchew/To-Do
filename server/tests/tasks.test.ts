import { clear } from "./utility";
import { taskCreate, tasksList} from "../src/task";
import { taskStatus } from "../src/status/status";

const taskName = "Task";
const desc = "Description";
const taskStat = taskStatus.todo;

beforeEach(() => {
    clear();
})

describe("Testing tasks/list", () => {
    describe("Correctly lists tasks", () => {
        test("No tasks, returns an empty array", () => {
            expect(tasksList()).toStrictEqual({tasks: []})
        });

        test("1 task returns an empty array", () => {
            const { taskId } = taskCreate(taskName, taskStat, [], desc);
            expect(tasksList()).toStrictEqual({
                tasks: [
                    {
                        taskId: taskId,
                        taskName: taskName, 
                        status: taskStat, 
                        tags: [], 
                        description: desc,
                    }
                ]
            })
        });

        test("2 tasks, returns in reverse order", () => {
            const taskName2 = "task 2";
            const { taskId } = taskCreate(taskName, taskStat, [], desc);
            const taskId2 = taskCreate(taskName2, taskStatus.todo, [], desc).taskId;
        
            expect(tasksList()).toStrictEqual({
                tasks: [
                    {
                        taskId: taskId2,
                        taskName: taskName2, 
                        status: taskStat, 
                        tags: [], 
                        description: desc,
                    },
                    {
                        taskId: taskId,
                        taskName: taskName, 
                        status: taskStat, 
                        tags: [], 
                        description: desc,
                    }
                ]
            })
        });

        test("3 tasks, returns in reverse order", () => {
            const taskName2 = "task 2";
            const taskName3 = "task 3";
            const { taskId } = taskCreate(taskName, taskStat, [], desc);
            const taskId2 = taskCreate("task 2", taskStatus.todo, [], desc).taskId;
            const taskId3 = taskCreate("task 3", taskStatus.todo, [], desc).taskId;
            
            expect(tasksList()).toStrictEqual({
                tasks: [
                    {
                        taskId: taskId3,
                        taskName: taskName3, 
                        status: taskStat, 
                        tags: [], 
                        description: desc,
                    },
                    {
                        taskId: taskId2,
                        taskName: taskName2, 
                        status: taskStat, 
                        tags: [], 
                        description: desc,
                    },
                    {
                        taskId: taskId,
                        taskName: taskName, 
                        status: taskStat, 
                        tags: [], 
                        description: desc,
                    }
                ]
            })
        });
    }) 
});