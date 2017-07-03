import { FETCH_NOTES } from '../actions/action-types';
import _ from 'lodash';

export default function notes(state = {}, action) {
  switch (action.type) {
    case FETCH_NOTES:
      return _.keyBy(action.payload.data, 'id');
    default:
      return state;
  }
}