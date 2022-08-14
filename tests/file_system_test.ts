import easy from "../mod.ts";
import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";

Deno.test("easy.fileSystem.pathToScript.file", () => {
	const filePath = easy.fileSystem.pathToScript.file();
	assertEquals(filePath[0], "/");
	
	const filename = filePath.substring(filePath.lastIndexOf("/"))
	assertEquals(filename, "/file_system_test.ts");
});

Deno.test("easy.fileSystem.pathToScript.directory", () => {
	const directoryPath = easy.fileSystem.pathToScript.directory();
	assertEquals(directoryPath[0], "/");
	
	const dirname = directoryPath.substring(directoryPath.lastIndexOf("/"))
	assertEquals(dirname, "/tests");
});
