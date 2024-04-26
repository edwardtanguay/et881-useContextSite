import * as tools from './tools';

/**
 * sentencize()
 *
 * sentencize('this is a message')
 *
 * "This is a message."
 */
export const sentencize = (text: string) => {
	let r = text;

	if (",:;".includes(r.slice(-1))) {
		r = r.slice(0, -1);
	}

	if (!".!?".includes(r.slice(-1))) {
		r += ".";
	}

	r = tools.capitalizeFirstLetter(r);

	r = r.slice(0, -1) + ".";

	return r;
};

/**
 * capitalizeFirstLetter()
 *
 * capitalizeFirstLetter('this is a test')
 *
 * "This is a test"
 */
export const capitalizeFirstLetter = (text: string) => {
	let tempFirstLetter = "";
	let r = text;

	if (r.startsWith("¿")) {
		tempFirstLetter = "¿";
		r = r.slice(1);
	}

	r = r.charAt(0).toUpperCase() + r.slice(1).toLowerCase();

	if (tempFirstLetter !== "") {
		r = tempFirstLetter + r;
	}

	return r;
};
