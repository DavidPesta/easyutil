import easy from "../mod.ts";
import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";

Deno.test("easy.string.parse.number", () => {
	const integer = "5";
	assertEquals(easy.string.parse.number(integer), 5);
	
	const decimal = "5.5";
	assertEquals(easy.string.parse.number(decimal), 5.5);
	
	const lessThanOne = "0.5";
	assertEquals(easy.string.parse.number(lessThanOne), 0.5);
	
	const missingWhole = ".5";
	assertEquals(easy.string.parse.number(missingWhole), 0.5);
	
	const zeroDecimal = "5.0";
	assertEquals(easy.string.parse.number(zeroDecimal), 5);
	
	const nothingAfterDecimal = "5.";
	assertEquals(easy.string.parse.number(nothingAfterDecimal), 5);
	
	const twoZeroDecimal = "5.00";
	assertEquals(easy.string.parse.number(twoZeroDecimal), 5);
	
	const lotsOfZeroDecimals = "5.000000000";
	assertEquals(easy.string.parse.number(lotsOfZeroDecimals), 5);
	
	const veryBigNumber = "1e100";
	assertEquals(easy.string.parse.number(veryBigNumber), 1e+100);
	
	// There's no stopping JavaScript math from turning very large numbers into an Infinity number. To remain consistent with that principle,
	// parsing an otherwise legitimate huge number should also result in an Infinity number.
	
	const infiniteNumber = "1e1000";
	assertEquals(easy.string.parse.number(infiniteNumber), Infinity);
	
	const infiniteNegativeNumber = "-1e1000";
	assertEquals(easy.string.parse.number(infiniteNegativeNumber), -Infinity);
	
	const exponent = "123e5";
	assertEquals(easy.string.parse.number(exponent), 12300000);
	
	const negativeExponent = "123e-5";
	assertEquals(easy.string.parse.number(negativeExponent), 0.00123);
	
	const lotsOfDigits = "8435784398523729857394573459834725894375894357834925739485734985723957435824735893275349573285734295437285732953275934573493";
	assertEquals(easy.string.parse.number(lotsOfDigits), 8.43578439852373e+123);
	
	const commaNumber1 = "5,005";
	assertEquals(easy.string.parse.number(commaNumber1), NaN);
	
	const twoDecimals = "1.2.3";
	assertEquals(easy.string.parse.number(twoDecimals), NaN);
	
	const twoAdjacentDecimals = "5..6";
	assertEquals(easy.string.parse.number(twoAdjacentDecimals), NaN);
	
	const twoLeadingDecimals = "..5";
	assertEquals(easy.string.parse.number(twoLeadingDecimals), NaN);
	
	const twoTrailingDecimals = "5..";
	assertEquals(easy.string.parse.number(twoTrailingDecimals), NaN);
	
	const spaceSeparatedNumber = "5 000";
	assertEquals(easy.string.parse.number(spaceSeparatedNumber), NaN);
	
	const paddedNumber = "  5  ";
	assertEquals(easy.string.parse.number(paddedNumber), 5);
	
	const underbars = "5_000_000";
	assertEquals(easy.string.parse.number(underbars), NaN);
	
	const leadingZeros = "00000005";
	assertEquals(easy.string.parse.number(leadingZeros), 5);
	
	const binaryNumber = "0b11111111";
	assertEquals(easy.string.parse.number(binaryNumber), 255);
	
	const octalNumber = "0o377";
	assertEquals(easy.string.parse.number(octalNumber), 255);
	
	const hexNumber = "0x1";
	assertEquals(easy.string.parse.number(hexNumber), 1);
	
	const negativeInteger = "-5";
	assertEquals(easy.string.parse.number(negativeInteger), -5);
	
	const negativeDecimal = "-5.5";
	assertEquals(easy.string.parse.number(negativeDecimal), -5.5);
	
	const negativeWithSpace = "- 5";
	assertEquals(easy.string.parse.number(negativeWithSpace), NaN);
	
	const str = "happy";
	assertEquals(easy.string.parse.number(str), NaN);
	
	const date = "2016-12-31";
	assertEquals(easy.string.parse.number(date), NaN);
	
	const empty = "";
	assertEquals(easy.string.parse.number(empty), NaN);
	
	const space = " ";
	assertEquals(easy.string.parse.number(space), NaN);
	
	const numberThenString = "10g";
	assertEquals(easy.string.parse.number(numberThenString), NaN);
	
	const stringThenNumber = "g10";
	assertEquals(easy.string.parse.number(stringThenNumber), NaN);
	
	const booleanTrue = "true";
	assertEquals(easy.string.parse.number(booleanTrue), NaN);
	
	const booleanFalse = "false";
	assertEquals(easy.string.parse.number(booleanFalse), NaN);
	
	// A word string should never parse to a number, even if that word is "Infinity".
	
	const infinity = "Infinity";
	assertEquals(easy.string.parse.number(infinity), NaN);
	
	const negativeInfinity = "-Infinity";
	assertEquals(easy.string.parse.number(negativeInfinity), NaN);
	
	const lowercaseInfinity = "infinity";
	assertEquals(easy.string.parse.number(lowercaseInfinity), NaN);
	
	const nullWord = "null";
	assertEquals(easy.string.parse.number(nullWord), NaN);
	
	const undefinedWord = "undefined";
	assertEquals(easy.string.parse.number(undefinedWord), NaN);
	
	const NaNword = "NaN";
	assertEquals(easy.string.parse.number(NaNword), NaN);
	
	const wat = " \u00A0   \t\n\r";
	assertEquals(easy.string.parse.number(wat), NaN);
});

