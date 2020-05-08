import React from 'react';
import { HomeLayout } from 'containers';
import { FormSubmissionContextProvider } from 'components/FormSubmissionContext';

function Home() {
  return (
    <FormSubmissionContextProvider>
      <HomeLayout />
    </FormSubmissionContextProvider>
  );
}

export default Home;
