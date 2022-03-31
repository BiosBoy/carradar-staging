const BRANDS = [
  {
    category_id: '1',
    cnt: 112,
    country_id: 392,
    eng: 'acura',
    marka_id: 98,
    name: 'Acura',
    slang: 'Акура'
  },
  {
    category_id: '2',
    cnt: 1,
    country_id: 276,
    eng: 'acxa',
    marka_id: 2282,
    name: 'Acxa',
    slang: 'Асха'
  },
  {
    category_id: '4,10',
    cnt: 12,
    country_id: 0,
    eng: 'agrisem',
    marka_id: 4700,
    name: 'Agrisem',
    slang: 'Агрисьем'
  },
  {
    category_id: '4,10',
    cnt: 5,
    country_id: 0,
    eng: 'agromech',
    marka_id: 4402,
    name: 'Agromech',
    slang: 'Агромек'
  },
  {
    category_id: '4,10',
    cnt: 2,
    country_id: 0,
    eng: 'akpil',
    marka_id: 3946,
    name: 'Akpil',
    slang: 'Акпил'
  },
  {
    category_id: '10',
    cnt: 60,
    country_id: 0,
    eng: 'akturk',
    marka_id: 6323,
    name: 'Akturk',
    slang: null
  },
  {
    category_id: '4,5,10',
    cnt: 9,
    country_id: 276,
    eng: 'al-ko',
    marka_id: 2046,
    name: 'Al-ko',
    slang: 'Ал-ко'
  },
  {
    category_id: '2,3',
    cnt: 1,
    country_id: 0,
    eng: 'alfa',
    marka_id: 2393,
    name: 'Alfa',
    slang: 'Альфа'
  },
  {
    category_id: '1',
    cnt: 62,
    country_id: 380,
    eng: 'alfa-romeo',
    marka_id: 3,
    name: 'Alfa Romeo',
    slang: 'Альфа Ромео'
  },
  {
    category_id: '5',
    cnt: 1,
    country_id: 0,
    eng: 'ali-riza-usta',
    marka_id: 3467,
    name: 'Ali Riza Usta',
    slang: 'Али Риза Уста'
  },
  {
    category_id: '3',
    cnt: 4,
    country_id: 0,
    eng: 'allures',
    marka_id: 3622,
    name: 'Allures',
    slang: 'Алюрес'
  },
  {
    category_id: '5',
    cnt: 1,
    country_id: 0,
    eng: 'alm',
    marka_id: 5964,
    name: 'ALM',
    slang: null
  },
  {
    category_id: '4',
    cnt: 6,
    country_id: 0,
    eng: 'alpin',
    marka_id: 6045,
    name: 'Alpin',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 4,
    country_id: 276,
    eng: 'amazone',
    marka_id: 2154,
    name: 'Amazone',
    slang: 'Амазон'
  },
  {
    category_id: '3',
    cnt: 1,
    country_id: 0,
    eng: 'amels',
    marka_id: 6254,
    name: 'Amels',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 12,
    country_id: 0,
    eng: 'amity-technology',
    marka_id: 5377,
    name: 'Amity Technology',
    slang: 'Амиты Технологий'
  },
  {
    category_id: '3',
    cnt: 9,
    country_id: 158,
    eng: 'ant',
    marka_id: 2629,
    name: 'ANT',
    slang: 'Эй Эн Ти'
  },
  {
    category_id: '2,9',
    cnt: 1,
    country_id: 0,
    eng: 'apollo',
    marka_id: 4164,
    name: 'Apollo',
    slang: 'Аполло'
  },
  {
    category_id: '3',
    cnt: 2,
    country_id: 0,
    eng: 'apreamare',
    marka_id: 3866,
    name: 'Apreamare',
    slang: 'Апремаре'
  },
  {
    category_id: '3,5',
    cnt: 27,
    country_id: 0,
    eng: 'aquanaut',
    marka_id: 4028,
    name: 'Aquanaut',
    slang: null
  },
  {
    category_id: '6,7',
    cnt: 2,
    country_id: 0,
    eng: 'ashok-leyland',
    marka_id: 2550,
    name: 'Ashok Leyland',
    slang: 'Ашок Лейленд'
  },
  {
    category_id: '1',
    cnt: 11,
    country_id: 826,
    eng: 'aston-martin',
    marka_id: 5,
    name: 'Aston Martin',
    slang: 'Астон мартин'
  },
  {
    category_id: '3,7',
    cnt: 12,
    country_id: 0,
    eng: 'ataman',
    marka_id: 3981,
    name: 'Ataman',
    slang: 'Атаман'
  },
  {
    category_id: '3',
    cnt: 10,
    country_id: 616,
    eng: 'atlantic-marine',
    marka_id: 4332,
    name: 'Atlantic Marine',
    slang: 'Атлантикмарин'
  },
  {
    category_id: '4,10',
    cnt: 20,
    country_id: 276,
    eng: 'atlas',
    marka_id: 1587,
    name: 'Atlas',
    slang: 'Атлас авто'
  },
  {
    category_id: '4,10',
    cnt: 63,
    country_id: 0,
    eng: 'atlas-copco',
    marka_id: 4185,
    name: 'Atlas Copco',
    slang: 'Атлас Копко'
  },
  {
    category_id: '2',
    cnt: 7,
    country_id: 0,
    eng: 'atv',
    marka_id: 2521,
    name: 'ATV',
    slang: 'АТВ'
  },
  {
    category_id: '1,4,10',
    cnt: 707,
    country_id: 276,
    eng: 'audi',
    marka_id: 6,
    name: 'Audi',
    slang: 'Ауди'
  },
  {
    category_id: '4,10',
    cnt: 6,
    country_id: 0,
    eng: 'ausa',
    marka_id: 3488,
    name: 'Ausa',
    slang: 'Ауса'
  },
  {
    category_id: '3',
    cnt: 2,
    country_id: 0,
    eng: 'aventura',
    marka_id: 6269,
    name: 'Aventura',
    slang: null
  },
  {
    category_id: '5',
    cnt: 6,
    country_id: 0,
    eng: 'bador',
    marka_id: 5564,
    name: 'Bador',
    slang: 'Вадор'
  },
  {
    category_id: '3',
    cnt: 1,
    country_id: 0,
    eng: 'baglietto',
    marka_id: 6255,
    name: 'Baglietto',
    slang: null
  },
  {
    category_id: '2',
    cnt: 90,
    country_id: 0,
    eng: 'bajaj',
    marka_id: 3662,
    name: 'Bajaj',
    slang: 'Баджадж'
  },
  {
    category_id: '3',
    cnt: 1,
    country_id: 0,
    eng: 'baltic',
    marka_id: 6256,
    name: 'Baltic',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 8,
    country_id: 0,
    eng: 'balzer',
    marka_id: 5380,
    name: 'Balzer',
    slang: 'Бальзер'
  },
  {
    category_id: '2',
    cnt: 9,
    country_id: 158,
    eng: 'bashan',
    marka_id: 2431,
    name: 'Bashan',
    slang: 'Башан'
  },
  {
    category_id: '3',
    cnt: 28,
    country_id: 276,
    eng: 'bavaria',
    marka_id: 1239,
    name: 'Bavaria',
    slang: 'Бавария Яхтс'
  },
  {
    category_id: '3',
    cnt: 43,
    country_id: 840,
    eng: 'bayliner',
    marka_id: 1241,
    name: 'Bayliner',
    slang: 'Байлайнер'
  },
  {
    category_id: '4,10',
    cnt: 57,
    country_id: 0,
    eng: 'bednar',
    marka_id: 5445,
    name: 'Bednar',
    slang: 'Беднар'
  },
  {
    category_id: '2,3',
    cnt: 14,
    country_id: 380,
    eng: 'benelli',
    marka_id: 1020,
    name: 'Benelli',
    slang: 'Бенелли'
  },
  {
    category_id: '3',
    cnt: 1,
    country_id: 380,
    eng: 'benetti',
    marka_id: 2773,
    name: 'Benetti',
    slang: 'Бенетти'
  },
  {
    category_id: '1,3',
    cnt: 74,
    country_id: 826,
    eng: 'bentley',
    marka_id: 8,
    name: 'Bentley',
    slang: 'Бентли'
  },
  {
    category_id: '4',
    cnt: 2,
    country_id: 0,
    eng: 'beromet',
    marka_id: 5862,
    name: 'BeroMet',
    slang: null
  },
  {
    category_id: '1,2',
    cnt: 1027,
    country_id: 276,
    eng: 'bmw',
    marka_id: 9,
    name: 'BMW',
    slang: 'БМВ'
  },
  {
    category_id: '2,4,10',
    cnt: 4,
    country_id: 840,
    eng: 'bobcat',
    marka_id: 1618,
    name: 'Bobcat',
    slang: 'Бобкэт'
  },
  {
    category_id: '5',
    cnt: 84,
    country_id: 616,
    eng: 'bodex',
    marka_id: 1886,
    name: 'Bodex',
    slang: 'Бодекс'
  },
  {
    category_id: '1',
    cnt: 3,
    country_id: 840,
    eng: 'bollinger',
    marka_id: 6310,
    name: 'Bollinger',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 43,
    country_id: 276,
    eng: 'bomag',
    marka_id: 1952,
    name: 'Bomag',
    slang: 'Бомаг'
  },
  {
    category_id: '2,3',
    cnt: 1,
    country_id: 0,
    eng: 'bomber',
    marka_id: 1668,
    name: 'Bomber',
    slang: 'Бомбер'
  },
  {
    category_id: '4,10',
    cnt: 196,
    country_id: 616,
    eng: 'bomet',
    marka_id: 2464,
    name: 'Bomet',
    slang: 'Бомет'
  },
  {
    category_id: '4,10',
    cnt: 25,
    country_id: 0,
    eng: 'branson',
    marka_id: 3573,
    name: 'Branson',
    slang: 'Брэнсон'
  },
  {
    category_id: '2,3',
    cnt: 2,
    country_id: 804,
    eng: 'brig',
    marka_id: 1665,
    name: 'BRIG',
    slang: 'Бриг'
  },
  {
    category_id: '2,3',
    cnt: 556,
    country_id: 124,
    eng: 'brp',
    marka_id: 1471,
    name: 'BRP',
    slang: 'Бомбардир'
  },
  {
    category_id: '1',
    cnt: 3,
    country_id: 840,
    eng: 'buick',
    marka_id: 110,
    name: 'Buick',
    slang: 'Бьюик'
  },
  {
    category_id: '3',
    cnt: 6,
    country_id: 246,
    eng: 'buster',
    marka_id: 1660,
    name: 'Buster',
    slang: 'Бустер'
  },
  {
    category_id: '1',
    cnt: 2,
    country_id: 158,
    eng: 'byd',
    marka_id: 386,
    name: 'BYD',
    slang: 'БИД'
  },
  {
    category_id: '1',
    cnt: 2,
    country_id: 158,
    eng: 'byton',
    marka_id: 6260,
    name: 'Byton',
    slang: null
  },
  {
    category_id: '1',
    cnt: 20,
    country_id: 840,
    eng: 'cadillac',
    marka_id: 11,
    name: 'Cadillac',
    slang: 'Кадиллак'
  },
  {
    category_id: '4,10',
    cnt: 4,
    country_id: 0,
    eng: 'capello',
    marka_id: 3204,
    name: 'Capello',
    slang: 'Капелло'
  },
  {
    category_id: '4,10',
    cnt: 146,
    country_id: 840,
    eng: 'case',
    marka_id: 1588,
    name: 'Case',
    slang: 'Кейс'
  },
  {
    category_id: '4',
    cnt: 3,
    country_id: 0,
    eng: 'case-construction',
    marka_id: 55097,
    name: 'Case Construction',
    slang: null
  },
  {
    category_id: '4,6,10',
    cnt: 4,
    country_id: 840,
    eng: 'caterpillar',
    marka_id: 1589,
    name: 'Caterpillar',
    slang: 'Катерпиллер'
  },
  {
    category_id: '2',
    cnt: 61,
    country_id: 158,
    eng: 'cf-moto',
    marka_id: 1037,
    name: 'Cf moto',
    slang: 'СФ мото'
  },
  {
    category_id: '4,10',
    cnt: 3,
    country_id: 0,
    eng: 'chenggong',
    marka_id: 2418,
    name: 'ChengGong',
    slang: 'ЧенгГонг'
  },
  {
    category_id: '1,4,10',
    cnt: 720,
    country_id: 158,
    eng: 'chery',
    marka_id: 190,
    name: 'Chery',
    slang: 'Чери'
  },
  {
    category_id: '1,4,6,8',
    cnt: 96,
    country_id: 840,
    eng: 'chevrolet',
    marka_id: 13,
    name: 'Chevrolet',
    slang: 'Шевроле'
  },
  {
    category_id: '3',
    cnt: 20,
    country_id: 840,
    eng: 'chris-craft',
    marka_id: 1743,
    name: 'Chris-Craft',
    slang: 'Крис-крафт'
  },
  {
    category_id: '1',
    cnt: 1,
    country_id: 840,
    eng: 'chrysler',
    marka_id: 14,
    name: 'Chrysler',
    slang: 'Крайслер'
  },
  {
    category_id: '1,4,6,7,10',
    cnt: 1716,
    country_id: 250,
    eng: 'citroen',
    marka_id: 15,
    name: 'Citroen',
    slang: 'Ситроен'
  },
  {
    category_id: '4,10',
    cnt: 7,
    country_id: 0,
    eng: 'claas',
    marka_id: 1664,
    name: 'Claas',
    slang: 'Клаас'
  },
  {
    category_id: '4,10',
    cnt: 4,
    country_id: 0,
    eng: 'claus',
    marka_id: 3647,
    name: 'Claus',
    slang: 'Клаус'
  },
  {
    category_id: '10',
    cnt: 1,
    country_id: 0,
    eng: 'claydon',
    marka_id: 6265,
    name: 'Claydon',
    slang: null
  },
  {
    category_id: '2',
    cnt: 41,
    country_id: 0,
    eng: 'comman',
    marka_id: 3469,
    name: 'Comman',
    slang: 'Комман'
  },
  {
    category_id: '3',
    cnt: 2,
    country_id: 0,
    eng: 'corsair',
    marka_id: 5501,
    name: 'Corsair',
    slang: 'Корсаир'
  },
  {
    category_id: '3',
    cnt: 2,
    country_id: 380,
    eng: 'cranchi',
    marka_id: 2239,
    name: 'Cranchi',
    slang: 'Кранчи'
  },
  {
    category_id: '3',
    cnt: 11,
    country_id: 0,
    eng: 'crn',
    marka_id: 3871,
    name: 'CRN',
    slang: 'СРН'
  },
  {
    category_id: '2,4,10',
    cnt: 1,
    country_id: 0,
    eng: 'crosser',
    marka_id: 3026,
    name: 'Crosser',
    slang: 'Кроссер'
  },
  {
    category_id: '3',
    cnt: 18,
    country_id: 840,
    eng: 'crownline',
    marka_id: 1333,
    name: 'Crownline',
    slang: 'Кроунлайн'
  },
  {
    category_id: '3',
    cnt: 11,
    country_id: 276,
    eng: 'cruisers-yachts',
    marka_id: 3586,
    name: 'Cruisers Yachts',
    slang: 'Круизерс Яхтс'
  },
  {
    category_id: '4',
    cnt: 3,
    country_id: 0,
    eng: 'csm-tisovec',
    marka_id: 5861,
    name: 'CSM Tisovec',
    slang: null
  },
  {
    category_id: '2',
    cnt: 2,
    country_id: 0,
    eng: 'custom-culture-ukraine',
    marka_id: 5406,
    name: 'Custom Culture Ukraine',
    slang: 'Кустом Культуре Украине'
  },
  {
    category_id: '3',
    cnt: 8,
    country_id: 0,
    eng: 'custom-line',
    marka_id: 3867,
    name: 'Custom Line',
    slang: 'Кастом Лайн'
  },
  {
    category_id: '1,4,6,7,10',
    cnt: 19,
    country_id: 408,
    eng: 'daewoo',
    marka_id: 18,
    name: 'Daewoo',
    slang: 'Део'
  },
  {
    category_id: '6',
    cnt: 15,
    country_id: 0,
    eng: 'daewoo-trucks',
    marka_id: 6201,
    name: 'Daewoo Trucks',
    slang: null
  },
  {
    category_id: '1,4,6,7,8,10',
    cnt: 1,
    country_id: 528,
    eng: 'daf',
    marka_id: 115,
    name: 'DAF',
    slang: 'Даф'
  },
  {
    category_id: '10',
    cnt: 39,
    country_id: 0,
    eng: 'demetra',
    marka_id: 5901,
    name: 'Demetra',
    slang: 'Деметра'
  },
  {
    category_id: '4,10',
    cnt: 52,
    country_id: 0,
    eng: 'dieci',
    marka_id: 3020,
    name: 'Dieci',
    slang: 'Диечи'
  },
  {
    category_id: '2',
    cnt: 1,
    country_id: 0,
    eng: 'dirtbike',
    marka_id: 5066,
    name: 'Dirtbike',
    slang: 'Диртвике'
  },
  {
    category_id: '4,5',
    cnt: 4,
    country_id: 0,
    eng: 'dlagro',
    marka_id: 5747,
    name: 'DLagro',
    slang: null
  },
  {
    category_id: '1,6,7,8',
    cnt: 20,
    country_id: 840,
    eng: 'dodge',
    marka_id: 118,
    name: 'Dodge',
    slang: 'Додж'
  },
  {
    category_id: '5',
    cnt: 1,
    country_id: 0,
    eng: 'dogan',
    marka_id: 4422,
    name: 'Dogan',
    slang: 'Доган'
  },
  {
    category_id: '4,10',
    cnt: 5,
    country_id: 0,
    eng: 'dominoni',
    marka_id: 4461,
    name: 'Dominoni',
    slang: 'Доминони'
  },
  {
    category_id: '1,4,6,10',
    cnt: 168,
    country_id: 158,
    eng: 'dongfeng',
    marka_id: 308,
    name: 'Dongfeng',
    slang: 'Донг Фенг'
  },
  {
    category_id: '4,10',
    cnt: 11,
    country_id: 616,
    eng: 'dressta',
    marka_id: 3079,
    name: 'Dressta',
    slang: 'Дресста'
  },
  {
    category_id: '1',
    cnt: 21,
    country_id: 0,
    eng: 'ds',
    marka_id: 4495,
    name: 'DS',
    slang: 'ДС'
  },
  {
    category_id: '2',
    cnt: 99,
    country_id: 380,
    eng: 'ducati',
    marka_id: 1060,
    name: 'Ducati',
    slang: 'Дукати'
  },
  {
    category_id: '3',
    cnt: 13,
    country_id: 250,
    eng: 'dufour',
    marka_id: 1991,
    name: 'Dufour',
    slang: 'Дуфоур'
  },
  {
    category_id: '4,10',
    cnt: 138,
    country_id: 0,
    eng: 'dw',
    marka_id: 3507,
    name: 'DW',
    slang: 'ДВ'
  },
  {
    category_id: '2',
    cnt: 11,
    country_id: 0,
    eng: 'e-atv',
    marka_id: 3183,
    name: 'E - ATV',
    slang: 'Е - АТВ'
  },
  {
    category_id: '4',
    cnt: 1,
    country_id: 0,
    eng: 'elex',
    marka_id: 4497,
    name: 'ELEX',
    slang: null
  },
  {
    category_id: '3',
    cnt: 4,
    country_id: 0,
    eng: 'elling',
    marka_id: 4226,
    name: 'Elling',
    slang: 'Эллинг'
  },
  {
    category_id: '3',
    cnt: 2,
    country_id: 0,
    eng: 'eskapader',
    marka_id: 4877,
    name: 'Eskapader',
    slang: 'Эскападер'
  },
  {
    category_id: '3',
    cnt: 9,
    country_id: 804,
    eng: 'eurocrown',
    marka_id: 1635,
    name: 'Eurocrown',
    slang: 'Еврокроун'
  },
  {
    category_id: '4,5,10',
    cnt: 11,
    country_id: 0,
    eng: 'everlast',
    marka_id: 2827,
    name: 'Everlast',
    slang: 'Еверласт'
  },
  {
    category_id: '3',
    cnt: 19,
    country_id: 124,
    eng: 'evinrude',
    marka_id: 1596,
    name: 'Evinrude',
    slang: 'Эвинруд'
  },
  {
    category_id: '2',
    cnt: 2,
    country_id: 0,
    eng: 'exdrive',
    marka_id: 5067,
    name: 'Exdrive',
    slang: 'Эксдрыве'
  },
  {
    category_id: '2',
    cnt: 35,
    country_id: 158,
    eng: 'fada',
    marka_id: 1549,
    name: 'Fada',
    slang: 'Фада'
  },
  {
    category_id: '4,10',
    cnt: 39,
    country_id: 0,
    eng: 'faresin',
    marka_id: 2502,
    name: 'Faresin',
    slang: 'Фарезин'
  },
  {
    category_id: '4',
    cnt: 19,
    country_id: 0,
    eng: 'farm-lead',
    marka_id: 5875,
    name: 'Farm Lead',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 4,
    country_id: 0,
    eng: 'fast',
    marka_id: 5382,
    name: 'Fast',
    slang: null
  },
  {
    category_id: '1,4,6,10',
    cnt: 131,
    country_id: 158,
    eng: 'faw',
    marka_id: 121,
    name: 'FAW',
    slang: 'ФАВ'
  },
  {
    category_id: '1,4,10',
    cnt: 8,
    country_id: 380,
    eng: 'ferrari',
    marka_id: 22,
    name: 'Ferrari',
    slang: 'Феррари'
  },
  {
    category_id: '3',
    cnt: 17,
    country_id: 380,
    eng: 'ferretti',
    marka_id: 1625,
    name: 'Ferretti',
    slang: 'Ферретти'
  },
  {
    category_id: '1,4,6,7,8,10',
    cnt: 1122,
    country_id: 380,
    eng: 'fiat',
    marka_id: 23,
    name: 'Fiat',
    slang: 'Фиат'
  },
  {
    category_id: '3',
    cnt: 2,
    country_id: 0,
    eng: 'fiesta',
    marka_id: 4856,
    name: 'Fiesta',
    slang: null
  },
  {
    category_id: '3',
    cnt: 5,
    country_id: 804,
    eng: 'finval',
    marka_id: 1983,
    name: 'Finval',
    slang: 'Финвал'
  },
  {
    category_id: '4,10',
    cnt: 11,
    country_id: 0,
    eng: 'fiori',
    marka_id: 2242,
    name: 'Fiori',
    slang: 'Фиори'
  },
  {
    category_id: '3',
    cnt: 21,
    country_id: 840,
    eng: 'fisher',
    marka_id: 1675,
    name: 'Fisher',
    slang: 'Фишер'
  },
  {
    category_id: '1,4,6,7,8,10',
    cnt: 1973,
    country_id: 840,
    eng: 'ford',
    marka_id: 24,
    name: 'Ford',
    slang: 'Форд'
  },
  {
    category_id: '4,6',
    cnt: 44,
    country_id: 0,
    eng: 'ford-trucks',
    marka_id: 6030,
    name: 'Ford Trucks',
    slang: null
  },
  {
    category_id: '2,4,10',
    cnt: 64,
    country_id: 0,
    eng: 'forte',
    marka_id: 3164,
    name: 'Forte',
    slang: 'Форте'
  },
  {
    category_id: '2,4,6,10',
    cnt: 82,
    country_id: 0,
    eng: 'foton',
    marka_id: 187,
    name: 'Foton',
    slang: 'Фотон'
  },
  {
    category_id: '3',
    cnt: 15,
    country_id: 0,
    eng: 'fountaine-pajot',
    marka_id: 3503,
    name: 'Fountaine-Pajot',
    slang: 'Фонтен Пажо'
  },
  {
    category_id: '3',
    cnt: 46,
    country_id: 840,
    eng: 'four-winns',
    marka_id: 1600,
    name: 'Four Winns',
    slang: 'Фор Винс'
  },
  {
    category_id: '2',
    cnt: 5,
    country_id: 158,
    eng: 'foxwell',
    marka_id: 4210,
    name: 'FoxWell',
    slang: 'Фокс Велл'
  },
  {
    category_id: '4,10',
    cnt: 10,
    country_id: 32,
    eng: 'franco-fabril',
    marka_id: 4727,
    name: 'Franco Fabril',
    slang: null
  },
  {
    category_id: '3',
    cnt: 12,
    country_id: 0,
    eng: 'frauscher',
    marka_id: 4781,
    name: 'Frauscher',
    slang: null
  },
  {
    category_id: '10',
    cnt: 4,
    country_id: 0,
    eng: 'fugesen',
    marka_id: 6052,
    name: 'Fugesen',
    slang: null
  },
  {
    category_id: '3',
    cnt: 1,
    country_id: 0,
    eng: 'gala',
    marka_id: 5563,
    name: 'Gala',
    slang: 'Гала'
  },
  {
    category_id: '3',
    cnt: 26,
    country_id: 616,
    eng: 'galeon',
    marka_id: 3448,
    name: 'Galeon',
    slang: 'Галеон'
  },
  {
    category_id: '3',
    cnt: 14,
    country_id: 616,
    eng: 'galia',
    marka_id: 1609,
    name: 'Galia',
    slang: 'Галия'
  },
  {
    category_id: '3',
    cnt: 4,
    country_id: 0,
    eng: 'garcia',
    marka_id: 4900,
    name: 'Garcia',
    slang: 'Гарсиа'
  },
  {
    category_id: '4,10',
    cnt: 7,
    country_id: 0,
    eng: 'garden-scout',
    marka_id: 3634,
    name: 'Garden Scout',
    slang: 'Гарден Скаут'
  },
  {
    category_id: '1,2',
    cnt: 3,
    country_id: 158,
    eng: 'geely',
    marka_id: 185,
    name: 'Geely',
    slang: 'Джили'
  },
  {
    category_id: '4,10',
    cnt: 11,
    country_id: 0,
    eng: 'gehl',
    marka_id: 1689,
    name: 'Gehl',
    slang: 'Гихл'
  },
  {
    category_id: '3',
    cnt: 3,
    country_id: 0,
    eng: 'gelex',
    marka_id: 55092,
    name: 'Gelex',
    slang: null
  },
  {
    category_id: '2',
    cnt: 120,
    country_id: 0,
    eng: 'geon',
    marka_id: 1976,
    name: 'Geon',
    slang: 'Геон'
  },
  {
    category_id: '2,4,10',
    cnt: 1,
    country_id: 0,
    eng: 'gibbs',
    marka_id: 4058,
    name: 'Gibbs',
    slang: 'Гиббс'
  },
  {
    category_id: '3',
    cnt: 23,
    country_id: 840,
    eng: 'glastron',
    marka_id: 1329,
    name: 'Glastron',
    slang: 'Гластрон'
  },
  {
    category_id: '1,6',
    cnt: 7,
    country_id: 840,
    eng: 'gmc',
    marka_id: 123,
    name: 'GMC',
    slang: 'ДжиЭмСи'
  },
  {
    category_id: '4',
    cnt: 18,
    country_id: 0,
    eng: 'goodsense',
    marka_id: 3813,
    name: 'Goodsense',
    slang: 'Гудсенс'
  },
  {
    category_id: '4,10',
    cnt: 47,
    country_id: 840,
    eng: 'great-plains',
    marka_id: 2371,
    name: 'Great Plains',
    slang: 'Грейт Плейнс'
  },
  {
    category_id: '1,6',
    cnt: 2,
    country_id: 158,
    eng: 'great-wall',
    marka_id: 124,
    name: 'Great Wall',
    slang: 'Грейт Вол'
  },
  {
    category_id: '4,10',
    cnt: 2,
    country_id: 0,
    eng: 'gregoire-besson',
    marka_id: 2152,
    name: 'Gregoire-Besson',
    slang: 'Грегуар-Бессон'
  },
  {
    category_id: '4,10',
    cnt: 1,
    country_id: 0,
    eng: 'grosser',
    marka_id: 5362,
    name: 'Grosser',
    slang: 'Гроссер'
  },
  {
    category_id: '2',
    cnt: 11,
    country_id: 0,
    eng: 'hamer',
    marka_id: 2621,
    name: 'Hamer',
    slang: 'Хамер'
  },
  {
    category_id: '4,10',
    cnt: 4,
    country_id: 276,
    eng: 'hamm',
    marka_id: 1771,
    name: 'Hamm',
    slang: 'Хамм'
  },
  {
    category_id: '2',
    cnt: 10,
    country_id: 0,
    eng: 'hammer',
    marka_id: 2432,
    name: 'Hammer',
    slang: 'Хаммер'
  },
  {
    category_id: '2',
    cnt: 30,
    country_id: 840,
    eng: 'harley-davidson',
    marka_id: 1078,
    name: 'Harley-Davidson',
    slang: 'Харлей-Дэвидсон'
  },
  {
    category_id: '1',
    cnt: 225,
    country_id: 0,
    eng: 'haval',
    marka_id: 5456,
    name: 'Haval',
    slang: 'Хавал'
  },
  {
    category_id: '4,10',
    cnt: 23,
    country_id: 0,
    eng: 'hidromek',
    marka_id: 2193,
    name: 'Hidromek',
    slang: 'Гидромек'
  },
  {
    category_id: '2',
    cnt: 6,
    country_id: 0,
    eng: 'hisun',
    marka_id: 2468,
    name: 'Hisun',
    slang: 'Хисан'
  },
  {
    category_id: '1,2,3,4,9,10',
    cnt: 358,
    country_id: 392,
    eng: 'honda',
    marka_id: 28,
    name: 'Honda',
    slang: 'Хонда'
  },
  {
    category_id: '2,4,6',
    cnt: 6,
    country_id: 0,
    eng: 'hongda',
    marka_id: 3997,
    name: 'Hongda',
    slang: 'Хонгда'
  },
  {
    category_id: '6',
    cnt: 2,
    country_id: 158,
    eng: 'hongyan',
    marka_id: 55071,
    name: 'Hongyan',
    slang: null
  },
  {
    category_id: '2',
    cnt: 6,
    country_id: 0,
    eng: 'hornet',
    marka_id: 5542,
    name: 'Hornet',
    slang: 'Хорнет'
  },
  {
    category_id: '4',
    cnt: 4,
    country_id: 0,
    eng: 'horyong',
    marka_id: 6048,
    name: 'Horyong',
    slang: null
  },
  {
    category_id: '4,6,10',
    cnt: 21,
    country_id: 158,
    eng: 'howo',
    marka_id: 379,
    name: 'Howo',
    slang: 'Хово'
  },
  {
    category_id: '5',
    cnt: 302,
    country_id: 276,
    eng: 'humbaur',
    marka_id: 1868,
    name: 'Humbaur',
    slang: 'Хумбаур'
  },
  {
    category_id: '2,3',
    cnt: 3,
    country_id: 840,
    eng: 'hunter',
    marka_id: 2384,
    name: 'Hunter',
    slang: 'Хантер'
  },
  {
    category_id: '2,4,10',
    cnt: 3,
    country_id: 380,
    eng: 'husqvarna',
    marka_id: 1085,
    name: 'Husqvarna',
    slang: 'Хускварна'
  },
  {
    category_id: '4',
    cnt: 9,
    country_id: 0,
    eng: 'hydramet',
    marka_id: 6008,
    name: 'Hydramet',
    slang: null
  },
  {
    category_id: '2',
    cnt: 4,
    country_id: 408,
    eng: 'hyosung',
    marka_id: 1086,
    name: 'Hyosung',
    slang: 'Хьюсонг'
  },
  {
    category_id: '1,4,6,7,10',
    cnt: 2558,
    country_id: 408,
    eng: 'hyundai',
    marka_id: 29,
    name: 'Hyundai',
    slang: 'Хюндай'
  },
  {
    category_id: '4,10',
    cnt: 1,
    country_id: 0,
    eng: 'hyva',
    marka_id: 3926,
    name: 'HYVA',
    slang: 'Хува'
  },
  {
    category_id: '3',
    cnt: 2,
    country_id: 0,
    eng: 'iaqua',
    marka_id: 6300,
    name: 'iAqua',
    slang: null
  },
  {
    category_id: '2',
    cnt: 16,
    country_id: 840,
    eng: 'indian',
    marka_id: 1087,
    name: 'Indian',
    slang: 'Индиан'
  },
  {
    category_id: '1',
    cnt: 240,
    country_id: 392,
    eng: 'infiniti',
    marka_id: 128,
    name: 'Infiniti',
    slang: 'Инфинити'
  },
  {
    category_id: '1,2,4,6,7,10',
    cnt: 56,
    country_id: 392,
    eng: 'isuzu',
    marka_id: 30,
    name: 'Isuzu',
    slang: 'Исузу'
  },
  {
    category_id: '3',
    cnt: 7,
    country_id: 0,
    eng: 'itama',
    marka_id: 5131,
    name: 'Itama',
    slang: null
  },
  {
    category_id: '1,4,5,6,7,8,10',
    cnt: 33,
    country_id: 380,
    eng: 'iveco',
    marka_id: 175,
    name: 'Iveco',
    slang: 'Ивеко'
  },
  {
    category_id: '1,4,6,7,10',
    cnt: 165,
    country_id: 158,
    eng: 'jac',
    marka_id: 317,
    name: 'JAC',
    slang: 'Джак'
  },
  {
    category_id: '1,3',
    cnt: 415,
    country_id: 826,
    eng: 'jaguar',
    marka_id: 31,
    name: 'Jaguar',
    slang: 'Ягуар'
  },
  {
    category_id: '4,10',
    cnt: 3,
    country_id: 0,
    eng: 'jar-met',
    marka_id: 3767,
    name: 'Jar-Met',
    slang: 'Яр-Мет'
  },
  {
    category_id: '1,4,10',
    cnt: 11,
    country_id: 826,
    eng: 'jcb',
    marka_id: 1590,
    name: 'JCB',
    slang: 'ДжиСиБи'
  },
  {
    category_id: '3',
    cnt: 112,
    country_id: 250,
    eng: 'jeanneau',
    marka_id: 2777,
    name: 'Jeanneau',
    slang: 'Дженну '
  },
  {
    category_id: '1',
    cnt: 88,
    country_id: 840,
    eng: 'jeep',
    marka_id: 32,
    name: 'Jeep',
    slang: 'Джип'
  },
  {
    category_id: '1',
    cnt: 47,
    country_id: 0,
    eng: 'jetour',
    marka_id: 55069,
    name: 'Jetour',
    slang: null
  },
  {
    category_id: '2',
    cnt: 12,
    country_id: 158,
    eng: 'jianshe',
    marka_id: 1093,
    name: 'Jianshe',
    slang: 'Джианше'
  },
  {
    category_id: '4,10',
    cnt: 97,
    country_id: 158,
    eng: 'jinma',
    marka_id: 1586,
    name: 'Jinma',
    slang: 'Джинма'
  },
  {
    category_id: '2,4,10',
    cnt: 15,
    country_id: 840,
    eng: 'john-deere',
    marka_id: 1583,
    name: 'John Deere',
    slang: 'Джон Дир'
  },
  {
    category_id: '2',
    cnt: 1,
    country_id: 158,
    eng: 'kanuni',
    marka_id: 1100,
    name: 'Kanuni',
    slang: 'Кануни'
  },
  {
    category_id: '4,5',
    cnt: 39,
    country_id: 276,
    eng: 'kassbohrer',
    marka_id: 1870,
    name: 'Kassbohrer',
    slang: 'Кассбохрер'
  },
  {
    category_id: '2,3,4,10',
    cnt: 82,
    country_id: 392,
    eng: 'kawasaki',
    marka_id: 176,
    name: 'Kawasaki',
    slang: 'Кавасаки'
  },
  {
    category_id: '2',
    cnt: 21,
    country_id: 0,
    eng: 'kayo',
    marka_id: 2352,
    name: 'Kayo',
    slang: 'Кайо'
  },
  {
    category_id: '1,6,7',
    cnt: 2238,
    country_id: 408,
    eng: 'kia',
    marka_id: 33,
    name: 'Kia',
    slang: 'КИА'
  },
  {
    category_id: '2',
    cnt: 1,
    country_id: 0,
    eng: 'kinlon',
    marka_id: 3192,
    name: 'Kinlon',
    slang: 'Кинлон'
  },
  {
    category_id: '2,4,10',
    cnt: 13,
    country_id: 0,
    eng: 'kioti',
    marka_id: 3429,
    name: 'Kioti',
    slang: 'Киоти'
  },
  {
    category_id: '10',
    cnt: 1,
    country_id: 0,
    eng: 'klepper',
    marka_id: 6144,
    name: 'Klepper',
    slang: null
  },
  {
    category_id: '5',
    cnt: 3,
    country_id: 0,
    eng: 'knott',
    marka_id: 1962,
    name: 'Knott',
    slang: 'Кнотт'
  },
  {
    category_id: '4,5,10',
    cnt: 3,
    country_id: 0,
    eng: 'kobit',
    marka_id: 5151,
    name: 'Kobit',
    slang: 'Кобит'
  },
  {
    category_id: '3',
    cnt: 9,
    country_id: 804,
    eng: 'kolibri-kolibri',
    marka_id: 2016,
    name: 'Kolibri (Колибри)',
    slang: 'Колибри'
  },
  {
    category_id: '2',
    cnt: 38,
    country_id: 0,
    eng: 'kovi',
    marka_id: 5939,
    name: 'Kovi',
    slang: null
  },
  {
    category_id: '2',
    cnt: 59,
    country_id: 40,
    eng: 'ktm',
    marka_id: 1104,
    name: 'KTM',
    slang: 'КТМ'
  },
  {
    category_id: '4,10',
    cnt: 4,
    country_id: 392,
    eng: 'kubota',
    marka_id: 1697,
    name: 'Kubota',
    slang: 'Кубота'
  },
  {
    category_id: '4,10',
    cnt: 170,
    country_id: 0,
    eng: 'kuhn',
    marka_id: 2633,
    name: 'Kuhn',
    slang: 'Кун'
  },
  {
    category_id: '2',
    cnt: 7,
    country_id: 0,
    eng: 'kv',
    marka_id: 3814,
    name: 'Kv',
    slang: 'Кв'
  },
  {
    category_id: '2,3',
    cnt: 2,
    country_id: 156,
    eng: 'kymco',
    marka_id: 1105,
    name: 'Kymco',
    slang: 'Кимко'
  },
  {
    category_id: '1',
    cnt: 486,
    country_id: 643,
    eng: 'lada',
    marka_id: 5553,
    name: 'Lada',
    slang: 'Лада'
  },
  {
    category_id: '1,4,10',
    cnt: 40,
    country_id: 380,
    eng: 'lamborghini',
    marka_id: 35,
    name: 'Lamborghini',
    slang: 'Ламборджини'
  },
  {
    category_id: '1,6',
    cnt: 890,
    country_id: 826,
    eng: 'land-rover',
    marka_id: 37,
    name: 'Land Rover',
    slang: 'Ленд ровер'
  },
  {
    category_id: '4,10',
    cnt: 1,
    country_id: 276,
    eng: 'lemken',
    marka_id: 1758,
    name: 'Lemken',
    slang: 'Лемкен'
  },
  {
    category_id: '1',
    cnt: 351,
    country_id: 392,
    eng: 'lexus',
    marka_id: 38,
    name: 'Lexus',
    slang: 'Лексус'
  },
  {
    category_id: '4',
    cnt: 4,
    country_id: 0,
    eng: 'lgmg',
    marka_id: 4502,
    name: 'LGMG',
    slang: 'ЛГМГ'
  },
  {
    category_id: '4,5,10',
    cnt: 9,
    country_id: 0,
    eng: 'lider',
    marka_id: 4842,
    name: 'Lider',
    slang: 'Лидер'
  },
  {
    category_id: '1,2,7',
    cnt: 95,
    country_id: 158,
    eng: 'lifan',
    marka_id: 334,
    name: 'Lifan',
    slang: 'Лифан'
  },
  {
    category_id: '1',
    cnt: 14,
    country_id: 840,
    eng: 'lincoln',
    marka_id: 135,
    name: 'Lincoln',
    slang: 'Линкольн'
  },
  {
    category_id: '2',
    cnt: 88,
    country_id: 158,
    eng: 'linhai',
    marka_id: 1109,
    name: 'Linhai',
    slang: 'Линхай'
  },
  {
    category_id: '4,10',
    cnt: 8,
    country_id: 0,
    eng: 'lisicki',
    marka_id: 5627,
    name: 'Lisicki',
    slang: 'Лисички'
  },
  {
    category_id: '4,10',
    cnt: 72,
    country_id: 158,
    eng: 'liugong',
    marka_id: 1767,
    name: 'LiuGong',
    slang: 'ЛиуГонг'
  },
  {
    category_id: '4',
    cnt: 6,
    country_id: 0,
    eng: 'locust',
    marka_id: 3108,
    name: 'Locust',
    slang: 'Локуст'
  },
  {
    category_id: '2',
    cnt: 65,
    country_id: 0,
    eng: 'loncin',
    marka_id: 2026,
    name: 'Loncin',
    slang: 'Лонкин'
  },
  {
    category_id: '1',
    cnt: 2,
    country_id: 826,
    eng: 'lotus',
    marka_id: 41,
    name: 'Lotus',
    slang: 'Лотус'
  },
  {
    category_id: '4,6,10',
    cnt: 179,
    country_id: 0,
    eng: 'lovol',
    marka_id: 4222,
    name: 'Lovol',
    slang: 'Ловол'
  },
  {
    category_id: '4,10',
    cnt: 7,
    country_id: 0,
    eng: 'ls-mtron',
    marka_id: 5409,
    name: 'LS Mtron',
    slang: 'ЛС Мтрон'
  },
  {
    category_id: '4,10',
    cnt: 33,
    country_id: 0,
    eng: 'ls-tractor',
    marka_id: 5602,
    name: 'LS Tractor',
    slang: 'ЛС Трактор'
  },
  {
    category_id: '1',
    cnt: 3,
    country_id: 840,
    eng: 'lucid',
    marka_id: 6317,
    name: 'Lucid',
    slang: null
  },
  {
    category_id: '2',
    cnt: 1,
    country_id: 0,
    eng: 'lz',
    marka_id: 3923,
    name: 'LZ',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 18,
    country_id: 0,
    eng: 'macdon',
    marka_id: 5375,
    name: 'MacDon',
    slang: null
  },
  {
    category_id: '4',
    cnt: 14,
    country_id: 0,
    eng: 'madrog',
    marka_id: 5695,
    name: 'Madrog',
    slang: null
  },
  {
    category_id: '3',
    cnt: 9,
    country_id: 840,
    eng: 'malibu',
    marka_id: 1744,
    name: 'Malibu',
    slang: 'катер Малибу'
  },
  {
    category_id: '4,6,7,10',
    cnt: 64,
    country_id: 276,
    eng: 'man',
    marka_id: 177,
    name: 'MAN',
    slang: 'МАН'
  },
  {
    category_id: '3,4,10',
    cnt: 35,
    country_id: 250,
    eng: 'manitou',
    marka_id: 1778,
    name: 'Manitou',
    slang: 'Маниту'
  },
  {
    category_id: '3',
    cnt: 10,
    country_id: 0,
    eng: 'marex',
    marka_id: 5365,
    name: 'Marex',
    slang: null
  },
  {
    category_id: '1',
    cnt: 48,
    country_id: 380,
    eng: 'maserati',
    marka_id: 45,
    name: 'Maserati',
    slang: 'Мазерати'
  },
  {
    category_id: '4,10',
    cnt: 7,
    country_id: 826,
    eng: 'massey-ferguson',
    marka_id: 1614,
    name: 'Massey Ferguson',
    slang: 'Массей Фергюсон'
  },
  {
    category_id: '2',
    cnt: 4,
    country_id: 0,
    eng: 'maxxter',
    marka_id: 5488,
    name: 'Maxxter',
    slang: null
  },
  {
    category_id: '1,6,7',
    cnt: 1297,
    country_id: 392,
    eng: 'mazda',
    marka_id: 47,
    name: 'Mazda',
    slang: 'Мазда'
  },
  {
    category_id: '4,10',
    cnt: 10,
    country_id: 0,
    eng: 'mcfarlane',
    marka_id: 4855,
    name: 'McFarlane',
    slang: 'МкФарлане'
  },
  {
    category_id: '1',
    cnt: 3,
    country_id: 826,
    eng: 'mclaren',
    marka_id: 3101,
    name: 'McLaren',
    slang: 'МакЛарен'
  },
  {
    category_id: '5',
    cnt: 5,
    country_id: 0,
    eng: 'mek',
    marka_id: 55120,
    name: 'MEK',
    slang: null
  },
  {
    category_id: '1,4,6,7,8,10',
    cnt: 3500,
    country_id: 276,
    eng: 'mercedes-benz',
    marka_id: 48,
    name: 'Mercedes-Benz',
    slang: 'Мерседес Бенц'
  },
  {
    category_id: '1,3',
    cnt: 97,
    country_id: 840,
    eng: 'mercury',
    marka_id: 144,
    name: 'Mercury',
    slang: 'Меркури'
  },
  {
    category_id: '1,2',
    cnt: 6,
    country_id: 826,
    eng: 'mini',
    marka_id: 147,
    name: 'MINI',
    slang: 'МИНИ'
  },
  {
    category_id: '4,10',
    cnt: 7,
    country_id: 0,
    eng: 'minidiger',
    marka_id: 5387,
    name: 'Minidiger',
    slang: 'Минидигер'
  },
  {
    category_id: '1,4,6,7,10',
    cnt: 1119,
    country_id: 392,
    eng: 'mitsubishi',
    marka_id: 52,
    name: 'Mitsubishi',
    slang: 'Митсубиси'
  },
  {
    category_id: '2',
    cnt: 1,
    country_id: 0,
    eng: 'monster',
    marka_id: 6209,
    name: 'Monster',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 4,
    country_id: 0,
    eng: 'mst',
    marka_id: 3754,
    name: 'MST',
    slang: 'МСТ'
  },
  {
    category_id: '4,10',
    cnt: 3,
    country_id: 0,
    eng: 'multione',
    marka_id: 3851,
    name: 'Multione',
    slang: 'Мультионе'
  },
  {
    category_id: '2',
    cnt: 86,
    country_id: 0,
    eng: 'musstang',
    marka_id: 1565,
    name: 'Musstang',
    slang: 'Мустанг'
  },
  {
    category_id: '4,10',
    cnt: 2,
    country_id: 0,
    eng: 'mx',
    marka_id: 5383,
    name: 'MX',
    slang: 'МКС'
  },
  {
    category_id: '3',
    cnt: 7,
    country_id: 0,
    eng: 'nautitech',
    marka_id: 3671,
    name: 'Nautitech',
    slang: 'Наутитеч'
  },
  {
    category_id: '2,3',
    cnt: 3,
    country_id: 804,
    eng: 'navigator',
    marka_id: 1552,
    name: 'Navigator',
    slang: 'Навигатор'
  },
  {
    category_id: '3',
    cnt: 4,
    country_id: 0,
    eng: 'neel',
    marka_id: 3673,
    name: 'NEEL',
    slang: 'НИЛ'
  },
  {
    category_id: '2,4,10',
    cnt: 37,
    country_id: 380,
    eng: 'new-holland',
    marka_id: 1696,
    name: 'New Holland',
    slang: 'Нью Холланд'
  },
  {
    category_id: '1,3,4,5,6,7,10',
    cnt: 1788,
    country_id: 392,
    eng: 'nissan',
    marka_id: 55,
    name: 'Nissan',
    slang: 'Ниссан'
  },
  {
    category_id: '5',
    cnt: 22,
    country_id: 0,
    eng: 'nursan',
    marka_id: 4425,
    name: 'Nursan',
    slang: 'Нурсан'
  },
  {
    category_id: '7',
    cnt: 3,
    country_id: 0,
    eng: 'oghab',
    marka_id: 4465,
    name: 'Oghab',
    slang: 'Огхаб'
  },
  {
    category_id: '3',
    cnt: 2,
    country_id: 0,
    eng: 'oki-boats',
    marka_id: 5139,
    name: 'Oki Boats',
    slang: 'Оки Боатс'
  },
  {
    category_id: '4,10',
    cnt: 4,
    country_id: 0,
    eng: 'olimac',
    marka_id: 2749,
    name: 'Olimac',
    slang: 'ОЛимак'
  },
  {
    category_id: '3',
    cnt: 1,
    country_id: 0,
    eng: 'olympia',
    marka_id: 5346,
    name: 'Olympia',
    slang: 'Олимпия'
  },
  {
    category_id: '1,4,6,7,8,10',
    cnt: 449,
    country_id: 276,
    eng: 'opel',
    marka_id: 56,
    name: 'Opel',
    slang: 'Опель'
  },
  {
    category_id: '2,4,10',
    cnt: 62,
    country_id: 0,
    eng: 'orion',
    marka_id: 3591,
    name: 'Orion',
    slang: 'Орион'
  },
  {
    category_id: '4',
    cnt: 19,
    country_id: 0,
    eng: 'osa',
    marka_id: 6233,
    name: 'OSA',
    slang: null
  },
  {
    category_id: '7',
    cnt: 6,
    country_id: 0,
    eng: 'otokar',
    marka_id: 2575,
    name: 'Otokar',
    slang: 'Отокар'
  },
  {
    category_id: '3',
    cnt: 3,
    country_id: 0,
    eng: 'outremer',
    marka_id: 3670,
    name: 'Outremer',
    slang: 'Аутремер'
  },
  {
    category_id: '5',
    cnt: 1,
    country_id: 0,
    eng: 'ozgul',
    marka_id: 3481,
    name: 'Ozgul',
    slang: 'Озгул'
  },
  {
    category_id: '5',
    cnt: 7,
    country_id: 0,
    eng: 'ozunlu',
    marka_id: 3278,
    name: 'Ozunlu',
    slang: 'Озунлу'
  },
  {
    category_id: '3',
    cnt: 38,
    country_id: 0,
    eng: 'parker',
    marka_id: 4490,
    name: 'Parker',
    slang: 'Паркер'
  },
  {
    category_id: '3',
    cnt: 39,
    country_id: 0,
    eng: 'parsun',
    marka_id: 2322,
    name: 'Parsun',
    slang: 'Парсун'
  },
  {
    category_id: '3',
    cnt: 14,
    country_id: 0,
    eng: 'pershing',
    marka_id: 3864,
    name: 'Pershing',
    slang: 'Першинг'
  },
  {
    category_id: '4,10',
    cnt: 15,
    country_id: 0,
    eng: 'petronick',
    marka_id: 1831,
    name: 'PetroNick',
    slang: 'ПетроНик'
  },
  {
    category_id: '1,2,4,6,7,8,10',
    cnt: 3553,
    country_id: 250,
    eng: 'peugeot',
    marka_id: 58,
    name: 'Peugeot',
    slang: 'Пежо'
  },
  {
    category_id: '2',
    cnt: 1,
    country_id: 0,
    eng: 'pocket',
    marka_id: 6210,
    name: 'Pocket',
    slang: null
  },
  {
    category_id: '2',
    cnt: 2,
    country_id: 0,
    eng: 'pocket-bike',
    marka_id: 4738,
    name: 'Pocket bike',
    slang: null
  },
  {
    category_id: '2,3',
    cnt: 127,
    country_id: 840,
    eng: 'polaris',
    marka_id: 1231,
    name: 'Polaris',
    slang: 'Поларис'
  },
  {
    category_id: '1',
    cnt: 2,
    country_id: 0,
    eng: 'polestar',
    marka_id: 6131,
    name: 'Polestar',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 7,
    country_id: 0,
    eng: 'polmark',
    marka_id: 4886,
    name: 'Polmark',
    slang: null
  },
  {
    category_id: '1',
    cnt: 557,
    country_id: 276,
    eng: 'porsche',
    marka_id: 59,
    name: 'Porsche',
    slang: 'Порше'
  },
  {
    category_id: '4,10',
    cnt: 2,
    country_id: 0,
    eng: 'pottinger',
    marka_id: 3310,
    name: 'Pottinger',
    slang: 'Потингер'
  },
  {
    category_id: '10',
    cnt: 1,
    country_id: 0,
    eng: 'power',
    marka_id: 6097,
    name: 'Power',
    slang: null
  },
  {
    category_id: '5',
    cnt: 242,
    country_id: 0,
    eng: 'pragmatec',
    marka_id: 5031,
    name: 'Pragmatec',
    slang: null
  },
  {
    category_id: '3',
    cnt: 16,
    country_id: 0,
    eng: 'prestige-yachts',
    marka_id: 4620,
    name: 'Prestige Yachts',
    slang: null
  },
  {
    category_id: '4',
    cnt: 35,
    country_id: 0,
    eng: 'primetech',
    marka_id: 5509,
    name: 'PrimeTech',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 16,
    country_id: 0,
    eng: 'pronar',
    marka_id: 2955,
    name: 'Pronar',
    slang: 'Пронар'
  },
  {
    category_id: '1',
    cnt: 440,
    country_id: 860,
    eng: 'ravon',
    marka_id: 4681,
    name: 'Ravon',
    slang: 'Равон'
  },
  {
    category_id: '1,4,6,7,8,10',
    cnt: 5859,
    country_id: 250,
    eng: 'renault',
    marka_id: 62,
    name: 'Renault',
    slang: 'Рено'
  },
  {
    category_id: '4',
    cnt: 1,
    country_id: 0,
    eng: 'retech',
    marka_id: 5549,
    name: 'Retech',
    slang: 'Ретечь'
  },
  {
    category_id: '1',
    cnt: 1,
    country_id: 0,
    eng: 'rezvani',
    marka_id: 4466,
    name: 'Rezvani',
    slang: 'Резвани'
  },
  {
    category_id: '3',
    cnt: 6,
    country_id: 0,
    eng: 'rio',
    marka_id: 1722,
    name: 'Rio',
    slang: 'Рио авто'
  },
  {
    category_id: '3',
    cnt: 24,
    country_id: 0,
    eng: 'riva',
    marka_id: 3542,
    name: 'Riva',
    slang: 'Рива'
  },
  {
    category_id: '1',
    cnt: 2,
    country_id: 840,
    eng: 'rivian',
    marka_id: 6227,
    name: 'Rivian',
    slang: null
  },
  {
    category_id: '4',
    cnt: 27,
    country_id: 0,
    eng: 'roadway',
    marka_id: 5390,
    name: 'Roadway',
    slang: 'Роадвай'
  },
  {
    category_id: '1',
    cnt: 27,
    country_id: 826,
    eng: 'rolls-royce',
    marka_id: 63,
    name: 'Rolls-Royce',
    slang: 'Ролс ройс'
  },
  {
    category_id: '3',
    cnt: 2,
    country_id: 840,
    eng: 'rover-boat',
    marka_id: 55072,
    name: 'Rover Boat',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 2,
    country_id: 0,
    eng: 'rxyk',
    marka_id: 5045,
    name: 'RXYK',
    slang: 'РКсИК'
  },
  {
    category_id: '4,10',
    cnt: 4,
    country_id: 0,
    eng: 'samasz',
    marka_id: 3559,
    name: 'SaMASZ',
    slang: 'Самаш'
  },
  {
    category_id: '3',
    cnt: 3,
    country_id: 0,
    eng: 'saxdor',
    marka_id: 55091,
    name: 'Saxdor',
    slang: null
  },
  {
    category_id: '4,6,7,10',
    cnt: 4,
    country_id: 752,
    eng: 'scania',
    marka_id: 203,
    name: 'Scania',
    slang: 'Скания'
  },
  {
    category_id: '3',
    cnt: 14,
    country_id: 0,
    eng: 'scarab',
    marka_id: 4881,
    name: 'Scarab',
    slang: 'Скараб'
  },
  {
    category_id: '5',
    cnt: 22,
    country_id: 276,
    eng: 'schmitz-cargobull',
    marka_id: 1877,
    name: 'Schmitz Cargobull',
    slang: 'Шмитц'
  },
  {
    category_id: '4,10',
    cnt: 49,
    country_id: 0,
    eng: 'sdlg',
    marka_id: 3755,
    name: 'SDLG',
    slang: 'СДЛГ'
  },
  {
    category_id: '3',
    cnt: 3,
    country_id: 0,
    eng: 'sealver',
    marka_id: 5428,
    name: 'Sealver',
    slang: 'Сеалвер'
  },
  {
    category_id: '1',
    cnt: 309,
    country_id: 724,
    eng: 'seat',
    marka_id: 67,
    name: 'SEAT',
    slang: 'Сеат'
  },
  {
    category_id: '2',
    cnt: 1,
    country_id: 0,
    eng: 'senke',
    marka_id: 5272,
    name: 'Senke',
    slang: 'Сенке'
  },
  {
    category_id: '3',
    cnt: 27,
    country_id: 380,
    eng: 'sessa-marine',
    marka_id: 1249,
    name: 'Sessa Marine',
    slang: 'Сесса Марине'
  },
  {
    category_id: '10',
    cnt: 1,
    country_id: 0,
    eng: 'sf',
    marka_id: 6278,
    name: 'SF',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 25,
    country_id: 0,
    eng: 'sfoggia',
    marka_id: 2430,
    name: 'Sfoggia',
    slang: 'Сфоджия '
  },
  {
    category_id: '4,10',
    cnt: 15,
    country_id: 158,
    eng: 'shantui',
    marka_id: 1785,
    name: 'Shantui',
    slang: 'Шантуй'
  },
  {
    category_id: '4,10',
    cnt: 9,
    country_id: 0,
    eng: 'shehwa',
    marka_id: 1783,
    name: 'Shehwa',
    slang: 'Шехва'
  },
  {
    category_id: '4,10',
    cnt: 132,
    country_id: 0,
    eng: 'shifeng',
    marka_id: 3612,
    name: 'Shifeng',
    slang: 'Шифенг'
  },
  {
    category_id: '2',
    cnt: 117,
    country_id: 158,
    eng: 'shineray',
    marka_id: 1572,
    name: 'Shineray',
    slang: 'Шанрай'
  },
  {
    category_id: '4',
    cnt: 4,
    country_id: 0,
    eng: 'sinoway',
    marka_id: 5510,
    name: 'Sinoway',
    slang: 'Синовай'
  },
  {
    category_id: '4,10',
    cnt: 8,
    country_id: 0,
    eng: 'sipma',
    marka_id: 2880,
    name: 'Sipma',
    slang: 'Сипма'
  },
  {
    category_id: '1,4,6,10',
    cnt: 2515,
    country_id: 203,
    eng: 'skoda',
    marka_id: 70,
    name: 'Skoda',
    slang: 'Шкода'
  },
  {
    category_id: '2',
    cnt: 58,
    country_id: 0,
    eng: 'skybike',
    marka_id: 4230,
    name: 'SkyBike',
    slang: 'СкайБайк'
  },
  {
    category_id: '2,5',
    cnt: 11,
    country_id: 158,
    eng: 'skymoto',
    marka_id: 1555,
    name: 'SkyMoto',
    slang: 'СкайМото'
  },
  {
    category_id: '1,2',
    cnt: 2,
    country_id: 276,
    eng: 'smart',
    marka_id: 71,
    name: 'Smart',
    slang: 'Смарт'
  },
  {
    category_id: '2',
    cnt: 9,
    country_id: 0,
    eng: 'smartway',
    marka_id: 4690,
    name: 'SmartWay',
    slang: null
  },
  {
    category_id: '2',
    cnt: 4,
    country_id: 0,
    eng: 'snowmax',
    marka_id: 4766,
    name: 'SNOWMAX',
    slang: null
  },
  {
    category_id: '7',
    cnt: 17,
    country_id: 616,
    eng: 'solaris',
    marka_id: 4514,
    name: 'Solaris',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 95,
    country_id: 0,
    eng: 'solis',
    marka_id: 5675,
    name: 'Solis',
    slang: null
  },
  {
    category_id: '2',
    cnt: 3,
    country_id: 0,
    eng: 'soul',
    marka_id: 1853,
    name: 'Soul',
    slang: 'Соул'
  },
  {
    category_id: '2',
    cnt: 69,
    country_id: 158,
    eng: 'spark',
    marka_id: 1554,
    name: 'Spark',
    slang: 'Спарк'
  },
  {
    category_id: '2',
    cnt: 2,
    country_id: 0,
    eng: 'sparta',
    marka_id: 5935,
    name: 'Sparta',
    slang: null
  },
  {
    category_id: '2',
    cnt: 7,
    country_id: 158,
    eng: 'speed-gear',
    marka_id: 1553,
    name: 'Speed Gear',
    slang: 'Спид Гир'
  },
  {
    category_id: '2',
    cnt: 5,
    country_id: 158,
    eng: 'sport-energy',
    marka_id: 2584,
    name: 'Sport Energy',
    slang: 'Спорт Енерджи'
  },
  {
    category_id: '3',
    cnt: 32,
    country_id: 0,
    eng: 'stingray',
    marka_id: 1643,
    name: 'Stingray',
    slang: 'Стингрей'
  },
  {
    category_id: '1',
    cnt: 302,
    country_id: 392,
    eng: 'subaru',
    marka_id: 75,
    name: 'Subaru',
    slang: 'Субару'
  },
  {
    category_id: '1',
    cnt: 2,
    country_id: 0,
    eng: 'suda-hanen',
    marka_id: 55068,
    name: 'Suda Hanen',
    slang: null
  },
  {
    category_id: '3',
    cnt: 16,
    country_id: 840,
    eng: 'sun-tracker',
    marka_id: 1657,
    name: 'Sun Tracker',
    slang: 'Сан Тракер'
  },
  {
    category_id: '3',
    cnt: 2,
    country_id: 826,
    eng: 'sunseeker',
    marka_id: 1718,
    name: 'Sunseeker',
    slang: 'Сансикер'
  },
  {
    category_id: '1,2,3,6',
    cnt: 1076,
    country_id: 392,
    eng: 'suzuki',
    marka_id: 76,
    name: 'Suzuki',
    slang: 'Cузуки'
  },
  {
    category_id: '2',
    cnt: 26,
    country_id: 0,
    eng: 'sym',
    marka_id: 2176,
    name: 'Sym',
    slang: 'Сим'
  },
  {
    category_id: '5',
    cnt: 26,
    country_id: 0,
    eng: 'tad',
    marka_id: 3322,
    name: 'TAD',
    slang: 'ТАД'
  },
  {
    category_id: '3',
    cnt: 13,
    country_id: 840,
    eng: 'tahoe',
    marka_id: 1733,
    name: 'Tahoe',
    slang: 'Тахое'
  },
  {
    category_id: '1,4,6,7,10',
    cnt: 21,
    country_id: 356,
    eng: 'tata',
    marka_id: 78,
    name: 'TATA',
    slang: 'ТАТА'
  },
  {
    category_id: '1,4,6,10',
    cnt: 11,
    country_id: 203,
    eng: 'tatra',
    marka_id: 204,
    name: 'Tatra',
    slang: 'Татра'
  },
  {
    category_id: '4',
    cnt: 2,
    country_id: 0,
    eng: 'tdc',
    marka_id: 5534,
    name: 'TDC',
    slang: 'ТДЦ'
  },
  {
    category_id: '7',
    cnt: 8,
    country_id: 792,
    eng: 'temsa',
    marka_id: 403,
    name: 'Temsa',
    slang: 'Темза авто'
  },
  {
    category_id: '4',
    cnt: 35,
    country_id: 0,
    eng: 'teren',
    marka_id: 5385,
    name: 'Teren',
    slang: 'Терен'
  },
  {
    category_id: '4,6,10',
    cnt: 4,
    country_id: 840,
    eng: 'terex',
    marka_id: 2102,
    name: 'Terex',
    slang: 'Терекс'
  },
  {
    category_id: '1,6,8',
    cnt: 44,
    country_id: 840,
    eng: 'tesla',
    marka_id: 2233,
    name: 'Tesla',
    slang: 'Тесла'
  },
  {
    category_id: '2',
    cnt: 11,
    country_id: 0,
    eng: 'tgb',
    marka_id: 1775,
    name: 'TGB',
    slang: 'ТГБ'
  },
  {
    category_id: '3',
    cnt: 97,
    country_id: 392,
    eng: 'tohatsu',
    marka_id: 1680,
    name: 'Tohatsu',
    slang: 'Тохатсу'
  },
  {
    category_id: '4,10',
    cnt: 4,
    country_id: 0,
    eng: 'top-air',
    marka_id: 4542,
    name: 'Top Air',
    slang: 'Топ Аир'
  },
  {
    category_id: '1,3,4,6,7,8,10',
    cnt: 2813,
    country_id: 392,
    eng: 'toyota',
    marka_id: 79,
    name: 'Toyota',
    slang: 'Тойота'
  },
  {
    category_id: '3',
    cnt: 33,
    country_id: 840,
    eng: 'tracker',
    marka_id: 1717,
    name: 'Tracker',
    slang: 'Трекер'
  },
  {
    category_id: '4,10',
    cnt: 1,
    country_id: 792,
    eng: 'tumosan',
    marka_id: 5925,
    name: 'Tumosan',
    slang: null
  },
  {
    category_id: '4,5',
    cnt: 4,
    country_id: 0,
    eng: 'tur',
    marka_id: 6007,
    name: 'TUR',
    slang: null
  },
  {
    category_id: '2',
    cnt: 2,
    country_id: 804,
    eng: 'ugbest',
    marka_id: 4531,
    name: 'UGBEST',
    slang: 'ЮВЕСТ'
  },
  {
    category_id: '4',
    cnt: 4,
    country_id: 0,
    eng: 'unverferth',
    marka_id: 5381,
    name: 'Unverferth',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 3,
    country_id: 0,
    eng: 'vaderstad',
    marka_id: 2024,
    name: 'Vaderstad',
    slang: 'Вадерштад'
  },
  {
    category_id: '2',
    cnt: 20,
    country_id: 0,
    eng: 'ventus',
    marka_id: 3951,
    name: 'Ventus',
    slang: 'Вентус'
  },
  {
    category_id: '5',
    cnt: 4,
    country_id: 0,
    eng: 'verda',
    marka_id: 4913,
    name: 'Verda',
    slang: null
  },
  {
    category_id: '2',
    cnt: 1,
    country_id: 380,
    eng: 'vespa',
    marka_id: 1199,
    name: 'Vespa',
    slang: 'Веспа'
  },
  {
    category_id: '2,4,10',
    cnt: 2,
    country_id: 840,
    eng: 'victory',
    marka_id: 2474,
    name: 'Victory',
    slang: 'Виктори'
  },
  {
    category_id: '2,3,10',
    cnt: 14,
    country_id: 158,
    eng: 'viper',
    marka_id: 1201,
    name: 'Viper',
    slang: 'Вайпер'
  },
  {
    category_id: '4,10',
    cnt: 5,
    country_id: 276,
    eng: 'vogele',
    marka_id: 1883,
    name: 'Vogele',
    slang: 'Фогель'
  },
  {
    category_id: '7',
    cnt: 2,
    country_id: 0,
    eng: 'volat',
    marka_id: 6001,
    name: 'Volat',
    slang: null
  },
  {
    category_id: '1,4,6,7,8,10',
    cnt: 2894,
    country_id: 276,
    eng: 'volkswagen',
    marka_id: 84,
    name: 'Volkswagen',
    slang: 'Фольксваген'
  },
  {
    category_id: '1,3,4,6,7,10',
    cnt: 1047,
    country_id: 752,
    eng: 'volvo',
    marka_id: 85,
    name: 'Volvo',
    slang: 'Вольво'
  },
  {
    category_id: '4,10',
    cnt: 2,
    country_id: 124,
    eng: 'westfield',
    marka_id: 4761,
    name: 'Westfield',
    slang: 'Вестфилд'
  },
  {
    category_id: '5',
    cnt: 3,
    country_id: 616,
    eng: 'wielton',
    marka_id: 1921,
    name: 'Wielton',
    slang: 'Виелтон'
  },
  {
    category_id: '2',
    cnt: 1,
    country_id: 0,
    eng: 'wild-horses',
    marka_id: 4950,
    name: 'Wild Horses',
    slang: 'Вилд Хорсес'
  },
  {
    category_id: '3',
    cnt: 5,
    country_id: 0,
    eng: 'williams',
    marka_id: 4386,
    name: 'Williams',
    slang: 'Уильямс'
  },
  {
    category_id: '3',
    cnt: 25,
    country_id: 528,
    eng: 'wim-van-der-valk',
    marka_id: 3747,
    name: 'Wim van der Valk',
    slang: 'Вим ван дер Валк'
  },
  {
    category_id: '4',
    cnt: 45,
    country_id: 0,
    eng: 'winsense',
    marka_id: 6232,
    name: 'Winsense',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 36,
    country_id: 0,
    eng: 'wirax',
    marka_id: 3835,
    name: 'Wirax',
    slang: 'Виракс'
  },
  {
    category_id: '4,10',
    cnt: 3,
    country_id: 0,
    eng: 'wishek',
    marka_id: 5378,
    name: 'Wishek',
    slang: 'Вышек'
  },
  {
    category_id: '2',
    cnt: 1,
    country_id: 0,
    eng: 'wmotion',
    marka_id: 5108,
    name: 'Wmotion',
    slang: 'Шмотион'
  },
  {
    category_id: '10',
    cnt: 2,
    country_id: 0,
    eng: 'wuzheng',
    marka_id: 6094,
    name: 'Wuzheng',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 12,
    country_id: 0,
    eng: 'xgma',
    marka_id: 4154,
    name: 'XGMA',
    slang: 'ХГМА'
  },
  {
    category_id: '2',
    cnt: 3,
    country_id: 0,
    eng: 'xiaomi',
    marka_id: 5107,
    name: 'Xiaomi',
    slang: 'Ксиаоми'
  },
  {
    category_id: '2',
    cnt: 18,
    country_id: 0,
    eng: 'yadea',
    marka_id: 5479,
    name: 'Yadea',
    slang: 'Ядеа'
  },
  {
    category_id: '2,3,4,10',
    cnt: 271,
    country_id: 392,
    eng: 'yamaha',
    marka_id: 179,
    name: 'Yamaha',
    slang: 'Ямаха'
  },
  {
    category_id: '3',
    cnt: 2,
    country_id: 0,
    eng: 'yamarin',
    marka_id: 3743,
    name: 'Yamarin',
    slang: 'Ямарин'
  },
  {
    category_id: '2',
    cnt: 36,
    country_id: 0,
    eng: 'ycf',
    marka_id: 4563,
    name: 'YCF',
    slang: 'ИКФ'
  },
  {
    category_id: '4,10',
    cnt: 19,
    country_id: 0,
    eng: 'yetter',
    marka_id: 4935,
    name: 'Yetter',
    slang: 'Йеттер'
  },
  {
    category_id: '2',
    cnt: 5,
    country_id: 158,
    eng: 'yiben',
    marka_id: 2560,
    name: 'YiBen',
    slang: 'Ибен'
  },
  {
    category_id: '4,10',
    cnt: 19,
    country_id: 0,
    eng: 'yto',
    marka_id: 1957,
    name: 'YTO',
    slang: 'ИТО'
  },
  {
    category_id: '4,10',
    cnt: 44,
    country_id: 0,
    eng: 'zetor',
    marka_id: 1740,
    name: 'Zetor',
    slang: 'Зетор'
  },
  {
    category_id: '3,9',
    cnt: 2,
    country_id: 0,
    eng: 'zodiac',
    marka_id: 2758,
    name: 'Zodiac',
    slang: 'Зодиак'
  },
  {
    category_id: '2',
    cnt: 4,
    country_id: 0,
    eng: 'zontes',
    marka_id: 4272,
    name: 'Zontes',
    slang: 'Зонтес'
  },
  {
    category_id: '4,10',
    cnt: 67,
    country_id: 158,
    eng: 'zoomlion',
    marka_id: 2568,
    name: 'Zoomlion',
    slang: 'Зумлион'
  },
  {
    category_id: '4,10',
    cnt: 7,
    country_id: 0,
    eng: 'zot',
    marka_id: 5438,
    name: 'ZOT',
    slang: 'ЗОТ'
  },
  {
    category_id: '2,4,10',
    cnt: 28,
    country_id: 0,
    eng: 'zubr',
    marka_id: 2426,
    name: 'Zubr',
    slang: 'Зубр'
  },
  {
    category_id: '4,10',
    cnt: 4,
    country_id: 0,
    eng: 'avrora',
    marka_id: 3412,
    name: 'Аврора',
    slang: 'Аврора'
  },
  {
    category_id: '4,10',
    cnt: 111,
    country_id: 0,
    eng: 'agris',
    marka_id: 5402,
    name: 'Агрис',
    slang: 'Агрис'
  },
  {
    category_id: '4,10',
    cnt: 45,
    country_id: 0,
    eng: 'agromash-kalina',
    marka_id: 4764,
    name: 'АГРОМАШ-КАЛИНА',
    slang: 'АГРОМАШ-КАЛИНА'
  },
  {
    category_id: '4,5,10',
    cnt: 130,
    country_id: 112,
    eng: 'amkodor',
    marka_id: 1833,
    name: 'Амкодор',
    slang: 'Амкодор'
  },
  {
    category_id: '4,5,10',
    cnt: 1,
    country_id: 0,
    eng: 'ams',
    marka_id: 2587,
    name: 'АМС',
    slang: 'Эй Ми Си'
  },
  {
    category_id: '4,5,6,7',
    cnt: 34,
    country_id: 804,
    eng: 'baz',
    marka_id: 326,
    name: 'БАЗ',
    slang: 'БАЗ авто'
  },
  {
    category_id: '3,4,10',
    cnt: 6,
    country_id: 0,
    eng: 'bars',
    marka_id: 2526,
    name: 'Барс',
    slang: 'Барс'
  },
  {
    category_id: '4,5,10',
    cnt: 1,
    country_id: 0,
    eng: 'beloczerkovmaz',
    marka_id: 3531,
    name: 'БелоцерковМАЗ',
    slang: 'БцМаз'
  },
  {
    category_id: '4,10',
    cnt: 22,
    country_id: 0,
    eng: 'berdyanskaya-skht',
    marka_id: 5451,
    name: 'Бердянская схт',
    slang: null
  },
  {
    category_id: '4,5,10',
    cnt: 70,
    country_id: 643,
    eng: 'bmz',
    marka_id: 3318,
    name: 'БМЗ',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 12,
    country_id: 643,
    eng: 'bobrujskagromash',
    marka_id: 3355,
    name: 'Бобруйскагромаш',
    slang: 'Бобруйскагромаш'
  },
  {
    category_id: '1,4,6,7,10',
    cnt: 17,
    country_id: 804,
    eng: 'bogdan',
    marka_id: 188,
    name: 'Богдан',
    slang: 'Bogdan'
  },
  {
    category_id: '4,10',
    cnt: 11,
    country_id: 0,
    eng: 'boguslavskaya-skht',
    marka_id: 5448,
    name: 'Богуславская схт',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 169,
    country_id: 804,
    eng: 'boreks-borex',
    marka_id: 1591,
    name: 'БОРЭКС (Borex)',
    slang: 'Boreks'
  },
  {
    category_id: '4,5,10',
    cnt: 3,
    country_id: 0,
    eng: 'bryanskij-arsenal',
    marka_id: 2014,
    name: 'Брянский Арсенал',
    slang: 'техника Брянский Арсенал'
  },
  {
    category_id: '4,10',
    cnt: 124,
    country_id: 0,
    eng: 'bulat',
    marka_id: 3216,
    name: 'Булат',
    slang: 'Булат'
  },
  {
    category_id: '1,5,6',
    cnt: 6,
    country_id: 643,
    eng: 'vaz',
    marka_id: 88,
    name: 'ВАЗ',
    slang: 'Лада'
  },
  {
    category_id: '4,10',
    cnt: 249,
    country_id: 0,
    eng: 'veles-agro',
    marka_id: 3066,
    name: 'Велес-Агро',
    slang: 'Велес-Агро'
  },
  {
    category_id: '4,10',
    cnt: 1,
    country_id: 158,
    eng: 'vityaz',
    marka_id: 2538,
    name: 'Витязь',
    slang: 'Витязь'
  },
  {
    category_id: '3',
    cnt: 3,
    country_id: 0,
    eng: 'volna',
    marka_id: 2511,
    name: 'Волна',
    slang: 'Волна'
  },
  {
    category_id: '1,4,5,6,7,10',
    cnt: 1129,
    country_id: 643,
    eng: 'gaz',
    marka_id: 91,
    name: 'ГАЗ',
    slang: 'GAZ'
  },
  {
    category_id: '2',
    cnt: 3,
    country_id: 0,
    eng: 'gerkules',
    marka_id: 6135,
    name: 'Геркулес',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 3,
    country_id: 0,
    eng: 'dobrynya',
    marka_id: 2064,
    name: 'Добрыня',
    slang: 'авто Добрыня'
  },
  {
    category_id: '4,5',
    cnt: 15,
    country_id: 0,
    eng: 'dormashekspo',
    marka_id: 5936,
    name: 'ДорМашЭкспо',
    slang: null
  },
  {
    category_id: '2,4,5,10',
    cnt: 201,
    country_id: 0,
    eng: 'dtz',
    marka_id: 3351,
    name: 'ДТЗ',
    slang: 'ДТЗ'
  },
  {
    category_id: '4',
    cnt: 4,
    country_id: 0,
    eng: 'evromash',
    marka_id: 6010,
    name: 'ЕвроМаш',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 32,
    country_id: 0,
    eng: 'zhm',
    marka_id: 4825,
    name: 'ЖМ',
    slang: 'ЖМ'
  },
  {
    category_id: '1,4,5,7',
    cnt: 85,
    country_id: 804,
    eng: 'zaz',
    marka_id: 89,
    name: 'ЗАЗ',
    slang: 'ZAZ'
  },
  {
    category_id: '4,5,6,10',
    cnt: 23,
    country_id: 643,
    eng: 'kamaz',
    marka_id: 97,
    name: 'КамАЗ',
    slang: 'KAMAZ'
  },
  {
    category_id: '4,5,10',
    cnt: 15,
    country_id: 643,
    eng: 'kentavr',
    marka_id: 2100,
    name: 'Кентавр',
    slang: 'Кентавр'
  },
  {
    category_id: '5',
    cnt: 65,
    country_id: 0,
    eng: 'kiyashko',
    marka_id: 3179,
    name: 'Кияшко',
    slang: 'Кияшко'
  },
  {
    category_id: '10',
    cnt: 39,
    country_id: 0,
    eng: 'krasz',
    marka_id: 6095,
    name: 'КрАСЗ',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 12,
    country_id: 0,
    eng: 'krasilovagromash',
    marka_id: 5083,
    name: 'Красиловагромаш',
    slang: 'Красиловагромаш'
  },
  {
    category_id: '4,10',
    cnt: 32,
    country_id: 804,
    eng: 'krasnaya-zvezda',
    marka_id: 2942,
    name: 'Красная звезда',
    slang: 'Красная звезда'
  },
  {
    category_id: '5',
    cnt: 10,
    country_id: 643,
    eng: 'kremen',
    marka_id: 2132,
    name: 'Кремень',
    slang: 'Кремень'
  },
  {
    category_id: '5',
    cnt: 5,
    country_id: 0,
    eng: 'kreon',
    marka_id: 3950,
    name: 'Креон',
    slang: 'Креон'
  },
  {
    category_id: '4,10',
    cnt: 1,
    country_id: 112,
    eng: 'krn',
    marka_id: 2822,
    name: 'КРН',
    slang: 'КРН'
  },
  {
    category_id: '5,8',
    cnt: 3,
    country_id: 643,
    eng: 'kupava',
    marka_id: 2062,
    name: 'Купава',
    slang: 'Купава'
  },
  {
    category_id: '4,5,10',
    cnt: 168,
    country_id: 0,
    eng: 'lozovskie-mashiny',
    marka_id: 5342,
    name: 'Лозовские машины',
    slang: 'Лозовские машины'
  },
  {
    category_id: '4,5,6,7,10',
    cnt: 1127,
    country_id: 112,
    eng: 'maz',
    marka_id: 159,
    name: 'МАЗ',
    slang: 'MAZ'
  },
  {
    category_id: '4',
    cnt: 1,
    country_id: 0,
    eng: 'mozyrmash',
    marka_id: 6009,
    name: 'МозырМаш',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 12,
    country_id: 0,
    eng: 'mp-lybid',
    marka_id: 5306,
    name: 'МП Лыбидь',
    slang: 'МП Лыбидь'
  },
  {
    category_id: '4,10',
    cnt: 205,
    country_id: 112,
    eng: 'mtz',
    marka_id: 1584,
    name: 'МТЗ',
    slang: 'MT-3'
  },
  {
    category_id: '5',
    cnt: 1,
    country_id: 0,
    eng: 'npp-palych',
    marka_id: 2180,
    name: 'НПП Палыч',
    slang: 'НПП Палыч'
  },
  {
    category_id: '4',
    cnt: 36,
    country_id: 0,
    eng: 'olnova',
    marka_id: 5389,
    name: 'Олнова',
    slang: 'Олнова'
  },
  {
    category_id: '6,7',
    cnt: 41,
    country_id: 643,
    eng: 'paz',
    marka_id: 156,
    name: 'ПАЗ',
    slang: 'PAZ'
  },
  {
    category_id: '4,9,10',
    cnt: 1,
    country_id: 0,
    eng: 'po',
    marka_id: 3963,
    name: 'ПО',
    slang: null
  },
  {
    category_id: '1,5',
    cnt: 35,
    country_id: 0,
    eng: 'pricep',
    marka_id: 154,
    name: 'Прицеп',
    slang: 'Прицеп'
  },
  {
    category_id: '4',
    cnt: 48,
    country_id: 0,
    eng: 'promagrolizing-plyus',
    marka_id: 5823,
    name: 'Промагролизинг плюс',
    slang: null
  },
  {
    category_id: '4,5,10',
    cnt: 6,
    country_id: 0,
    eng: 'ps',
    marka_id: 3246,
    name: 'ПС',
    slang: 'ПС'
  },
  {
    category_id: '4,5,10',
    cnt: 1,
    country_id: 804,
    eng: 'pts',
    marka_id: 2714,
    name: 'ПТС',
    slang: 'ПТС'
  },
  {
    category_id: '4,10',
    cnt: 5,
    country_id: 804,
    eng: 'remsintez',
    marka_id: 4554,
    name: 'Ремсинтез',
    slang: null
  },
  {
    category_id: '5',
    cnt: 79,
    country_id: 0,
    eng: 'santej',
    marka_id: 1882,
    name: 'Сантей',
    slang: 'прицеп Сантей'
  },
  {
    category_id: '4,10',
    cnt: 102,
    country_id: 158,
    eng: 'sintaj-xingtai',
    marka_id: 1760,
    name: 'Синтай (XINGTAI)',
    slang: 'Синтай'
  },
  {
    category_id: '4,10',
    cnt: 10,
    country_id: 0,
    eng: 'skaut',
    marka_id: 5686,
    name: 'Скаут',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 4,
    country_id: 0,
    eng: 'stz',
    marka_id: 5736,
    name: 'СТЗ',
    slang: null
  },
  {
    category_id: '4,10',
    cnt: 2,
    country_id: 0,
    eng: 'supn',
    marka_id: 2413,
    name: 'СУПН',
    slang: 'СУПН'
  },
  {
    category_id: '5,10',
    cnt: 2,
    country_id: 0,
    eng: 'titan',
    marka_id: 1914,
    name: 'Титан',
    slang: 'прицеп TITAN'
  },
  {
    category_id: '1,5,6,7',
    cnt: 181,
    country_id: 643,
    eng: 'uaz',
    marka_id: 93,
    name: 'УАЗ',
    slang: 'UAZ'
  },
  {
    category_id: '4,5,10',
    cnt: 72,
    country_id: 0,
    eng: 'umanfermmash',
    marka_id: 3315,
    name: 'Уманьферммаш',
    slang: 'Уманьферммаш'
  },
  {
    category_id: '4,10',
    cnt: 103,
    country_id: 0,
    eng: 'favorit',
    marka_id: 4375,
    name: 'Фаворит',
    slang: 'Фаворит'
  },
  {
    category_id: '4,10',
    cnt: 14,
    country_id: 0,
    eng: 'fajter',
    marka_id: 4638,
    name: 'Файтер',
    slang: 'Файтер'
  },
  {
    category_id: '3',
    cnt: 2,
    country_id: 0,
    eng: 'flint',
    marka_id: 2122,
    name: 'Флинт',
    slang: 'лодка Флинт'
  },
  {
    category_id: '4,5,10',
    cnt: 9,
    country_id: 0,
    eng: 'khersonmash',
    marka_id: 3441,
    name: 'Херсонмаш',
    slang: 'Херсонмаш'
  },
  {
    category_id: '4,10',
    cnt: 13,
    country_id: 0,
    eng: 'khmelnikselmash',
    marka_id: 3646,
    name: 'Хмельниксельмаш',
    slang: 'Хмельниксельмаш'
  },
  {
    category_id: '4,5,10',
    cnt: 4,
    country_id: 804,
    eng: 'khtz',
    marka_id: 1610,
    name: 'ХТЗ',
    slang: 'HTZ'
  },
  {
    category_id: '4,10',
    cnt: 12,
    country_id: 0,
    eng: 'chp-bartoschuk',
    marka_id: 5048,
    name: 'ЧП Бартощук',
    slang: 'ЧП Бартощук'
  },
  {
    category_id: '3',
    cnt: 3,
    country_id: 0,
    eng: 'shmel',
    marka_id: 5230,
    name: 'Шмель',
    slang: 'Шмель'
  },
  {
    category_id: '3',
    cnt: 1,
    country_id: 804,
    eng: 'yuzhanka',
    marka_id: 1611,
    name: 'Южанка',
    slang: 'Yujanka'
  }
];

module.exports = BRANDS;
