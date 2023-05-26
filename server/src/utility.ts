/** Check if a string is of hexadecimal value
 * 
 * @param  {String} hexValue 
 * @returns { boolean }
 */
function checkHex(hexValue: String) : boolean {
    let r = /[0-9A-fa-f]{6}/g;
    if (hexValue.match(r)) {
        return true;
    }
    return false;
}

export { checkHex }