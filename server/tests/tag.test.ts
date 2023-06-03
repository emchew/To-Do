import { clear } from "../tests/utility";
import { tagCreate, tagDelete, tagDetails, tagEdit, tagsList } from "../src/tag";

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

describe("Testing tag/details", () => {
    describe("Error cases", () => {
        test("Throws error when tagId is not valid", () => {
            expect(() => tagDetails("id")).toThrow(Error);
        });
    }) 
    describe("Success Cases", () => {
        test("Returns all details about a tag", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
            expect(tagDetails(tagId)).toStrictEqual({
                tag: {
                    tagName: tag.tagName,
                    colour: tag.colour,
                    textColour: tag.textColour
                }
            });
        });
    }) 
});

describe("Testing tag/edit", () => {
    describe("Error cases", () => {
        test("Throws error when tagId is invalid", () => {
            expect(() => tagEdit("", tag.tagName, tag.colour, tag.textColour)).toThrow(Error);
        });
        test("Throws error when tagName is an empty string", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour)
            expect(() => tagEdit(tagId, "", tag.colour, tag.textColour)).toThrow(Error);
        });
        test("Throws error when tagName is an empty string", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour)
            expect(() => tagEdit(tagId, "", tag.colour, tag.textColour)).toThrow(Error);
        });

        test("Tag name already exists and is not the same as the old tagName", () => {
            const tagName2 = "New tag";
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour)
            tagCreate(tagName2, tag.colour, tag.textColour).tagId;
            expect(() => tagEdit(tagId, tagName2, tag.colour, tag.textColour)).toThrow(Error);
        });

        test("Colour is not a valid hex code (incorrect symbol)", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour)
            expect(() => tagEdit(tagId, tag.tagName, '#', tag.textColour)).toThrow(Error);
        });

        test("TextColour is not a valid hex code", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour)
            expect(() => tagEdit(tagId, tag.tagName, tag.colour, 'ab')).toThrow(Error);
        });
    })
    describe("Success cases", () => {
        test("Changes tagName", () => {
            const newTagName = "new Tagname";
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour)
            tagEdit(tagId, newTagName, tag.colour, tag.textColour);
            expect(tagsList()).toStrictEqual({
                tags: [
                    {
                        tagId,
                        tagName: newTagName, 
                        colour: tag.colour,
                        textColour: tag.textColour
                    }
                ]
            });
        });

        test("Does not throw an error when tag name is the same as old", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour)
            expect(() => tagEdit(tagId, tag.tagName, tag.colour, tag.textColour)).not.toThrow(Error);
            expect(tagsList()).toStrictEqual({
                tags: [
                    {
                        tagId,
                        tagName: tag.tagName, 
                        colour: tag.colour,
                        textColour: tag.textColour
                    }
                ]
            });
        });
    })
});


describe("Testing tag/delete", () => {
    describe("Error cases", () => {
        test("Throws error when tagId is invalid", () => {
            expect(() => tagDelete("tagId")).toThrow(Error);
        });
    })

    describe("Success case", () => {
        test("Deletes tags", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
            expect(() => tagDelete(tagId)).not.toThrow(Error);
            expect(tagsList()).toStrictEqual({tags : []});
        });

        test("Deletes if there are multiple tags", () => {
            const tagName2 = "keep";
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
            const tagId2 = tagCreate(tagName2, tag.colour, tag.textColour).tagId;
            const tagId3 = tagCreate("to delete", tag.colour, tag.textColour).tagId;
            expect(() => tagDelete(tagId3)).not.toThrow(Error);
            expect(tagsList()).toStrictEqual(
                {tags : [
                    {
                        tagId: tagId2,
                        tagName: tagName2,
                        colour: tag.colour,
                        textColour: tag.colour
                    },
                    {
                        tagId,
                        tagName: tag.tagName,
                        colour: tag.colour,
                        textColour: tag.colour
                    },
                ]
            });
            expect(() => tagDelete(tagId2)).not.toThrow(Error);
            expect(tagsList()).toStrictEqual(
                {tags : [
                    {
                        tagId,
                        tagName: tag.tagName,
                        colour: tag.colour,
                        textColour: tag.colour
                    },
                ]
            });
        });
    })
});
