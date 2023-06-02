import { clear } from "./utility";
import { taskCreate } from "../src/task/index";
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