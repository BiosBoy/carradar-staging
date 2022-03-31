const colorNormalizer = (color) => {
  const COLORS_PALETTE_UA = {
    чорний: 'Black',
    голубий: 'Blue',
    сірий: 'Gray',
    зелений: 'Green',
    оливковий: 'Olive',
    фіолетовий: 'Purple',
    червоний: 'Red',
    срібний: 'Silver',
    білий: 'White',
    жовтий: 'Yellow'
  };

  return COLORS_PALETTE_UA[color] || 'White';
};

module.exports = colorNormalizer;
