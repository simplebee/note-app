import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import notes from './reducer-notes';

const rootReducer = combineReducers({
  notes,
  form: formReducer
});

export default rootReducer;