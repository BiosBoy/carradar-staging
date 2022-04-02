const isSpecialSymbols = (value: string) => value && /[^А-Яа-яA-Za-z0-9]/gi.test(value);

export default isSpecialSymbols;
