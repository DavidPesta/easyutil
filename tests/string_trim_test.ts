import easy from "../mod.ts";
import { assertEquals } from "https://deno.land/std@0.141.0/testing/asserts.ts";

Deno.test("easy.string.trim.charsBoth", () => {
	const t = easy.string.trim.charsBoth("-/-trim-hyphens-/-", ["-", "/"]);
	assertEquals(t, "trim-hyphens");
});

Deno.test("easy.string.trim.charsLeft", () => {
	const t = easy.string.trim.charsLeft("-/-trim-hyphens-/-", ["-", "/"]);
	assertEquals(t, "trim-hyphens-/-");
});

Deno.test("easy.string.trim.charsRight", () => {
	const t = easy.string.trim.charsRight("-/-trim-hyphens-/-", ["-", "/"]);
	assertEquals(t, "-/-trim-hyphens");
});

Deno.test("easy.string.trim.wordBoth", () => {
	const t = easy.string.trim.wordBoth("wordwordtrim-wordswordword", "word");
	assertEquals(t, "trim-words");
});

Deno.test("easy.string.trim.wordLeft", () => {
	const t = easy.string.trim.wordLeft("wordwordtrim-wordswordword", "word");
	assertEquals(t, "trim-wordswordword");
});

Deno.test("easy.string.trim.wordRight", () => {
	const t = easy.string.trim.wordRight("wordwordtrim-wordswordword", "word");
	assertEquals(t, "wordwordtrim-words");
});
