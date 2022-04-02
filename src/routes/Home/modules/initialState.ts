import { IStore } from '../interfaces/IStore';

const initialState: IStore = {
  searchCarNumber: null,
  carData: {
    image: null,
    mainData: null,
    collectedData: null
  },
  statuses: {
    isSearchError: false,
    isSearchInProgress: false
  },
  error: null
};

export default initialState;
