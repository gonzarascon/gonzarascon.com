import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import SVG from 'react-inlinesvg';
import { Welcome, ContactForm, Emoji, Button } from 'components';
import {
  useFormSubmissionState,
  useFormSubmissionDispatch,
  setWaitingInput,
} from 'components/FormSubmissionContext';

import logEvent from 'helpers/logEvent';

import {
  Wrapper,
  GridContainer,
  BottomSection,
  Features,
  SocialLink,
  LinkContainer,
  Main,
  ThankYou,
  FormSectionWrapper,
  ErrorSave,
} from './styles';

function Home() {
  const { sending, sent, error, waitingInput } = useFormSubmissionState();
  const FormSubmissionDispatch = useFormSubmissionDispatch();

  function renderFormSection() {
    if (waitingInput) {
      return <ContactForm />;
    } else if (sending) {
      return (
        <FormSectionWrapper>
          <SVG src="./icons/loading-transparent.svg" />
        </FormSectionWrapper>
      );
    } else if (sent) {
      return (
        <FormSectionWrapper>
          <ThankYou>
            Thanks for contacting me, I will respond you as soon as possible{' '}
            <Emoji symbol="😄" label="Happy" />
          </ThankYou>
        </FormSectionWrapper>
      );
    } else if (error) {
      return (
        <FormSectionWrapper>
          <ThankYou>Sorry, something went wrong.</ThankYou>
          <ErrorSave onClick={() => FormSubmissionDispatch(setWaitingInput())}>
            Please try again <Emoji symbol="🙏" label="Please" />
          </ErrorSave>
        </FormSectionWrapper>
      );
    }
  }

  return (
    <Wrapper>
      <GridContainer>
        <Welcome />
        <Main>
          <Features>
            Full-stack developer <span className="dash">—</span> Web designer
          </Features>
          {renderFormSection()}
        </Main>
        <BottomSection>
          <LinkContainer>
            <SocialLink
              href="https://github.com/gonzarascon"
              target="_blank"
              rel="noopener noreferrer">
              Check me on Github <SVG src="./icons/github.svg" />
            </SocialLink>
            <span></span>
            <SocialLink
              href="https://www.linkedin.com/in/gonzarascon"
              target="_blank"
              rel="noopener noreferrer">
              Contact me on LinkedIn <SVG src="./icons/linkedin.svg" />
            </SocialLink>
          </LinkContainer>
        </BottomSection>
      </GridContainer>
    </Wrapper>
  );
}

export default Home;
