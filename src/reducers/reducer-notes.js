import { FETCH_NOTES, FETCH_NOTE, DELETE_NOTE } from '../actions/action-types';
import _ from 'lodash';

export default function notes(state = {}, action) {
  switch (action.type) {
    case FETCH_NOTES:
      return _.keyBy(action.payload.data, 'id');
    case FETCH_NOTE:
      return { [action.payload.data.id]: action.payload.data, ...state };
    case DELETE_NOTE:
      const newState = state;
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}