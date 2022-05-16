import easy from "../mod.ts";
import { assertEquals } from "https://deno.land/std@0.139.0/testing/asserts.ts";

Deno.test("easy.trim", () => {
	const t = easy.trim("--trim-hyphens--", "-");
	assertEquals(t, "trim-hyphens");
});

Deno.test("easy.ltrim", () => {
	const t = easy.ltrim("--trim-hyphens--", "-");
	assertEquals(t, "trim-hyphens--");
});

Deno.test("easy.rtrim", () => {
	const t = easy.rtrim("--trim-hyphens--", "-");
	assertEquals(t, "--trim-hyphens");
});

Deno.test("easy.mtrim", () => {
	const t = easy.mtrim("-/-trim-hyphens-/-", ["-", "/"]);
	assertEquals(t, "trim-hyphens");
});

Deno.test("easy.lmtrim", () => {
	const t = easy.lmtrim("-/-trim-hyphens-/-", ["-", "/"]);
	assertEquals(t, "trim-hyphens-/-");
});

Deno.test("easy.rmtrim", () => {
	const t = easy.rmtrim("-/-trim-hyphens-/-", ["-", "/"]);
	assertEquals(t, "-/-trim-hyphens");
});

Deno.test("easy.wtrim", () => {
	const t = easy.wtrim("wordwordtrim-wordswordword", "word");
	assertEquals(t, "trim-words");
});

Deno.test("easy.lwtrim", () => {
	const t = easy.lwtrim("wordwordtrim-wordswordword", "word");
	assertEquals(t, "trim-wordswordword");
});

Deno.test("easy.rwtrim", () => {
	const t = easy.rwtrim("wordwordtrim-wordswordword", "word");
	assertEquals(t, "wordwordtrim-words");
});
