import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { createNote } from '../actions';

import { Grid, FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';

class NotesNew extends Component {

  onSubmit(values) {
    this.props.createNote(values, () => {
      this.props.history.push('/');
    });
  }

  renderField(field) {
    const { input, meta: { error, touched }, htmlElement, type, placeholder, label, id } = field;
    const validationState = touched && error ? "error" : null;

    return (
      <FormGroup controlId={id} validationState={validationState}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          {...input}
          componentClass={htmlElement}
          type={type}
          placeholder={placeholder}
        />
        <FormControl.Feedback />
        {touched && (error && <HelpBlock>{error}</HelpBlock>)}
      </FormGroup>
    );
  }
  
  render() {
    const { handleSubmit } = this.props;

    return (
      <Grid>
        <h3>Add Note</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="title"
            component={this.renderField}
            htmlElement="input"
            type="text"
            label="Title"
            id="input-title"
          />
          <Field
            name="categories"
            component={this.renderField}
            htmlElement="input"
            type="text"
            label="Categories"
            id="input-categories"
          />
          <Field
            name="content"
            component={this.renderField}
            htmlElement="textarea"
            placeholder="Type something here..."
            label="Content"
            id="input-content"
          />
          <Button type="submit" bsStyle="primary">Save</Button>
          <IndexLinkContainer to="/">
            <Button bsStyle="danger">Cancel</Button>
          </IndexLinkContainer>
        </form>
      </Grid>
    );
  }
}

function validate(values) {
  const errors = {};
  
  if (!values.title) {
    errors.title = "Please enter a title";
  }
  if (!values.categories) {
    errors.categories = "Please enter some categories";
  }
  if (!values.content) {
    errors.content = "Please enter some content";
  }

  return errors;
}

NotesNew = reduxForm({
  form: 'notes-new-form',
  validate
})(NotesNew);
NotesNew = connect(null, { createNote })(NotesNew);

export default NotesNew;