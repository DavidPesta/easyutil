import * as trim from "./lib/trim.ts";
import * as sleep from "./lib/sleep.ts";
import * as stc from "./lib/string_type_checks.ts";

export default {
	trim: trim.trim,
	ltrim: trim.ltrim,
	rtrim: trim.rtrim,
	mtrim: trim.mtrim,
	lmtrim: trim.lmtrim,
	rmtrim: trim.rmtrim,
	wtrim: trim.wtrim,
	lwtrim: trim.lwtrim,
	rwtrim: trim.rwtrim,
	sleep: sleep.sleep,
	isString: stc.isString,
	isNumberString: stc.isNumberString
};
