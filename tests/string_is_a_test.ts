import easy from "../mod.ts";
import { assert, assertFalse, assertThrows } from "https://deno.land/std@0.139.0/testing/asserts.ts";

Deno.test("easy.string.isA.string", () => {
	const str = "some string";
	const strobj = new String("some string object");
	
	assert(easy.string.isA.string(str));
	assertThrows(() => easy.string.isA.string(strobj));
});

Deno.test("easy.string.isA.number", () => {
	const integer = "5";
	assert(easy.string.isA.number(integer));
	
	const decimal = "5.5";
	assert(easy.string.isA.number(decimal));
	
	const lessThanOne = "0.5";
	assert(easy.string.isA.number(lessThanOne));
	
	const missingWhole = ".5";
	assert(easy.string.isA.number(missingWhole));
	
	const zeroDecimal = "5.0";
	assert(easy.string.isA.number(zeroDecimal));
	
	const missingDecimal = "5.";
	assert(easy.string.isA.number(missingDecimal));
	
	const twoZeroDecimal = "5.00";
	assert(easy.string.isA.number(twoZeroDecimal));
	
	const lotsOfZeroDecimals = "5.000000000";
	assert(easy.string.isA.number(lotsOfZeroDecimals));
	
	const veryBigNumber = "1e100";
	assert(easy.string.isA.number(veryBigNumber));
	
	const infiniteNumber = "1e1000";
	assertFalse(easy.string.isA.number(infiniteNumber)); // Can't be parsed into a usable number.
	
	const exponent = "123e5";
	assert(easy.string.isA.number(exponent));
	
	const negativeExponent = "123e-5";
	assert(easy.string.isA.number(negativeExponent));
	
	const lotsOfDigits = "8435784398523729857394573459834725894375894357834925739485734985723957435824735893275349573285734295437285732953275934573493";
	assert(easy.string.isA.number(lotsOfDigits));
	
	const commaNumber1 = "5,005";
	assertFalse(easy.string.isA.number(commaNumber1));
	
	const commaNumber2 = "50,05";
	assertFalse(easy.string.isA.number(commaNumber2));
	
	const commaNumber3 = "500,5";
	assertFalse(easy.string.isA.number(commaNumber3));
	
	const commaNumber4 = ",,,,,,,,5,,,,0,,,,,,,,,,0,,,,,5,,,,,";
	assertFalse(easy.string.isA.number(commaNumber4));
	
	const twoDecimals = "1.2.3";
	assertFalse(easy.string.isA.number(twoDecimals));
	
	const twoAdjacentDecimals = "5..6";
	assertFalse(easy.string.isA.number(twoAdjacentDecimals));
	
	const twoLeadingDecimals = "..5";
	assertFalse(easy.string.isA.number(twoLeadingDecimals));
	
	const twoTrailingDecimals = "5..";
	assertFalse(easy.string.isA.number(twoTrailingDecimals));
	
	const lotsOfDecimals = "...5.....5...";
	assertFalse(easy.string.isA.number(lotsOfDecimals));
	
	const bothCommasAndDots = "5,000.00";
	assertFalse(easy.string.isA.number(bothCommasAndDots));
	
	const spaceSeparatedNumber = "5 000";
	assertFalse(easy.string.isA.number(spaceSeparatedNumber));
	
	const spaceSeparatedBigNumber = "5 000 000 000 000 000 000 000";
	assertFalse(easy.string.isA.number(spaceSeparatedBigNumber));
	
	const paddedNumber = "  5  ";
	assertFalse(easy.string.isA.number(paddedNumber));
	
	const leftPaddedNumber = "  5";
	assertFalse(easy.string.isA.number(leftPaddedNumber));
	
	const rightPaddedNumber = "5  ";
	assertFalse(easy.string.isA.number(rightPaddedNumber));
	
	const underbars = "5_000_000";
	assertFalse(easy.string.isA.number(underbars));
	
	// Why would this be more offensive than 5.000000? Why the bias against unnecessary zeroes on the left of the decimal?
	const leadingZeros = "00000005";
	assert(easy.string.isA.number(leadingZeros));
	
	const binaryNumber = "0b11111111";
	assert(easy.string.isA.number(binaryNumber));
	
	const octalNumber = "0o377";
	assert(easy.string.isA.number(octalNumber));
	
	const hexNumber = "0x1";
	assert(easy.string.isA.number(hexNumber));
	
	const negativeInteger = "-5";
	assert(easy.string.isA.number(negativeInteger));
	
	const negativeDecimal = "-5.5";
	assert(easy.string.isA.number(negativeDecimal));
	
	const negativeWithSpace = "- 5";
	assertFalse(easy.string.isA.number(negativeWithSpace));
	
	const str = "happy";
	assertFalse(easy.string.isA.number(str));
	
	const date = "2016-12-31";
	assertFalse(easy.string.isA.number(date));
	
	const empty = "";
	assertFalse(easy.string.isA.number(empty));
	
	const space = " ";
	assertFalse(easy.string.isA.number(space));
	
	const numberThenString = "10g";
	assertFalse(easy.string.isA.number(numberThenString));
	
	const stringThenNumber = "g10";
	assertFalse(easy.string.isA.number(stringThenNumber));
	
	const booleanTrue = "true";
	assertFalse(easy.string.isA.number(booleanTrue));
	
	const booleanFalse = "false";
	assertFalse(easy.string.isA.number(booleanFalse));
	
	// Infinity is not a number. Infinity is a concept. If someone says that infinity is a number, ask them, "which number is it?"
	// In math, there are "large infinities" and there are "small infinities" and they are not the same. Again, which number do they represent?
	const infinity = "Infinity";
	assertFalse(easy.string.isA.number(infinity));
	
	const lowercaseInfinity = "infinity";
	assertFalse(easy.string.isA.number(lowercaseInfinity));
	
	const nullWord = "null";
	assertFalse(easy.string.isA.number(nullWord));
	
	const undefinedWord = "undefined";
	assertFalse(easy.string.isA.number(undefinedWord));
	
	const NaNword = "NaN";
	assertFalse(easy.string.isA.number(NaNword));
	
	const wat = " \u00A0   \t\n\r";
	assertFalse(easy.string.isA.number(wat));
});

Deno.test("easy.string.isA.decimal", () => {
	const decimal = "5.5";
	assertThrows(() => easy.string.isA.decimal(decimal));
});
