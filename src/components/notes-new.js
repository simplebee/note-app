import React, { Component } from 'react';
import { Grid, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import '../styles/notes-new.css';

class NotesNew extends Component {

  onSubmit(values) {
    console.log(values);
  }

  renderField(field) {
    const { input, meta: { error, touched }, htmlElement, type, placeholder, label, id } = field;

    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          {...input}
          componentClass={htmlElement}
          type={type}
          placeholder={placeholder}
        />
        {touched && (error && <span>{error}</span>)}
      </FormGroup>
    );
  }
  
  render() {
    const { handleSubmit } = this.props;

    return (
      <Grid>
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
          <Button type="submit">Submit</Button>
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