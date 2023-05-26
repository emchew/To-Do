import { getData, setData } from '../data';
type Tag = {
    tagId: String,
    tagName: String,
    colour: String
}

/** Creates a tag with a specific tagName, given tagName doesn't
 * already exist
 *  
 */
function createTag(tagId: String, tagName: String, colour: String) {
    let data = getData();
    let tag: Tag = {
        tagId: tagId,
        tagName: tagName,
        colour: colour
    }
    data.tags.push(tag);
    setData(data);
}

/** Check if a tagName exists in the database
 *  @param { String } tagName
 *  @returns { boolean } depending on whether the tagName exists
 */
function checkValidTag(tagName: String): boolean {
    let tags: Tag[] = getData().tags;
    for (let tag of tags) {
        if (tag.tagName == tagName) {
            return true;
        }
    }
    return false;
}

/** Check if all tags in a list of tags exist
 *  
 * @param tags 
 * @returns 
 */
function checkValidTags(tags: Tag[]): boolean {
    let isValid = true;
    for (let tag of tags) {
        if (!checkValidTag(tag.tagName)) {
            isValid = false;
        }
    }
    return isValid;
}

export { Tag, createTag, checkValidTags, checkValidTag }