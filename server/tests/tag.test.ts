import { clear } from "../tests/utility";
import { tagCreate } from "../src/tag";

const tag = {
    tagName: "Tag",
    colour: "#AA33FF",
    textColour: "#AA33FF"
}

beforeEach(() => {
    clear();
})

describe("Testing tag/create", () => {
    describe("Error cases", () => {
        test("Throws error when tagName is an empty string", () => {
            expect(() => tagCreate("", tag.colour, tag.textColour)).toThrow(Error);
        });

        test("Throws error if tagName already exists", () => {
            expect(() => tagCreate(tag.tagName, tag.colour, tag.textColour)).not.toThrow(Error);
            expect(() => tagCreate(tag.tagName, tag.colour, tag.textColour)).toThrow(Error);
        });

        test("Colour is not a valid hex code", () => {
            expect(() => tagCreate(tag.tagName, "ab", tag.textColour)).toThrow(Error);
        });

        test("Colour is not a valid hex code", () => {
            expect(() => tagCreate(tag.tagName, "#", tag.textColour)).toThrow(Error);
        });

        test("Colour is not a valid hex code (missing hashtag)", () => {
            expect(() => tagCreate(tag.tagName, "abcdef", tag.textColour)).toThrow(Error);
        });
        
        test("Colour is not a valid hex code (too many characters)", () => {
            expect(() => tagCreate(tag.tagName, "#abcdefg", tag.textColour)).toThrow(Error);
        });

        test("Colour is not a valid hex code (incorrect symbol)", () => {
            expect(() => tagCreate(tag.tagName, "#abd-fg", tag.textColour)).toThrow(Error);
        });

        test("Colour is not a valid hex code (incorrect symbol)", () => {
            expect(() => tagCreate(tag.tagName, "#aba afg", tag.textColour)).toThrow(Error);
        });

        test("TextColour is not a valid hex code", () => {
            expect(() => tagCreate(tag.tagName, tag.colour, "ab")).toThrow(Error);
        });
        
    }) 
    describe("Success Cases", () => {
        test("Colour is an empty string", () => {
            expect(tagCreate(tag.tagName, "", tag.textColour)).toStrictEqual({tagId: expect.any(String)});
        });

        test("Expected input", () => {
            expect(tagCreate(tag.tagName, tag.colour, tag.textColour)).toStrictEqual({tagId: expect.any(String)});
        });
    }) 
});