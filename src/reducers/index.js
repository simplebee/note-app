import { combineReducers } from 'redux';
import notes from './reducer-notes';

const rootReducer = combineReducers({
  notes
});

export default rootReducer;