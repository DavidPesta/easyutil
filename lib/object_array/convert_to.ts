export default {
	// deno-lint-ignore no-explicit-any
	keyedObjects: (objArr: Array<Record<string, any>>, key: string): Record<string, Array<Record<string, any>>> => {
		// deno-lint-ignore no-explicit-any
		const keyedObjects: Record<string, Array<Record<string, any>>> = {};
		
		for (const obj of objArr) {
			if (keyedObjects[obj[key]] === undefined) keyedObjects[obj[key]] = [];
			keyedObjects[obj[key]].push(obj);
		}
		
		return keyedObjects;
	},
	
	// deno-lint-ignore no-explicit-any
	keyedValues: (objArr: Array<Record<string, any>>, key: string, val: string): Record<string, Array<any>> => {
		// deno-lint-ignore no-explicit-any
		const keyedValues: Record<string, Array<any>> = {};
		
		for (const obj of objArr) {
			if (keyedValues[obj[key]] === undefined) keyedValues[obj[key]] = [];
			keyedValues[obj[key]].push(obj[val]);
		}
		
		return keyedValues;
	},
	
	// deno-lint-ignore no-explicit-any
	keyedObjectsFlat: (objArr: Array<Record<string, any>>, key: string): Record<string, Record<string, any>> => {
		//return Object.assign({}, ...objects.map(x => ({[x.key]: x})));
		
		// deno-lint-ignore no-explicit-any
		const keyedObjectsFlat: Record<string, Record<string, any>> = {};
		
		for (const obj of objArr) {
			keyedObjectsFlat[obj[key]] = obj;
		}
		
		return keyedObjectsFlat;
	},
	
	// deno-lint-ignore no-explicit-any
	keyedValuesFlat: (objArr: Array<Record<string, any>>, key: string, val: string): Record<string, any> => {
		//return Object.assign({}, ...objects.map(x => ({[x.key]: x.val})));
		
		// deno-lint-ignore no-explicit-any
		const keyedValuesFlat: Record<string, any> = {};
		
		for (const obj of objArr) {
			keyedValuesFlat[obj[key]] = obj[val];
		}
		
		return keyedValuesFlat;
	},
}
