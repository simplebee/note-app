import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';

class NotesIndex extends Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div>
        Index
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {notes: state.notes};
}

export default connect(mapStateToProps, { fetchNotes })(NotesIndex);