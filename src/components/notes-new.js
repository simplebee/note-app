import React, { Component } from 'react';
import { Grid, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import '../styles/notes-new.css';

class NotesNew extends Component {
  renderInputField(field) {
    const { input, type, placeholder, label, id } = field;

    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          {...input}
          type={type}
          placeholder={placeholder}
        />
      </FormGroup>
    );
  }

  renderTextareaField(field) {
    const { input, placeholder, label, id } = field;

    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          {...input}
          componentClass="textarea"
          placeholder={placeholder}
        />
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

export default reduxForm({
  form: 'notes-new-form'
})(NotesNew);