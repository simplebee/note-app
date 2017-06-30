import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NotesIndex from './notes-index';
import { Grid } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Grid>
        <Route path="/" component={NotesIndex}/>
      </Grid>
    </BrowserRouter>
  );
}

export default App;