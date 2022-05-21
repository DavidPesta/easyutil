export function trim(str: string, ch: string): string {
	let start = 0;
	let end = str.length;
	
	while(start < end && str[start] === ch) {
		start++;
	}
	
	while(end > start && str[end - 1] === ch) {
		end--;
	}
	
	return (start > 0 || end < str.length) ? str.substring(start, end) : str;
}

export function ltrim(str: string, ch: string): string {
	let start = 0;
	const end = str.length;
	
	while(start < end && str[start] === ch) {
		start++;
	}
	
	return start > 0 ? str.substring(start) : str;
}

export function rtrim(str: string, ch: string): string {
	const start = 0;
	let end = str.length;
	
	while(end > start && str[end - 1] === ch) {
		end--;
	}
	
	return end < str.length ? str.substring(start, end) : str;
}

export function mtrim(str: string, chars: string[]): string {
	let start = 0;
	let end = str.length;
	
	while(start < end && chars.indexOf(str[start]) >= 0) {
		start++;
	}
	
	while(end > start && chars.indexOf(str[end - 1]) >= 0) {
		end--;
	}
	
	return (start > 0 || end < str.length) ? str.substring(start, end) : str;
}

export function lmtrim(str: string, chars: string[]): string {
	let start = 0;
	const end = str.length;
	
	while(start < end && chars.indexOf(str[start]) >= 0) {
		start++;
	}
	
	return start > 0 ? str.substring(start) : str;
}

export function rmtrim(str: string, chars: string[]): string {
	const start = 0;
	let end = str.length;
	
	while(end > start && chars.indexOf(str[end - 1]) >= 0) {
		end--;
	}
	
	return end < str.length ? str.substring(start, end) : str;
}

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

export function wtrim(str: string, word: string): string {
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
}

export function lwtrim(str: string, word: string): string {
	let start = 0;
	const end = str.length;
	
	while (start < end && hasSubstringAt(str, word, start)) {
		start += word.length;
	}
	
	return start > 0 ? str.substring(start) : str;
}

export function rwtrim(str: string, word: string): string {
	const start = 0;
	let end = str.length;
	const len = word.length;
	
	while (end > start && hasSubstringAt(str, word, end - len)) {
		end -= word.length
	}
	
	return end < str.length ? str.substring(start, end) : str;
}
