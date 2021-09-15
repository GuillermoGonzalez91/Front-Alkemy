/**
 *
 * @param {*} string type string - main text content
 * @param {*} breakpoint type number - number of paragrapgh lines to split
 * @returns an array of arrays of length of breakpoint
 */
function splitArray(string, breakpoint) {
	const charArray = string.split('.');
	const charArrLength = charArray.length;
	const temp = [];
	for (let i = 0; i < charArrLength; i += breakpoint) {
		temp.push(charArray.slice(i, i + breakpoint));
	}
	return temp;
}

export default splitArray;
