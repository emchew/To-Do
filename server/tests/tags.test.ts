import { clear } from "./utility";
import { tagCreate, tagsList } from "../src/tag";

const tagName = "tag";
const colour = "AA33FF";

beforeEach(() => {
    clear();
})

describe("Testing tags/list", () => {
    describe("Correctly lists tags", () => {
        test("No tags, returns an empty array", () => {
            expect(tagsList()).toStrictEqual({tags: []})
        });

        test("1 task returns an empty array", () => {
            const { tagId } = tagCreate(tagName, colour);
           
            expect(tagsList()).toStrictEqual({
                tags: [
                    {
                        tagId: tagId,
                        tagName: tagName, 
                        colour: colour
                    }
                ]
            })
        });

        test("2 tags, returns in original order", () => {
            const tagName2 = "tag 2";
            const { tagId } = tagCreate(tagName, colour);
            const tagId2 = tagCreate(tagName2, colour).tagId;
        
            expect(tagsList()).toStrictEqual({
                tags: [
                    {
                        tagId: tagId2,
                        tagName: tagName2, 
                        colour: colour
                    },
                    {
                        tagId: tagId,
                        tagName: tagName, 
                        colour: colour
                    }
                ]
            })
        });

        test("3 tags, returns in reverse order", () => {
            const tagName2 = "tag 2";
            const tagName3 = "tag 3";
            const { tagId } = tagCreate(tagName, colour);
            const tagId2 = tagCreate(tagName2, colour).tagId;
            const tagId3 = tagCreate(tagName3, colour).tagId;
            
            expect(tagsList()).toStrictEqual({
                tags: [
                    {
                        tagId: tagId3,
                        tagName: tagName3, 
                        colour: colour
                    },
                    {
                        tagId: tagId2,
                        tagName: tagName2, 
                        colour: colour
                    },
                    {
                        tagId: tagId,
                        tagName: tagName, 
                        colour: colour
                    }
                ]
            })
        });
    }) 
});