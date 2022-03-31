const isCyrillicInput = (value: string) => value && /[А-Яа-я]/gi.test(value)

export default isCyrillicInput
