const getModelCode = ({ modelsList, modelName }) => {
  const currentModel = modelsList.find((brand) => brand?.name?.toLowerCase() === modelName.toLowerCase());

  return currentModel || 'undefined';
};

module.exports = getModelCode;
