const isValidPatternInput = (value: string) => value && /^[А-Я|A-Z]{2}[0-9]{4}[А-Я|A-Z]{2}$/i.test(value);

export default isValidPatternInput;
