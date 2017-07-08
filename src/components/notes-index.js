import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import _ from 'lodash';
import { fetchNotes } from '../actions';

import { Grid, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

class NotesIndex extends Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  renderNotes() {
    return _.map(this.props.notes, (note) => {
      return (
         <LinkContainer to={`/notes/${note.id}`}>
          <ListGroupItem key={note.id}>{note.title}</ListGroupItem>
        </LinkContainer>
      );
    });
  }

  render() {
    return (
      <Grid>
        <LinkContainer to="/notes/new" className="pull-right">
          <Button bsStyle="primary">Add a Note</Button>
        </LinkContainer>
        <h3>Notes</h3>
        <ListGroup>{this.renderNotes()}</ListGroup>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {notes: state.notes};
}

export default connect(mapStateToProps, { fetchNotes })(NotesIndex);