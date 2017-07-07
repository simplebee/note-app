import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNote } from '../actions'

import { Grid } from 'react-bootstrap';

class NotesShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchNote(id);
  }

  render() {
    console.log(this.props.note);
    return (
      <Grid>show</Grid>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    note: state.notes[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, { fetchNote })(NotesShow);