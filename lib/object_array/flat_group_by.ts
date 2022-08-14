import easy from "../../mod.ts";

// deno-lint-ignore no-explicit-any
export function flatGroupBy(objArr: Array<Record<string, any>>, key: string): Record<string, Record<string, any>> {
	// return mapValues(groupBy(objArr, x => x[key]), x => x![0]); // x[key] doesn't work
	return easy.objectArray.convertTo.flatKeyedObjects(objArr, key);
}
