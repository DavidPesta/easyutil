import easy from "../mod.ts";
import { HashAlgorithm } from "../types.ts";
import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";

Deno.test("easy.cryptography.hash", async () => {
	const md5hash = await easy.cryptography.hash(HashAlgorithm.MD5, "test");
	assertEquals(md5hash, "098f6bcd4621d373cade4e832627b4f6");
	
	const sha1hash = await easy.cryptography.hash(HashAlgorithm.SHA_1, "test");
	assertEquals(sha1hash, "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3");
});
