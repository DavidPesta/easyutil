import easy from "../../mod.ts";

// deno-lint-ignore no-explicit-any
export function groupBy(objArr: Array<Record<string, any>>, key: string): Record<string, Array<Record<string, any>>> {
	return easy.objectArray.convertTo.keyedObjects(objArr, key);
}
