// Taken from: https://github.com/denoland/deno_std/blob/0.145.0/collections/union.ts
// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

/**
 * Returns all distinct elements that appear in any of the given arrays.
 *
 * Example:
 *
 * ```ts
 * const soupIngredients = ['Pepper', 'Carrots', 'Leek'];
 * const saladIngredients = ['Carrots', 'Radicchio', 'Pepper'];
 * const shoppingList = easy.array.union(soupIngredients, saladIngredients);
 * ```
 */
 export function union<T>(...arrays: (readonly T[])[]): T[] {
	const set = new Set<T>();
	
	for (const array of arrays) {
		for (const element of array) {
		set.add(element);
		}
	}
	
	return Array.from(set);
}
