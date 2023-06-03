import { clear } from "./utility";
import { taskCreate, taskEdit, tasksList } from "../src/task/index";
import { taskStatus } from "../src/status/status";
import { tagCreate } from "../src/tag";

const tag = {
    tagName: "Tag",
    colour: "",
    textColour: ""
}

const task = {
    taskName: "New task!",
    description: "This is a description.",
    status: taskStatus.todo,
}
beforeEach(() => {
    clear();
})

describe("Testing task/create", () => {
    describe("Error cases", () => {
        test("Throws error when taskName is an empty string", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
            expect(() => taskCreate("", task.status, [tagId], task.description)).toThrow(Error);
        });

        test("Throws error when status is not a valid status", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
            expect(() => taskCreate(task.taskName, "", [tagId], task.description)).toThrow(Error);
        });

        test("Throws error when status is not a valid status", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
            expect(() => taskCreate(task.taskName, "to_do", [tagId], task.description)).toThrow(Error);
        });

        test("A tag in the array of tags is not a valid tag", () => {
            expect(() => taskCreate(task.taskName, taskStatus.todo, ["imposter"], task.description)).toThrow(Error);
        });
    }) 

    describe("Success cases", () => {
        test("Empty tag array", () => {
            expect(taskCreate(task.taskName, taskStatus.todo, [], task.description))
                .toStrictEqual({taskId: expect.any(String)});
        });

        test("Valid tags", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
            expect(taskCreate(task.taskName, taskStatus.todo, [tagId], task.description))
                .toStrictEqual({taskId: expect.any(String)});
        });

        test("Doing status", () => {
            expect(taskCreate(task.taskName, taskStatus.doing, [], task.description))
                .toStrictEqual({taskId: expect.any(String)});
        });

        test("Completed status", () => {
            expect(taskCreate(task.taskName, taskStatus.completed, [], task.description))
                .toStrictEqual({taskId: expect.any(String)});
        });

        test("Description is an empty string", () => {
            expect(taskCreate(task.taskName, taskStatus.completed, [], ''))
                .toStrictEqual({taskId: expect.any(String)});
        });
    })
});


describe("Testing task/edit", () => {
    describe("Error cases", () => {
        test("Throws error when taskId is invalid", () => {
            expect(() => taskEdit("invalid", task.taskName, task.status, [], task.description)).toThrow(Error);
        });
        test("Throws error when status is invalid", () => {
            let { taskId } = taskCreate(task.taskName, taskStatus.completed, [], task.description);
            expect(() => taskEdit(taskId, task.taskName, "hehe", [], task.description)).toThrow(Error);
        });
        test("Throws error when status is invalid", () => {
            let { taskId } = taskCreate(task.taskName, taskStatus.completed, [], task.description);
            expect(() => taskEdit(taskId, task.taskName, "to_do", [], task.description)).toThrow(Error);
        });
    })
    describe("Success cases", () => {
        test("Editing status", () => {
            let { taskId } = taskCreate(task.taskName, taskStatus.todo, [], task.description);
            taskEdit(taskId, task.taskName, taskStatus.completed, [], task.description);
            expect(tasksList()).toStrictEqual({
                tasks: [
                    {
                        taskId,
                        taskName: task.taskName,
                        status: taskStatus.completed, 
                        tags: [], 
                        description: task.description,
                    }
                ]
            })
        });
        test("Adding a tag", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
            let { taskId } = taskCreate(task.taskName, taskStatus.completed, [], task.description);
            taskEdit(taskId, task.taskName, task.status, [tagId], task.description);
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
        test("Adding multiple tags", () => {
            const tagName2 = "tag 2";
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
            const tagId2 =  tagCreate(tagName2, tag.colour, tag.textColour).tagId;
            let { taskId } = taskCreate(task.taskName, taskStatus.completed, [tagId], task.description);
            taskEdit(taskId, task.taskName, task.status, [tagId, tagId2], task.description);
            expect(tasksList()).toStrictEqual({
                tasks: [
                    {
                        taskId,
                        taskName: task.taskName,
                        status: task.status, 
                        tags: [tagId, tagId2], 
                        description: task.description,
                    }
                ]
            })
        });
    })
});