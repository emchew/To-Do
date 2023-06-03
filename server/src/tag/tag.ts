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

/** Get the details about a tag
 * Assumes tagIndex is within range of the tag array
 */
export function getTag(tagIndex: number) {
    let data = getData();
    let tag = data.tags[tagIndex];
    return {
        tagName: tag.tagName,
        colour: tag.colour,
        textColour: tag.textColour
    }
}


/** Edit a tag
 * Assumes tagIndex is within range of the tag array
 */
export function editTag(tagIndex: number, tagName: String, colour: String, textColour: String) {
    let data = getData();
    let tag = data.tags[tagIndex];
    tag = {...tag, tagName, colour, textColour};
    data.tags[tagIndex] = tag;
    setData(data);
}


/** Delete a tag with a specific tagIndex
 * Assumes tagIndex is within range of the tag array
**/
export function deleteTag(tagIndex: number) {
    let data = getData();
    data.tags.splice(tagIndex, 1);
    setData(data);
}

/** Check if all tags in a list of tags exist
 *  
 * @param tags 
 * @returns 
 */
export function checkValidTags(tags: String[]): boolean {
    for (let tag of tags) {
        if (getTagIndex(tag) === -1) {
            return false;
        }
    }
    return true;
}

export function getTagIndex(tagId: String) : number {
    return getData().tags.findIndex(tag => tag.tagId === tagId);
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