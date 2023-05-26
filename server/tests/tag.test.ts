import { clear } from "./utility";
import { tagCreate } from "../src/tag";

const tagName = "Tag";
const colour = "AA33FF";

beforeEach(() => {
    clear();
})

describe("Testing tag/create", () => {
    describe("Error cases", () => {
        test("Throws error when tagName is an empty string", () => {
            expect(() => tagCreate("", colour)).toThrow(Error);
        });

        test("Throws error if tagName already exists", () => {
            tagCreate(tagName, colour);
            expect(() => tagCreate(tagName, colour)).toThrow(Error);
        });

        test("Colour is not a valid hex code (empty string)", () => {
            expect(() => tagCreate(tagName, "")).toThrow(Error);
        });

        test("Colour is not a valid hex code", () => {
            expect(() => tagCreate(tagName, "ab")).toThrow(Error);
        });
        
    }) 
});