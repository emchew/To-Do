import { getData, setData } from '../data';

export type Tag = {
    tagId: String,
    tagName: String,
    colour: String
    textColour: String
}

/** Creates a tag with a specific tagName, given tagName doesn't
 * already exist
 *  
 */
export function createTag(tagId: String, tagName: String, colour: String, textColour: String) {
    let data = getData();
    let tag: Tag = { tagId, tagName, colour, textColour };
    data.tags.push(tag);
    setData(data);
}

/** Check if all tags in a list of tags exist
 *  
 * @param tags 
 * @returns 
 */
export function checkValidTags(tags: String[]): boolean {
    for (let tag of tags) {
        if (!checkValidTagId(tag)) {
            return false;
        }
    }
    return true;
}

function checkValidTagId(tagId: String): boolean {
    let tags: Tag[] = getData().tags;
    for (let tag of tags) {
        if (tag.tagId === tagId) {
            return true;
        }
    }
    return false;
}

/** Check if a tagName exists in the database
 *  @param { String } tagName
 *  @returns { boolean } depending on whether the tagName exists
 */
export function checkValidTagName(tagName: String): boolean {
    let tags: Tag[] = getData().tags;
    for (let tag of tags) {
        if (tag.tagName === tagName) {
            return true;
        }
    }
    return false;
}