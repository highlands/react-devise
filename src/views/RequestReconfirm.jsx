import React from 'react';
import {connect} from '../reducers/store';
import {
  withFormik,
  Field
} from 'formik';
import {requestReconfirm, formAction} from '../actions';
import {required, email} from './validation';

const RequestReconfirmForm = withFormik({
  displayName: 'requestReconfirmPassword'
})(({handleSubmit, valid, submitting, submitSucceeded, error, onSubmit, auth: {messages, viewPlugin: {renderInput, SubmitButton, FormError, Form}}}) => {
  if (submitSucceeded) {
    return <p>{messages.reqeustReconfirmSucceeded}</p>;
  }
  return (
    <Form onSubmit={handleSubmit(formAction(onSubmit))}>
      <Field
        name="email"
        label="Email"
        component={renderInput}
        validate={[required, email]}
      />
      <SubmitButton
        label={submitting ? 'Resending Confirmation Instructions...' : 'Resend Confirmation Instructions'}
        disabled={!valid || submitting}
      />
      {error && <FormError>{error}</FormError>}
    </Form>
  );
});

const RequestReconfirm = ({doRequestReconfirm, ...rest}) => {
  const {auth: {AuthLinks, viewPlugin: {View, Heading}}} = rest;
  return (
    <View>
      <Heading>
        Resend Confirmation Instructions
      </Heading>
      <RequestReconfirmForm onSubmit={doRequestReconfirm} {...rest} />
      <AuthLinks />
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    doRequestReconfirm: data => requestReconfirm(data, dispatch)
  };
};

const RequestReconfirmContainer = connect(null, mapDispatchToProps)(RequestReconfirm);

export {
  RequestReconfirmForm,
  RequestReconfirm,
  RequestReconfirmContainer as default
};
