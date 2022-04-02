const isLatinInput = (value: string) => value && /[A-Za-z]/gi.test(value);

export default isLatinInput;
