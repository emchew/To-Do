import { taskCreate, tasksList } from "../src/task";
import { tagCreate } from "../src/tag";
import { taskStatus } from "../src/status/status";
import { clear } from "../tests/utility";

const task = {
    taskName: "New task!",
    description: "This is a description.",
    status: taskStatus.todo,
}

const task2 = {
    taskName: "Task 2!",
    description: "Description 2",
    status: taskStatus.completed,
}

const tag = {
    tagName: "Tag",
    colour: "",
    textColour: ""
}

beforeEach(() => {
    clear();
})


describe("Testing tasks/list", () => {
    describe("Correctly lists tasks", () => {
        test("No tasks, returns an empty array", () => {
            expect(tasksList()).toStrictEqual({tasks: []});
        });

        test("1 task returns an array of length 1", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
            const { taskId } = taskCreate(task.taskName, task.status, [tagId], task.description);
            expect(tasksList()).toStrictEqual({
                tasks: [
                    {
                        taskId,
                        taskName: task.taskName,
                        status: task.status, 
                        tags: [tagId], 
                        description: task.description,
                    }
                ]
            })
        });

        test("2 tasks, returns in reverse order", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
            const { taskId } = taskCreate(task.taskName, task.status, [tagId], task.description);
            const  taskId2 = taskCreate(task2.taskName, task2.status, [tagId], task2.description).taskId;
            expect(tasksList()).toStrictEqual({
                tasks: [
                    {
                        taskId: taskId2,
                        taskName: task2.taskName,
                        status: task2.status, 
                        tags: [tagId], 
                        description: task2.description,
                    },
                    {
                        taskId,
                        taskName: task.taskName,
                        status: task.status, 
                        tags: [tagId], 
                        description: task.description,
                    }
                ]
            })
        });

        test("3 tasks, returns in reverse order", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
            const task3 = {taskName: "Task 3", status: taskStatus.completed, tags: [], description: "Anything"};
            const { taskId } = taskCreate(task.taskName, task.status, [tagId], task.description);
            const taskId2 = taskCreate(task2.taskName, task2.status, [tagId], task2.description).taskId;
            const taskId3 = taskCreate(task3.taskName, task3.status, [], task3.description).taskId;
            
            expect(tasksList()).toStrictEqual({
                tasks: [
                    {
                        taskId: taskId3,
                        taskName: task3.taskName,
                        status: task3.status, 
                        tags: [], 
                        description: task3.description,
                    },
                    {
                        taskId: taskId2,
                        taskName: task2.taskName,
                        status: task2.status, 
                        tags: [tagId], 
                        description: task2.description,
                    },
                    {
                        taskId,
                        taskName: task.taskName,
                        status: task.status, 
                        tags: [tagId], 
                        description: task.description,
                    }
                ]
            })
        });
    }) 
});