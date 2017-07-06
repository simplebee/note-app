import { FETCH_NOTES } from './action-types';
import { CREATE_NOTE } from './action-types';
import axios from 'axios';

const apiUrl = 'http://reduxblog.herokuapp.com/api/posts';
const apiKey = process.env.REACT_APP_API_KEY;

export function fetchNotes() {
  const request = axios.get(apiUrl, {
    params: {
      key: apiKey
    }
  });

  return {
    type: FETCH_NOTES,
    payload: request
  };
}

export function createNote(data, callback) {
  axios.post(apiUrl, data, {
    params: {
      key: apiKey
    }
  })
    .then(function(res) {
      callback();
    });

  return {
    type: CREATE_NOTE
  };
}