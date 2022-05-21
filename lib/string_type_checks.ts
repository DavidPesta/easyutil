// isString
// isNumberString
// isFloatString
// isIntegerString
// isBooleanString

/**
 * NOTE: This function is pointless if you are using TypeScript with "string" type hints.
 * Only use isString if some edge case causes you to work with an undefined type.
 */
// deno-lint-ignore no-explicit-any
export function isString(str: any): boolean {
	if (str instanceof String) throw new Error("The String type should not be used. It is not a 'string' type, which is confusing. It leads to bugs, it is discouraged in the industry, and it should not have been added to JavaScript.");
	return typeof str === "string";
}

export function isNumberString(str: string): boolean {
	str = str.replaceAll(",", "");
	str = str.replaceAll(".", "");
	str = str.replaceAll(" ", "");
	str = str.replaceAll("_", "");
	if (str === "") return false;
	if (str === "Infinity") return false;
	if (+str !== +str) return false;
	if (isNaN(parseFloat(str))) return false;
	return true;
}
