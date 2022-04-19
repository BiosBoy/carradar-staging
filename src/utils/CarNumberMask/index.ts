const CarNumberMask = (value) => {
  const validRegExps = [
    /^[А-Яа-я]{1}$/i.test(value),
    /^[А-Яа-я]{2}$/i.test(value),
    /^[А-Яа-я]{2}[0-9]{1}$/i.test(value),
    /^[А-Яа-я]{2}[0-9]{2}$/i.test(value),
    /^[А-Яа-я]{2}[0-9]{3}$/i.test(value),
    /^[А-Яа-я]{2}[0-9]{4}$/i.test(value),
    /^[А-Яа-я]{2}[0-9]{4}[А-Яа-я]{1}$/i.test(value),
    /^[А-Яа-я]{2}[0-9]{4}[А-Яа-я]{2}$/i.test(value),
    /^[A-Za-z]{1}$/i.test(value),
    /^[A-Za-z]{2}$/i.test(value),
    /^[A-Za-z]{2}[0-9]{1}$/i.test(value),
    /^[A-Za-z]{2}[0-9]{2}$/i.test(value),
    /^[A-Za-z]{2}[0-9]{3}$/i.test(value),
    /^[A-Za-z]{2}[0-9]{4}$/i.test(value),
    /^[A-Za-z]{2}[0-9]{4}[A-Za-z]{1}$/i.test(value),
    /^[A-Za-z]{2}[0-9]{4}[A-Za-z]{2}$/i.test(value)
  ];

  return validRegExps.some((valid) => valid);
};

export default CarNumberMask;
