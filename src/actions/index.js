import { FETCH_NOTES } from './action-types';
import axios from 'axios';

export function fetchNotes() {
  const apiUrl = 'http://reduxblog.herokuapp.com/api/posts';
  const request = axios.get(apiUrl, {
    params: {
      key: process.env.REACT_APP_API_KEY
    }
  });

  return {
    type: FETCH_NOTES,
    payload: request
  };
}