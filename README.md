# easyutil

A collection of useful utilities to make development with Deno even easier!

## Usage

```js
import easy from "https://deno.land/x/easyutil@0.2.0/mod.ts";
```

The utilities are nested within modules in a way that aids natural language recognition and empowers the developer to drill down and find utilities by harnessing the IDE's intellisense on dot notation. Less looking through documentation and more productivity!

## Functions

### String "Is A" Checks

```js
if (easy.string.isA.string(str)) ...
if (easy.string.isA.number(numberStr)) ...
```

### String Trim

Inspiration and code bits borrowed from [Jason Larke's](https://stackoverflow.com/users/1280370/jason-larke) Stack Overflow answer here:
https://stackoverflow.com/a/55292366/508558

```js
const trimmed = easy.string.trim.charsBoth(str, ['/', '\\']);
const leftTrimmed = easy.string.trim.charsLeft(str, ['/', '\\']);
const rightTrimmed = easy.string.trim.charsRight(str, ['/', '\\']);

const trimmed = easy.string.trim.wordBoth(str, 'word');
const leftTrimmed = easy.string.trim.wordLeft(str, 'word');
const rightTrimmed = easy.string.trim.wordRight(str, 'word');
```

### Sleep

```js
easy.sleep(1000);
```

## Tests

Run tests with:
```
$ deno test tests/
```
