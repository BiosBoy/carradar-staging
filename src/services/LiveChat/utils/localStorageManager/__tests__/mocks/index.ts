export default {
  storeKey: 'test',
  storeData: {
    test: 'object'
  }
};

const updatedStore = {
  storeKey: 'str',
  storeData: {
    test: 'test_string'
  }
};

const addToObject = {
  storeKey: 'testObject',
  storeData: {
    test: 'string'
  }
};

const addToArray = {
  storeKey: 'testArray',
  storeData: ['test']
};

const removeFromObject = {
  storeKey: 'testObject',
  storeData: {
    test: 'value'
  }
};

const removeFromArray = {
  storeKey: 'testObjectArray',
  storeData: [
    {
      test: 'value'
    },
    {
      test: 'value2'
    }
  ]
};

const removeFromArrayString = {
  storeKey: 'testObject',
  storeData: ['test']
};

export const notExistsState = {
  storeKey: 'testNoxExistsDataKey'
};

export const falseState = {
  storeKey: 'falseStateTestDataKey',
  storeData: false
};

export const zeroNumberState = {
  storeKey: 'zeroNumberStateTestDataKey',
  storeData: 0
};

export { updatedStore, addToObject, addToArray, removeFromObject, removeFromArray, removeFromArrayString };
