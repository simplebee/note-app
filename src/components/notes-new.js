import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Field, reduxForm} from 'redux-form';

class NotesNew extends Component {
  renderField(field) {
    const { input, type, label } = field;

    return (
      <div>
        <label>{label}</label>
        <input
          {...input}
          type={type}
          placeholder={label}
        />
      </div>
    );
  }
  
  render() {
    return (
      <Grid>
        <form>
          <Field
            name="title"
            component={this.renderField}
            type="text"
            label="Title"
          />
          <Field
            name="categories"
            component={this.renderField}
            type="text"
            label="Categories"
          />
          <Field
            name="content"
            component={this.renderField}
            type="text"
            label="Content"
          />
        </form>
      </Grid>
    );
  }
}

export default reduxForm({
  form: 'notes-new-form'
})(NotesNew);