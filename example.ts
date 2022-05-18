import easy from "./mod.ts";

console.log("Before sleep");
await easy.sleep(1000);
console.log("After sleep");

console.log(easy.trim("-trim-hyphens-", "-"));
