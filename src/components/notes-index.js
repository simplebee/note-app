import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchNotes } from '../actions';
import _ from 'lodash';
import { Grid, ListGroup, ListGroupItem, Button} from 'react-bootstrap';

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
        <Button className="pull-right">
          <Link to="/notes/new">Add a Note</Link>
        </Button>
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