Deno.test("easy.string.parse.integer", () => {
	const integer = "5";
	assertEquals(easy.string.parse.integer(integer), 5);
	
	const decimal = "5.5";
	assertEquals(easy.string.parse.integer(decimal), 6);
	
	const missingWhole = ".5";
	assertEquals(easy.string.parse.integer(missingWhole), 1);
	
	const nothingAfterDecimal = "5.";
	assertEquals(easy.string.parse.integer(nothingAfterDecimal), 5);
	
	const zeroAsDecimal = "5.0";
	assertEquals(easy.string.parse.integer(zeroAsDecimal), 5);
	
	const zerosAfterDecimal = "5.000000";
	assertEquals(easy.string.parse.integer(zerosAfterDecimal), 5);
	
	const veryBigNumber = "1e100";
	assertEquals(easy.string.parse.integer(veryBigNumber), 1e+100);
	
	// There's no stopping JavaScript math from turning very large numbers into an Infinity number. To remain consistent with that principle,
	// parsing an otherwise legitimate huge number should also result in an Infinity number.
	
	const infiniteNumber = "1e1000";
	assertEquals(easy.string.parse.integer(infiniteNumber), Infinity);
	
	const infiniteNegativeNumber = "-1e1000";
	assertEquals(easy.string.parse.integer(infiniteNegativeNumber), -Infinity);
	
	const exponent = "123e5";
	assertEquals(easy.string.parse.integer(exponent), 12300000);
	
	const negativeExponent = "123e-5";
	assertEquals(easy.string.parse.integer(negativeExponent), 0);
	
	const lotsOfDigits = "8435784398523729857394573459834725894375894357834925739485734985723957435824735893275349573285734295437285732953275934573493";
	assertEquals(easy.string.parse.integer(lotsOfDigits), 8.43578439852373e+123);
	
	const lotsOfDigitsWithZeroesDecimal = "8435784398523729857394573459834725894375894357834925739485734985723957435824735893275349573285734295437285732953275934573493.00000000000";
	assertEquals(easy.string.parse.integer(lotsOfDigitsWithZeroesDecimal), 8.43578439852373e+123);
	
	const lotsOfDigitsHiddenDecimal = "843578439852372985739457345983472589437589435783492573948573498572395743582473589327534.9573285734295437285732953275934573493";
	assertEquals(easy.string.parse.integer(lotsOfDigitsHiddenDecimal), 8.43578439852373e+86);
	
	const lotsOfDigitsHiddenDecimalWithZeroes = "843578439852372985739457345983472589437589435783492573948573498572395743582473589327534.9573285734295437285732953275934573493.0000000";
	assertEquals(easy.string.parse.integer(lotsOfDigitsHiddenDecimalWithZeroes), NaN);
	
	const commaNumber1 = "5,005";
	assertEquals(easy.string.parse.integer(commaNumber1), NaN);
	
	const twoDecimals = "1.2.3";
	assertEquals(easy.string.parse.integer(twoDecimals), NaN);
	
	const twoAdjacentDecimals = "5..6";
	assertEquals(easy.string.parse.integer(twoAdjacentDecimals), NaN);
	
	const lotsOfDecimals = "...5.....5...";
	assertEquals(easy.string.parse.integer(lotsOfDecimals), NaN);
	
	const bothCommasAndDots = "5,000.00";
	assertEquals(easy.string.parse.integer(bothCommasAndDots), NaN);
	
	const spaceSeparatedNumber = "5 000";
	assertEquals(easy.string.parse.integer(spaceSeparatedNumber), NaN);
	
	const paddedNumber = "  5  ";
	assertEquals(easy.string.parse.integer(paddedNumber), 5);
	
	const underbars = "5_000_000";
	assertEquals(easy.string.parse.integer(underbars), NaN);
	
	const leadingZeros = "00000005";
	assertEquals(easy.string.parse.integer(leadingZeros), 5);
	
	const binaryNumber = "0b11111111";
	assertEquals(easy.string.parse.integer(binaryNumber), 255);
	
	const octalNumber = "0o377";
	assertEquals(easy.string.parse.integer(octalNumber), 255);
	
	const hexNumber = "0x1";
	assertEquals(easy.string.parse.integer(hexNumber), 1);
	
	const negativeInteger = "-5";
	assertEquals(easy.string.parse.integer(negativeInteger), -5);
	
	const negativeDecimal = "-5.5";
	assertEquals(easy.string.parse.integer(negativeDecimal), -5);
	
	const negativeWithSpace = "- 5";
	assertEquals(easy.string.parse.integer(negativeWithSpace), NaN);
	
	const str = "happy";
	assertEquals(easy.string.parse.integer(str), NaN);
	
	const date = "2016-12-31";
	assertEquals(easy.string.parse.integer(date), NaN);
	
	const empty = "";
	assertEquals(easy.string.parse.integer(empty), NaN);
	
	const space = " ";
	assertEquals(easy.string.parse.integer(space), NaN);
	
	const numberThenString = "10g";
	assertEquals(easy.string.parse.integer(numberThenString), NaN);
	
	const stringThenNumber = "g10";
	assertEquals(easy.string.parse.integer(stringThenNumber), NaN);
	
	const booleanTrue = "true";
	assertEquals(easy.string.parse.integer(booleanTrue), NaN);
	
	const booleanFalse = "false";
	assertEquals(easy.string.parse.integer(booleanFalse), NaN);
	
	// A word string should never parse to a number, even if that word is "Infinity".
	
	const infinity = "Infinity";
	assertEquals(easy.string.parse.integer(infinity), NaN);
	
	const negativeInfinity = "-Infinity";
	assertEquals(easy.string.parse.integer(negativeInfinity), NaN);
	
	const lowercaseInfinity = "infinity";
	assertEquals(easy.string.parse.integer(lowercaseInfinity), NaN);
	
	const nullWord = "null";
	assertEquals(easy.string.parse.integer(nullWord), NaN);
	
	const undefinedWord = "undefined";
	assertEquals(easy.string.parse.integer(undefinedWord), NaN);
	
	const NaNword = "NaN";
	assertEquals(easy.string.parse.integer(NaNword), NaN);
	
	const wat = " \u00A0   \t\n\r";
	assertEquals(easy.string.parse.integer(wat), NaN);
});

