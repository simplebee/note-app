import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { fetchNote } from '../actions'

import { Grid, Button } from 'react-bootstrap';

class NotesShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchNote(id);
  }

  render() {
    const { note } = this.props;

    if (!note) {
      return (<div>Loading...</div>);
    }

    return (
      <Grid>
        <Link to="/">Back to home</Link>
        <Button bsStyle="danger" className="pull-right">Delete</Button>
        <h3>{note.title}</h3>
        <p>{note.categories}</p>
        <p>{note.content}</p>
      </Grid>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    note: state.notes[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, { fetchNote })(NotesShow);