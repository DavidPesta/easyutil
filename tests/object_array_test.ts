import easy from "../mod.ts";
import { assertEquals } from "https://deno.land/std@0.145.0/testing/asserts.ts";

// deno-lint-ignore no-explicit-any
function exampleData(): Array<Record<string, any>> {
	return [
		{
			theKey: "obj1",
			theValue: "val1-1",
			extra: 41,
		},
		{
			theKey: "obj1",
			theValue: "val1-2",
			extra: 42,
		},
		{
			theKey: "obj2",
			theValue: "val2-1",
			extra: 31,
		},
		{
			theKey: "obj2",
			theValue: "val2-2",
			extra: 32,
		},
		{
			theKey: "obj3",
			theValue: "val3-1",
			extra: 71,
		},
		{
			theKey: "obj3",
			theValue: "val3-2",
			extra: 72,
		},
	];
}

Deno.test("easy.objectArray.groupBy", () => {
	const arrObj = exampleData();
	const groupedObjects = easy.objectArray.groupBy(arrObj, "theKey");
	
	assertEquals(groupedObjects.obj1[0].theKey, "obj1");
	assertEquals(groupedObjects["obj1"][0]["theKey"], "obj1");
	assertEquals(groupedObjects.obj1[1].theKey, "obj1");
	assertEquals(groupedObjects["obj1"][1]["theKey"], "obj1");
	
	assertEquals(groupedObjects.obj2[0].theValue, "val2-1");
	assertEquals(groupedObjects["obj2"][0]["theValue"], "val2-1");
	assertEquals(groupedObjects.obj2[1].theValue, "val2-2");
	assertEquals(groupedObjects["obj2"][1]["theValue"], "val2-2");
	
	assertEquals(groupedObjects.obj3[0].extra, 71);
	assertEquals(groupedObjects["obj3"][0]["extra"], 71);
	assertEquals(groupedObjects.obj3[1].extra, 72);
	assertEquals(groupedObjects["obj3"][1]["extra"], 72);
});

Deno.test("easy.objectArray.convertTo.keyedObjects", () => {
	const arrObj = exampleData();
	const keyedObjects = easy.objectArray.convertTo.keyedObjects(arrObj, "theKey");
	
	assertEquals(keyedObjects.obj1[0].theKey, "obj1");
	assertEquals(keyedObjects["obj1"][0]["theKey"], "obj1");
	assertEquals(keyedObjects.obj1[1].theKey, "obj1");
	assertEquals(keyedObjects["obj1"][1]["theKey"], "obj1");
	
	assertEquals(keyedObjects.obj2[0].theValue, "val2-1");
	assertEquals(keyedObjects["obj2"][0]["theValue"], "val2-1");
	assertEquals(keyedObjects.obj2[1].theValue, "val2-2");
	assertEquals(keyedObjects["obj2"][1]["theValue"], "val2-2");
	
	assertEquals(keyedObjects.obj3[0].extra, 71);
	assertEquals(keyedObjects["obj3"][0]["extra"], 71);
	assertEquals(keyedObjects.obj3[1].extra, 72);
	assertEquals(keyedObjects["obj3"][1]["extra"], 72);
});

Deno.test("easy.objectArray.convertTo.keyedValues", () => {
	const arrObj = exampleData();
	const keyedValues = easy.objectArray.convertTo.keyedValues(arrObj, "theKey", "theValue");
	
	assertEquals(keyedValues.obj1[0], "val1-1");
	assertEquals(keyedValues["obj1"][0], "val1-1");
	assertEquals(keyedValues.obj1[1], "val1-2");
	assertEquals(keyedValues["obj1"][1], "val1-2");
	
	assertEquals(keyedValues.obj2[0], "val2-1");
	assertEquals(keyedValues["obj2"][0], "val2-1");
	assertEquals(keyedValues.obj2[1], "val2-2");
	assertEquals(keyedValues["obj2"][1], "val2-2");
	
	assertEquals(keyedValues.obj3[0], "val3-1");
	assertEquals(keyedValues["obj3"][0], "val3-1");
	assertEquals(keyedValues.obj3[1], "val3-2");
	assertEquals(keyedValues["obj3"][1], "val3-2");
});

Deno.test("easy.objectArray.convertTo.keyedObjectsFlat", () => {
	const arrObj = exampleData();
	const keyedObjectsFlat = easy.objectArray.convertTo.keyedObjectsFlat(arrObj, "theKey");
	
	assertEquals(keyedObjectsFlat.obj1.theKey, "obj1");
	assertEquals(keyedObjectsFlat["obj1"]["theKey"], "obj1");
	
	assertEquals(keyedObjectsFlat.obj2.theValue, "val2-2");
	assertEquals(keyedObjectsFlat["obj2"]["theValue"], "val2-2");
	
	assertEquals(keyedObjectsFlat.obj3.extra, 72);
	assertEquals(keyedObjectsFlat["obj3"]["extra"], 72);
});

Deno.test("easy.objectArray.convertTo.keyedValuesFlat", () => {
	const arrObj = exampleData();
	const keyedValuesFlat = easy.objectArray.convertTo.keyedValuesFlat(arrObj, "theKey", "theValue");
	
	assertEquals(keyedValuesFlat.obj1, "val1-2");
	assertEquals(keyedValuesFlat["obj1"], "val1-2");
	
	assertEquals(keyedValuesFlat.obj2, "val2-2");
	assertEquals(keyedValuesFlat["obj2"], "val2-2");
	
	assertEquals(keyedValuesFlat.obj3, "val3-2");
	assertEquals(keyedValuesFlat["obj3"], "val3-2");
});
