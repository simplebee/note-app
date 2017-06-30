import React from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import NotesIndex from './notes-index';
import NotesNew from './notes-new';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/notes/new" component={NotesNew}/>
        <Route path="/" component={NotesIndex}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;