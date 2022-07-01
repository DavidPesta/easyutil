import easy from "../../mod.ts";

// deno-lint-ignore no-explicit-any
export function flatGroupBy(objArr: Array<Record<string, any>>, key: string): Record<string, Record<string, any>> {
	return easy.objectArray.convertTo.flatKeyedObjects(objArr, key);
}
