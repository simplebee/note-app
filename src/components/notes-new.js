import React, { Component } from 'react';
import { Grid, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import '../styles/notes-new.css';

class NotesNew extends Component {
  renderInputField(field) {
    const { input, type, placeholder, label, id, meta: { error, touched } } = field;

    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          {...input}
          type={type}
          placeholder={placeholder}
        />
        {touched && (error && <span>{error}</span>)}
      </FormGroup>
    );
  }

  renderTextareaField(field) {
    const { input, placeholder, label, id, meta: { error, touched } } = field;

    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          {...input}
          componentClass="textarea"
          placeholder={placeholder}
        />
        {touched && (error && <span>{error}</span>)}
      </FormGroup>
    );
  }
  
  render() {
    return (
      <Grid>
        <form>
          <Field
            name="title"
            component={this.renderInputField}
            type="text"
            label="Title"
            id="input-title"
          />
          <Field
            name="categories"
            component={this.renderInputField}
            type="text"
            label="Categories"
            id="input-categories"
          />
          <Field
            name="content"
            component={this.renderTextareaField}
            placeholder="Type something here..."
            label="Content"
            id="input-content"
          />
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

export default reduxForm({
  form: 'notes-new-form',
  validate
})(NotesNew);