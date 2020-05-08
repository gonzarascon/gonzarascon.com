import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import { Button } from 'components';
import {
  FormWrapper,
  FormTitle,
  Form,
  FormInput,
  FormTextarea,
} from './styles';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    text: false,
  });

  function handleChange(stateRef, data) {
    setFormData({ ...formData, [stateRef]: data });
  }

  function validateForm() {
    const { name, email, text } = formData;
    if (validator.isEmpty(name) || !validator.isLength(name, { min: 2 })) {
      setFormErrors({ ...formErrors, name: true });
    }
    if (!validator.isEmail(email)) {
      setFormErrors({ ...formErrors, email: true });
    }
    if (!validator.isLength(text, { min: 4 })) {
      setFormErrors({ ...formErrors, text: true });
    }
  }

  function handleFormSubmition(event) {
    event.preventDefault();
    validateForm();
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
    </FormWrapper>
  );
}
