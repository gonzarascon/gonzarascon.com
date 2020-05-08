import React, { useState } from 'react';
import validator from 'validator';
import { Button, Emoji } from 'components';
import {
  sendEmail,
  useFormSubmissionState,
  useFormSubmissionDispatch,
} from 'components/FormSubmissionContext';
import {
  FormWrapper,
  FormTitle,
  Form,
  FormInput,
  FormTextarea,
  FormErrorWarning,
} from './styles';

const errorsInitialState = {
  name: false,
  email: false,
  text: false,
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: '',
  });

  const [formErrors, setFormErrors] = useState(errorsInitialState);

  function handleChange(stateRef, data) {
    setFormData({ ...formData, [stateRef]: data });
    setFormErrors(errorsInitialState);
  }

  function validateForm() {
    const { name, email, text } = formData;
    if (validator.isEmpty(name) || !validator.isLength(name, { min: 2 })) {
      setFormErrors({ ...formErrors, name: true });
      return false;
    }
    if (!validator.isEmail(email)) {
      setFormErrors({ ...formErrors, email: true });
      return false;
    }
    if (!validator.isLength(text, { min: 4 })) {
      setFormErrors({ ...formErrors, text: true });
      return false;
    }

    return true;
  }

  function handleFormSubmition(event) {
    event.preventDefault();
    if (validateForm()) {
      sendEmail(formData.text, formData.email, formData.name);
    }
  }

  return (
    <FormWrapper>
      <FormTitle>Contact me!</FormTitle>
      <Form onSubmit={e => handleFormSubmition(e)}>
        <FormInput
          placeholder="Name"
          onChange={e => handleChange('name', e.target.value)}
        />
        <FormInput
          placeholder="Email adress"
          onChange={e => handleChange('email', e.target.value)}
          type="email"
        />
        <FormTextarea
          placeholder="Your message"
          onChange={e => handleChange('text', e.target.value)}
        />
        <Button
          label="Send!"
          emoji="✔️"
          className="form-button"
          type="submit"
        />
      </Form>
      {formErrors !== errorsInitialState && (
        <FormErrorWarning>
          <Emoji symbol="🚨" label="Warning" /> Please check that all inputs are
          ok!
        </FormErrorWarning>
      )}
    </FormWrapper>
  );
}
