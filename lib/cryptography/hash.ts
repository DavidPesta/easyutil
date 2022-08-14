import { crypto } from "https://deno.land/std@0.152.0/crypto/mod.ts";
import { HashAlgorithm } from "../../types.ts";

export async function hash(hashAlgorithm: HashAlgorithm, data: string): Promise<string> {
	const array = new Uint8Array(
		await crypto.subtle.digest(
			hashAlgorithm,
			new TextEncoder().encode(data)
		)
	);
	
	return array.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");
}
