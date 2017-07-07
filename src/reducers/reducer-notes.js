import { FETCH_NOTES, FETCH_NOTE } from '../actions/action-types';
import _ from 'lodash';

export default function notes(state = {}, action) {
  switch (action.type) {
    case FETCH_NOTES:
      return _.keyBy(action.payload.data, 'id');
    case FETCH_NOTE:
      return { [action.payload.data.id]: action.payload.data, ...state };
    default:
      return state;
  }
}