import React from 'react';
import { HomeLayout } from 'containers';
import { FormSubmissionContextProvider } from 'components/FormSubmissionContext';

function Home() {
  console.log(process.env.TEST_ENV);

  return (
    <FormSubmissionContextProvider>
      <HomeLayout />
    </FormSubmissionContextProvider>
  );
}

export default Home;
