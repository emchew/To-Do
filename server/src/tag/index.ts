import { getData } from "../data";
import { createTag, editTag, deleteTag, checkValidTagName, getTagIndex } from "./tag";
import { v4 as uuidv4 } from "uuid";
import { checkHexColour } from "../utility";
import { listTags } from "../tag/tags";

/** Creates a custom tag with a chosen hexcode colour.
 *  @param { String } tagName
 *  @param { String } colour
 *  @returns { tagId } 
 */
export function tagCreate(tagName: String, colour: String, textColour: String) {
    if (tagName === "") {
        throw Error("Tag name is an empty string");
    } else if (checkValidTagName(tagName)) {
        throw Error("Tag name already exists");
    } else if (!checkHexColour(colour) && colour !== '') {
        throw Error("Colour is not a valid hex code");
    } else if (!checkHexColour(textColour) && textColour !== '') {
        throw Error("Colour is not a valid hex code");
    }
    let tagId = uuidv4();
    createTag(tagId, tagName, colour, textColour);
    return { tagId };
}

/** Creates a custom tag with a chosen hexcode colour.
 *  @param { String } tagName
 *  @param { String } colour
 *  @returns { tagId } 
 */
export function tagEdit(tagId: String, tagName: String, colour: String, textColour: String) {
    let index = getTagIndex(tagId);
    if (index === -1) {
        throw Error("TagId is invalid");
    } else if (tagName === "") {
        throw Error("Tag name is an empty string");
    } 
    const tag = getData().tags[index];
    if (checkValidTagName(tagName) && tag.tagName !== tagName) {
        throw Error("Tag name already exists");
    } else if (!checkHexColour(colour) && colour !== '') {
        throw Error("Colour is not a valid hex code");
    } else if (!checkHexColour(textColour) && textColour !== '') {
        throw Error("Colour is not a valid hex code");
    }
    
    editTag(index, tagName, colour, textColour);
}


/** Creates a custom tag with a chosen hexcode colour.
 *  @param { String } tagName
 *  @param { String } colour
 *  @returns { tagId } 
 */
export function tagDelete(tagId: String) {
    let index = getTagIndex(tagId);
    if (index === -1) {
        throw Error("TagId is invalid");
    }
    
    deleteTag(index);
}

/** List tags from most recent first
 * 
 * @returns { tags }
 */

export function tagsList() {
    return { tags: listTags() };
}   