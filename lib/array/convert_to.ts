export default {
	// deno-lint-ignore no-explicit-any
	keyedObjects: (objArr: Array<Record<string, any>>, key: string): Record<string, Record<string, any>> => {
		//return Object.assign({}, ...objects.map(x => ({[x.key]: x})));
		
		// deno-lint-ignore no-explicit-any
		const keyedObjects: Record<string, Record<string, any>> = {};
		
		for (const obj of objArr) {
			keyedObjects[obj[key]] = obj;
		}
		
		return keyedObjects;
	},
	
	// deno-lint-ignore no-explicit-any
	keyedValues: (objArr: Array<Record<string, any>>, key: string, val: string): Record<string, any> => {
		//return Object.assign({}, ...objects.map(x => ({[x.key]: x.val})));
		
		// deno-lint-ignore no-explicit-any
		const keyedValues: Record<string, any> = {};
		
		for (const obj of objArr) {
			keyedValues[obj[key]] = obj[val];
		}
		
		return keyedValues;
	},
}
