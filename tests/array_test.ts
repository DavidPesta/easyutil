import easy from "../mod.ts";
import { assertEquals } from "https://deno.land/std@0.145.0/testing/asserts.ts";

Deno.test("easy.array.union", () => {
	const soupIngredients = ['Pepper', 'Carrots', 'Leek'];
	const saladIngredients = ['Carrots', 'Radicchio', 'Pepper'];
	const shoppingList = easy.array.union(soupIngredients, saladIngredients);
	assertEquals(shoppingList, ['Pepper', 'Carrots', 'Leek', 'Radicchio']);
});
