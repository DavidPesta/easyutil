# easyutil

A collection of useful utilities to make development with Deno even easier!

## Usage

```js
import easy from "https://deno.land/x/easyutil@0.7.0/mod.ts";
```

The utilities are nested within modules in a way that aids natural language recognition and empowers the developer to drill down and find utilities by harnessing the IDE's intellisense on dot notation. Less looking through documentation and more productivity!

## Functions

### String "Is A" Checks

```js
if (easy.string.isA.string(str)) ...
if (easy.string.isA.number(numberStr)) ...
if (easy.string.isA.integer(integerStr)) ...
if (easy.string.isA.boolean(booleanStr)) ...
```

### String Parse

```js
const num = easy.string.parse.number(str);
const int = easy.string.parse.integer(str);
const bool = easy.string.parse.boolean(str);
const obj = easy.string.parse.url("http://example.com?var1=one");
const obj = easy.string.parse.urlQuery("var1=one&var2=two&var3=three");
```

### String Trim

```js
const leftTrimmed = easy.string.trim.charsLeft(str, ['/', '\\']);
const rightTrimmed = easy.string.trim.charsRight(str, ['/', '\\']);
const trimmed = easy.string.trim.charsBoth(str, ['/', '\\']);

const leftTrimmed = easy.string.trim.wordLeft(str, 'word');
const rightTrimmed = easy.string.trim.wordRight(str, 'word');
const trimmed = easy.string.trim.wordBoth(str, 'word');
```

### Array Convert To

```js
const keyedObjects = easy.array.convertTo.keyedObjects(arrObj, "theKey");
const keyedValues = easy.array.convertTo.keyedValues(arrObj, "theKey", "theValue");
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
