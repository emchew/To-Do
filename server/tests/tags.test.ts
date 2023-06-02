import { tagCreate, tagsList } from "../src/tag";
import { clear } from "../tests/utility";

const tag = {
    tagName: "Tag",
    colour: "#abCde4",
    textColour: "#abd31d"
}

const tag2 = {
    tagName: "Tag 2",
    colour: "#abCde4",
    textColour: "#abd31d"
}

const tag3 = {
    tagName: "Tag 3",
    colour: "",
    textColour: ""
}
beforeEach(() => {
    clear();
})


describe("Testing tags/list", () => {
    describe("Correctly lists tags", () => {
        test("No tags, returns an empty array", () => {
            expect(tagsList()).toStrictEqual({tags: []});
        });

        test("1 tag returns an array of length 1", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
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

        test("2 tags, returns in reverse order", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
            const tagId2 = tagCreate(tag2.tagName, tag2.colour, tag2.textColour).tagId;
            expect(tagsList()).toStrictEqual({
                tags: [
                    {
                        tagId: tagId2,
                        tagName: tag2.tagName,
                        colour: tag2.colour,
                        textColour: tag2.textColour
                    },
                    {
                        tagId,
                        tagName: tag.tagName,
                        colour: tag.colour,
                        textColour: tag.textColour
                    }
                ]
            });
        });

        test("3 tags, returns in reverse order", () => {
            const { tagId } = tagCreate(tag.tagName, tag.colour, tag.textColour);
            const tagId2 = tagCreate(tag2.tagName, tag2.colour, tag2.textColour).tagId;
            const tagId3 = tagCreate(tag3.tagName, tag3.colour, tag3.textColour).tagId;
            expect(tagsList()).toStrictEqual({
                tags: [
                    {
                        tagId: tagId3,
                        tagName: tag3.tagName,
                        colour: tag3.colour,
                        textColour: tag3.textColour
                    },
                    {
                        tagId: tagId2,
                        tagName: tag2.tagName,
                        colour: tag2.colour,
                        textColour: tag2.textColour
                    },
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