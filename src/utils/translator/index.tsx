/* eslint-disable max-len */
const cyrilToLatin = { Ё: 'YO', Й: 'I', Ц: 'TS', У: 'U', К: 'K', Е: 'E', Н: 'N', Г: 'G', Ш: 'SH', Щ: 'SCH', З: 'Z', Х: 'H', Ъ: '/', ё: 'yo', й: 'i', ц: 'ts', у: 'u', к: 'k', е: 'e', н: 'n', г: 'g', ш: 'sh', щ: 'sch', з: 'z', х: 'h', ъ: '/', Ф: 'F', Ы: 'I', В: 'V', А: 'a', П: 'P', Р: 'R', О: 'O', Л: 'L', Д: 'D', Ж: 'ZH', ф: 'f', ы: 'i', в: 'v', а: 'a', п: 'p', р: 'r', о: 'o', л: 'l', д: 'd', ж: 'zh', э: 'e', Я: 'Ya', Ч: 'CH', С: 'S', М: 'M', И: 'I', Т: 'T', Ь: '/', Б: 'B', Ю: 'YU', я: 'ya', ч: 'ch', с: 's', м: 'm', и: 'i', т: 't', ь: '/', б: 'b', ю: 'yu' };
const latinToCyril = {};

const reverseLang = () => {
  Object.keys(cyrilToLatin).forEach(key => {
    const cyrilValue = cyrilToLatin[key];

    latinToCyril[cyrilValue] = key;
  });

  return latinToCyril;
};

const translator = (word: string, isNoReverse?: false) => {
  const lang = isNoReverse ? cyrilToLatin : reverseLang();

  return word.split('').map(char => {
    return lang[char] || char;
  }).join('');
};

export default translator;
