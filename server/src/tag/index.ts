import { createTag, checkValidTag } from "./tag";
import { listTags } from "./tags";
import { checkHex } from "../utility";
import { v4 as uuidv4 } from "uuid";

/** Creates a custom tag with a chosen hexcode colour.
 *  @param { String } tagName
 *  @param { String } colour
 *  @returns { tagId } 
 */
function tagCreate(tagName: String, colour: String) {
    if (tagName === "") {
        throw Error("Tag name is an empty string");
    } else if (checkValidTag(tagName)) {
        throw Error("Tag name already exists");
    } else if (!checkHex(colour) ) {
        throw Error("Colour is not a valid hex code");
    }
    let tagId = uuidv4();
    createTag(tagId, tagName, colour);
    return { tagId };
}

/** List tasks from most recent first
 * 
 * @returns { tasks }
 */

function tagsList() {
    return { tags: listTags() };
}   

export { tagCreate, tagsList }