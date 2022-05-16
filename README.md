# easyutil

A collection of useful utilities to make development with Deno even easier!

## Usage

```js
import easy from "https://deno.land/x/easyutil@0.1.0/mod.ts";
```

## Functions

### Trim

Inspiration and code bits borrowed from [Jason Larke's](https://stackoverflow.com/users/1280370/jason-larke) Stack Overflow answer here:
https://stackoverflow.com/a/55292366/508558

```js
const t = easy.trim(str, '/');
const lt = easy.ltrim(str, '/');
const rt = easy.rtrim(str, '/');
const mt = easy.mtrim(str, ['/', '\\']);
const lmt = easy.lmtrim(str, ['/', '\\']);
const rmt = easy.rmtrim(str, ['/', '\\']);
const t = easy.wtrim(str, 'word');
const lwt = easy.lwtrim(str, 'word');
const rwt = easy.rwtrim(str, 'word');
```

## Tests

Run tests with:
```
$ deno test tests/
```
