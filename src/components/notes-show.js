import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNote, deleteNote } from '../actions'

import { Grid, Button } from 'react-bootstrap';

class NotesShow extends Component {

  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchNote(id);
  }

  handleDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deleteNote(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { note } = this.props;

    if (!note) {
      return (<div>Loading...</div>);
    }

    return (
      <Grid>
        <Button bsStyle="danger" className="pull-right" onClick={this.handleDeleteClick}>Delete</Button>
        <h3>{note.title}</h3>
        <h5>Categories: {note.categories}</h5>
        <p>{note.content}</p>
        <Link to="/">Back to home</Link>
      </Grid>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    note: state.notes[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, { fetchNote, deleteNote })(NotesShow);