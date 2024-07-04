// src/redux/store.ts
import { createStore, combineReducers } from 'redux';

// Create a root reducer
const rootReducer = combineReducers({
  // Add your reducers here
});

// Create the store
const store = createStore(rootReducer);

export default store;
