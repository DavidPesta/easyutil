import easy from "../mod.ts";
import { assertEquals } from "https://deno.land/std@0.145.0/testing/asserts.ts";

// deno-lint-ignore no-explicit-any
function exampleData(): Array<Record<string, any>> {
	return [
		{
			theKey: "obj1",
			theValue: "val1",
			extra: 4,
		},
		{
			theKey: "obj2",
			theValue: "val2",
			extra: 3,
		},
		{
			theKey: "obj3",
			theValue: "val3",
			extra: 7,
		},
	];
}

Deno.test("easy.array.convertTo.keyedObjects", () => {
	const arrObj = exampleData();
	const keyedObjects = easy.array.convertTo.keyedObjects(arrObj, "theKey");
	
	assertEquals(keyedObjects.obj1.theKey, "obj1");
	assertEquals(keyedObjects["obj1"]["theKey"], "obj1");
	
	assertEquals(keyedObjects.obj2.theValue, "val2");
	assertEquals(keyedObjects["obj2"]["theValue"], "val2");
	
	assertEquals(keyedObjects.obj3.extra, 7);
	assertEquals(keyedObjects["obj3"]["extra"], 7);
});

Deno.test("easy.array.convertTo.keyedValues", () => {
	const arrObj = exampleData();
	const keyedValues = easy.array.convertTo.keyedValues(arrObj, "theKey", "theValue");
	
	assertEquals(keyedValues.obj1, "val1");
	assertEquals(keyedValues["obj1"], "val1");
	
	assertEquals(keyedValues.obj2, "val2");
	assertEquals(keyedValues["obj2"], "val2");
	
	assertEquals(keyedValues.obj3, "val3");
	assertEquals(keyedValues["obj3"], "val3");
});