Deno.test("easy.string.parse.boolean", () => {
	const trueLower = "true";
	assertEquals(easy.string.parse.boolean(trueLower), true);
	
	const trueUpper = "TRUE";
	assertEquals(easy.string.parse.boolean(trueUpper), true);
	
	const trueMiXeD = "TrUe";
	assertEquals(easy.string.parse.boolean(trueMiXeD), true);
	
	const falseLower = "false";
	assertEquals(easy.string.parse.boolean(falseLower), false);
	
	const falseUpper = "FALSE";
	assertEquals(easy.string.parse.boolean(falseUpper), false);
	
	const falseMiXeD = "FaLsE";
	assertEquals(easy.string.parse.boolean(falseMiXeD), false);
	
	const tLower = "t";
	assertEquals(easy.string.parse.boolean(tLower), true);
	
	const tUpper = "T";
	assertEquals(easy.string.parse.boolean(tUpper), true);
	
	const fLower = "f";
	assertEquals(easy.string.parse.boolean(fLower), false);
	
	const fUpper = "F";
	assertEquals(easy.string.parse.boolean(fUpper), false);
	
	const one = "1";
	assertEquals(easy.string.parse.boolean(one), true);
	
	const zero = "0";
	assertEquals(easy.string.parse.boolean(zero), false);
	
	const startsWithT = "truish";
	assertEquals(easy.string.parse.boolean(startsWithT), false);
	
	const startsWithF = "falsy";
	assertEquals(easy.string.parse.boolean(startsWithF), false);
	
	const eleven = "11";
	assertEquals(easy.string.parse.boolean(eleven), false);
	
	const double07 = "007";
	assertEquals(easy.string.parse.boolean(double07), false);
});