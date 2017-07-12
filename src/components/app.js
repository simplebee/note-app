import React from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import NotesIndex from './notes-index';
import NotesNew from './notes-new';
import NotesShow from './notes-show';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/notes/new" component={NotesNew}/>
        <Route path="/notes/:id" component={NotesShow}/>
        <Route path="/" component={NotesIndex}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;