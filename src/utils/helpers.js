export const camelToHyphen = string => {
	return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

export const hypenToCamel = string => {
	return string.replace(/-([a-z])/g, function(g) {
		return g[1].toUpperCase();
	});
};

export const isInteger = value => {
	return isNumber(value) && Number.isInteger(Number(value));
};

export const isNumber = value => {
	return !isNaN(value) && !isNaN(Number(value));
};

export const oneOf = (value, array, trueIfNull = true) => {
	if (!value && trueIfNull) return true;
	return array.indexOf(value) !== -1;
};

export const capitalizeFirstLetter = string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const guid = empty => {
	return empty
		? '00000000-0000-0000-0000-000000000000'
		: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				let r = (Math.random() * 16) | 0,
					v = c == 'x' ? r : (r & 0x3) | 0x8;
				return v.toString(16);
		  });
};

export const testRegex = (pattern, str) => {
	let regex = new RegExp(pattern);

	return regex.test(str);
};

export const hasOwn = (obj, key) => {
	return hasOwnProperty.call(obj, key);
};
