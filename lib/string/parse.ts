export default {
	number: (str: string): number => {
		if (str.trim() === "") return NaN;
		if (str === "Infinity") return NaN;
		if (str === "-Infinity") return NaN;
		return Number(str);
	},
	
	integer: (str: string): number => {
		if (str.trim() === "") return NaN;
		if (str === "Infinity") return NaN;
		if (str === "-Infinity") return NaN;
		return Math.round(Number(str));
	},
	
	boolean: (str: string): boolean => {
		const lowerStr = str.toLowerCase();
		
		if (lowerStr === "true" || lowerStr === "t" || str === "1") {
			return true;
		}
		
		return false;
	}
}
