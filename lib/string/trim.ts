// Code borrowed from:
// Jason Larke: https://stackoverflow.com/users/1280370/jason-larke
// Stack Overflow answer: https://stackoverflow.com/a/55292366/508558

function hasSubstringAt(str: string, substr: string, pos: number): boolean {
	let idx = 0;
	const len = substr.length;
	
	for (const max = str.length; idx < len; ++idx) {
		if ((pos + idx) >= max || str[pos + idx] != substr[idx]) {
			break;
		}
	}
	
	return idx === len;
}

export default {
	charsBoth: (str: string, chars: string[]): string => {
		let start = 0;
		let end = str.length;
		
		while(start < end && chars.indexOf(str[start]) >= 0) {
			start++;
		}
		
		while(end > start && chars.indexOf(str[end - 1]) >= 0) {
			end--;
		}
		
		return (start > 0 || end < str.length) ? str.substring(start, end) : str;
	},
	
	charsLeft: (str: string, chars: string[]): string => {
		let start = 0;
		const end = str.length;
		
		while(start < end && chars.indexOf(str[start]) >= 0) {
			start++;
		}
		
		return start > 0 ? str.substring(start) : str;
	},
	
	charsRight: (str: string, chars: string[]): string => {
		const start = 0;
		let end = str.length;
		
		while(end > start && chars.indexOf(str[end - 1]) >= 0) {
			end--;
		}
		
		return end < str.length ? str.substring(start, end) : str;
	},
	
	wordBoth: (str: string, word: string): string => {
		let start = 0;
		let end = str.length;
		const len = word.length;
		
		while (start < end && hasSubstringAt(str, word, start)) {
			start += word.length;
		}
		
		while (end > start && hasSubstringAt(str, word, end - len)) {
			end -= word.length
		}
		
		return (start > 0 || end < str.length) ? str.substring(start, end) : str;
	},
	
	wordLeft: (str: string, word: string): string => {
		let start = 0;
		const end = str.length;
		
		while (start < end && hasSubstringAt(str, word, start)) {
			start += word.length;
		}
		
		return start > 0 ? str.substring(start) : str;
	},
	
	wordRight: (str: string, word: string): string => {
		const start = 0;
		let end = str.length;
		const len = word.length;
		
		while (end > start && hasSubstringAt(str, word, end - len)) {
			end -= word.length
		}
		
		return end < str.length ? str.substring(start, end) : str;
	}
}
