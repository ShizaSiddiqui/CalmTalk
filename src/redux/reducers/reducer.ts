// src/redux/reducer.ts
import { combineReducers } from 'redux';

// Create a sample reducer
const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export default combineReducers({
  counter: counterReducer,
});
