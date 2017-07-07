import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchNotes } from '../actions';

import { Grid, ListGroup, ListGroupItem } from 'react-bootstrap';

class NotesIndex extends Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  renderNotes() {
    return _.map(this.props.notes, (note) => {
      return (
        <ListGroupItem key={note.id}>{note.title}</ListGroupItem>
      );
    });
  }

  render() {
    return (
      <Grid>
        <Link to="/notes/new" className="btn btn-primary pull-right">
          Add a Note
        </Link>
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