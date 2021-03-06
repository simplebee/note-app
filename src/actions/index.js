import { FETCH_NOTES, FETCH_NOTE, CREATE_NOTE, DELETE_NOTE } from './action-types';
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

export function fetchNote(id) {
  const request = axios.get(`${apiUrl}/${id}`, {
    params: {
      key: apiKey
    }
  });

  return {
    type: FETCH_NOTE,
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

export function deleteNote(id, callback) {
  axios.delete(`${apiUrl}/${id}`, {
    params: {
      key: apiKey
    }
  })
    .then(function(res) {
      callback();
    });

  return {
    type: DELETE_NOTE,
    payload: id
  };
}