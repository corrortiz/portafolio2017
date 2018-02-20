import React, { Component } from 'react';
//MUI Components
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
//Form Validation
import { Field, reduxForm } from 'redux-form';
//Asests
import { sendMail } from '../../Store/Actions/globals';

/**
 * Internal Form Component
 * @param {Hijos} param0
 */
const FormField = ({
  input,
  label,
  type,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    id={label}
    label={label}
    placeholder={label}
    margin="normal"
    error={touched && error}
    type={type}
    {...input}
    {...custom}
  />
);

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'srtrech'
  },
  wrapper: {
    position: 'relative'
  },
  buttonProgress: {
    color: '#7e57c2',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
});

/**
 * Component for sending the conctac form
 */
class ContactForm extends Component {
  render() {
    const { classes, submitting, pristine } = this.props;

    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <Grid
            container
            alignItems="center"
            alignContent="center"
            spacing={24}
          >
            <Grid item xs={12} md={6}>
              <Field
                name="name"
                component={FormField}
                label="Name"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                name="email"
                component={FormField}
                label="Email"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="content"
                component={FormField}
                label="Content"
                type="text"
                fullWidth
                multiline
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.root}>
                <div className={classes.wrapper}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="raised"
                    disabled={pristine || submitting}
                    fullWidth={true}
                  >
                    Send
                  </Button>
                  {submitting && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  const requiredFields = ['name', 'email', 'content'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

ContactForm = reduxForm({
  form: 'contacForm',
  validate,
  onSubmit: values => sendMail(values)
})(ContactForm);

export default withStyles(styles)(ContactForm);
