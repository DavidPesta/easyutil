import easy from "../mod.ts";
import { assert, assertFalse, assertThrows } from "https://deno.land/std@0.139.0/testing/asserts.ts";

Deno.test("easy.isString", () => {
	const str = "some string";
	const strobj = new String("some string object");
	
	assert(easy.isString(str));
	assertThrows(() => easy.isString(strobj));
});

// Nice article on decimal separators: https://en.wikipedia.org/wiki/Decimal_separator
Deno.test("easy.isNumberString", () => {
	const integer = "5";
	assert(easy.isNumberString(integer));
	
	const decimal = "5.5";
	assert(easy.isNumberString(decimal));
	
	const lessThanOne = "0.5";
	assert(easy.isNumberString(lessThanOne));
	
	const missingWhole = ".5";
	assert(easy.isNumberString(missingWhole));
	
	const zeroDecimal = "5.0";
	assert(easy.isNumberString(zeroDecimal));
	
	const missingDecimal = "5.";
	assert(easy.isNumberString(missingDecimal));
	
	const twoZeroDecimal = "5.00";
	assert(easy.isNumberString(twoZeroDecimal));
	
	const lotsOfZeroDecimals = "5.000000000";
	assert(easy.isNumberString(lotsOfZeroDecimals));
	
	const infiniteNumber = "1e10000";
	assert(easy.isNumberString(infiniteNumber));
	
	const exponent = "123e5";
	assert(easy.isNumberString(exponent));
	
	const negativeExponent = "123e-5";
	assert(easy.isNumberString(negativeExponent));
	
	const lotsOfDigits = "8435784398523729857394573459834725894375894357834925739485734985723957435824735893275349573285734295437285732953275934573493";
	assert(easy.isNumberString(lotsOfDigits));
	
	// Commas are used to separate numbers for human clarity. Allow humans to do this however they want. Commas are also used as decimals.
	
	const commaNumber1 = "5,000";
	assert(easy.isNumberString(commaNumber1));
	
	const commaNumber2 = "50,00";
	assert(easy.isNumberString(commaNumber2));
	
	const commaNumber3 = "500,0";
	assert(easy.isNumberString(commaNumber3));
	
	const commaNumber4 = ",,,,,,,,5,,,,0,,,,,,,,,,0,,,,,0,,,,,";
	assert(easy.isNumberString(commaNumber4));
	
	// Periods are used to separate numbers for human clarity. Allow humans to do this however they want. Periods are also used as decimals.
	
	const twoDecimals = "1.2.3";
	assert(easy.isNumberString(twoDecimals));
	
	const twoAdjacentDecimals = "5..6";
	assert(easy.isNumberString(twoAdjacentDecimals));
	
	const twoLeadingDecimals = "..5";
	assert(easy.isNumberString(twoLeadingDecimals));
	
	const twoTrailingDecimals = "5..";
	assert(easy.isNumberString(twoTrailingDecimals));
	
	const lotsOfDecimals = "...5.....5...";
	assert(easy.isNumberString(lotsOfDecimals));
	
	// Spaces are the internationally recommended thousands separator, so again, allow humans to use them however they want.
	
	const spaceSeparatedNumber = "5 000";
	assert(easy.isNumberString(spaceSeparatedNumber));
	
	const spaceSeparatedBigNumber = "5 000 000 000 000 000 000 000";
	assert(easy.isNumberString(spaceSeparatedBigNumber));
	
	const leftPaddedNumber = " 5";
	assert(easy.isNumberString(leftPaddedNumber));
	
	const rightPaddedNumber = "5 ";
	assert(easy.isNumberString(rightPaddedNumber));
	
	// Underbars are a somewhat common separator among programmers.
	const underbars = "5_000_000";
	assert(easy.isNumberString(underbars));
	
	// Why would this be more offensive than 5.000000? Why the bias against unnecessary zeroes on the left of the decimal?
	const leadingZeros = "00000005";
	assert(easy.isNumberString(leadingZeros));
	
	const binaryNumber = "0b11111111";
	assert(easy.isNumberString(binaryNumber));
	
	const octalNumber = "0o377";
	assert(easy.isNumberString(octalNumber));
	
	const hexNumber = "0x1";
	assert(easy.isNumberString(hexNumber));
	
	const negativeInteger = "-5";
	assert(easy.isNumberString(negativeInteger));
	
	const negativeDecimal = "-5.5";
	assert(easy.isNumberString(negativeDecimal));
	
	const negativeWithSpace = "- 5";
	assert(easy.isNumberString(negativeWithSpace));
	
	const str = "happy";
	assertFalse(easy.isNumberString(str));
	
	const date = "2016-12-31";
	assertFalse(easy.isNumberString(date));
	
	const empty = "";
	assertFalse(easy.isNumberString(empty));
	
	const space = " ";
	assertFalse(easy.isNumberString(space));
	
	const numberThenString = "10g";
	assertFalse(easy.isNumberString(numberThenString));
	
	const stringThenNumber = "g10";
	assertFalse(easy.isNumberString(stringThenNumber));
	
	const booleanTrue = "true";
	assertFalse(easy.isNumberString(booleanTrue));
	
	const booleanFalse = "false";
	assertFalse(easy.isNumberString(booleanFalse));
	
	// Infinity is not a number. Infinity is a concept. If someone says that infinity is a number, ask them, "which number is it?"
	// In math, there are "large infinities" and there are "small infinities" and they are not the same. Again, which number do they represent?
	const infinity = "Infinity";
	assertFalse(easy.isNumberString(infinity));
	
	const lowercaseInfinity = "infinity";
	assertFalse(easy.isNumberString(lowercaseInfinity));
	
	const nullWord = "null";
	assertFalse(easy.isNumberString(nullWord));
	
	const undefinedWord = "undefined";
	assertFalse(easy.isNumberString(undefinedWord));
	
	const NaNword = "NaN";
	assertFalse(easy.isNumberString(NaNword));
	
	const wat = " \u00A0   \t\n\r";
	assertFalse(easy.isNumberString(wat));
});
