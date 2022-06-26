import easy from "../mod.ts";
import { assert } from "https://deno.land/std@0.145.0/testing/asserts.ts";

Deno.test("easy.sleep", async () => {
	const beforeTime = Date.now();
	await easy.sleep(50);
	const afterTime = Date.now();
	assert(afterTime - beforeTime >= 50);
	assert(afterTime - beforeTime < 60);
});
