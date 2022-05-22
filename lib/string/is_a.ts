// TODO: Add special utility functions to handle different character expressions for decimal
// and thousands place separators. For example, if both the dot and comma are present, the
// rightmost one is the decimal and it must then appear only once--the other one must be in
// the proper thousands place positions. If only one or the other is present, then if it
// appears more than once, it must appear in the proper thousands place positions, but if it
// appears only once, then it could be anywhere. Utilities to help detect number systems, etc.
// Nice article on decimal separators: https://en.wikipedia.org/wiki/Decimal_separator

export default {
	// NOTE: The string check seems pointless if you are using TypeScript with "string" type hints.
	//       However, it might come in handy in edge cases where you work with an undefined type.
	// deno-lint-ignore no-explicit-any
	string: (str: any): boolean => {
		if (str instanceof String) throw new Error("The String type should not be used. It is not a 'string' type, which is confusing. It leads to bugs, it is discouraged in the industry, and it should not have been added to JavaScript.");
		return typeof str === "string";
	},
	
	number: (str: string): boolean => {
		if (+str !== +str) return false;
		const parsed = parseFloat(str);
		if (parsed === Infinity) return false;
		if (isNaN(parsed)) return false;
		if (str.trim() !== str) return false;
		return true;
	},
	
	// WARNING: This function is designed to break. Use easy.string.isA.number instead.
	// Consider, all real numbers qualify as a decimal. For example, the integer 5 is numerically indistinguishable from the decimal 5.0 or 5,0.
	// deno-lint-ignore no-unused-vars
	decimal: (str: string): boolean => {
		throw new Error("Use easy.string.isA.number instead. Consider, all real numbers qualify as a decimal. For example, the integer 5 is numerically indistinguishable from the decimal 5.0 or 5,0.");
	}
}
