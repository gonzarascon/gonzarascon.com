import React, { useReducer, useContext, createContext } from 'react';
import axios from 'axios';

export const InitialState = {
  sending: false,
  sent: false,
  error: false,
  waitingInput: true,
};

const SET_SENDING = 'SET_SENDING';
const SET_SENT = 'SET_SENT';
const SET_ERROR = 'SET_ERROR';
const SET_WAITING_INPUT = 'SET_WAITING_INPUT';

export function FormSubmissionReducer(state, action) {
  return { ...state, ...action.payload };
}

export function setSending() {
  return {
    type: SET_SENDING,
    payload: {
      sending: true,
      sent: false,
      error: false,
      waitingInput: false,
    },
  };
}

export function setSent() {
  return {
    type: SET_SENT,
    payload: {
      sent: true,
      error: false,
      sending: false,
      waitingInput: false,
    },
  };
}

export function setError() {
  return {
    type: SET_ERROR,
    payload: {
      error: true,
      sending: false,
      sent: false,
      waitingInput: false,
    },
  };
}

export async function sendEmail(msg, email, subject) {
  setSending();
  await axios
    .post(`${window.location.origin}/api/send-email`, { msg, email, subject })
    .then(() => setSent())
    .catch(() => setError());
}

export function setWaitingInput() {
  return {
    type: SET_WAITING_INPUT,
    payload: {
      sending: false,
      sent: false,
      error: false,
      waitingInput: true,
    },
  };
}

/* Context */
const FormSubmissionStateContext = createContext(null);
const FormSubmissionDispatchContext = createContext(null);

export function FormSubmissionContextProvider({ children }) {
  const [state, dispatch] = useReducer(FormSubmissionReducer, InitialState);
  return (
    <FormSubmissionStateContext.Provider value={state}>
      <FormSubmissionDispatchContext.Provider value={dispatch}>
        {children}
      </FormSubmissionDispatchContext.Provider>
    </FormSubmissionStateContext.Provider>
  );
}

export function useFormSubmissionState() {
  const context = useContext(FormSubmissionStateContext);
  if (context === undefined) {
    throw new Error(
      'useFormSubmissionState must be used within a FormSubmissionContextProvider',
    );
  }
  return context;
}

export function useFormSubmissionDispatch() {
  const context = useContext(FormSubmissionDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useFormSubmissionDispatch must be used within a FormSubmissionContextProvider',
    );
  }
  return context;
}
