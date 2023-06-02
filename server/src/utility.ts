/** Check if a string is of hexadecimal value
 * 
 * @param  {String} hexValue 
 * @returns { boolean }
 */
function checkHexColour(hexValue: String) : boolean {
    let r = /^#[0-9A-fa-f]{6}$/;
    if (hexValue.match(r)) {
        return true;
    }
    return false;
}

export { checkHexColour }