import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NotesIndex from './notes-index';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={NotesIndex}/>
      </div>
    </BrowserRouter>
  );
}

export default App;