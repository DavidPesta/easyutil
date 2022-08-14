export type UrlInfo = {
	protocol: string;
	subdomain: string;
	domain: string;
	tld: string;
	port: string;
	path: string;
	filename: string;
	ext: string;
	query: string;
	fragment: string;
};

export enum HashAlgorithm {
	BLAKE2B_256 = "BLAKE2B-256",
	BLAKE2B_384 = "BLAKE2B-384",
	BLAKE2B = "BLAKE2B",
	BLAKE2S = "BLAKE2S",
	BLAKE3 = "BLAKE3",
	KECCAK_224 = "KECCAK-224",
	KECCAK_256 = "KECCAK-256",
	KECCAK_384 = "KECCAK-384",
	KECCAK_512 = "KECCAK-512",
	MD5 = "MD5",
	RIPEMD_160 = "RIPEMD-160",
	SHA_1 = "SHA-1",
	SHA_224 = "SHA-224",
	SHA_256 = "SHA-256",
	SHA_384 = "SHA-384",
	SHA_512 = "SHA-512",
	SHA3_224 = "SHA3-224",
	SHA3_256 = "SHA3-256",
	SHA3_384 = "SHA3-384",
	SHA3_512 = "SHA3-512",
	SHAKE128 = "SHAKE128",
	SHAKE256 = "SHAKE256",
	TIGER = "TIGER",
}
