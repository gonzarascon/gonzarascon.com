import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import Typed from 'react-typed';
import SVG from 'react-inlinesvg';
import Avatar from 'components/Avatar';
import Button from 'components/Button';

import {
  Wrapper,
  GridContainer,
  Welcome,
  Name,
  WelcomeTextContainer,
  MovingText,
  BottomSection,
  Features,
  GithubLink,
} from './styles';

function Home() {
  const NameControls = useAnimation();

  useEffect(() => {
    NameControls.start('visible').then(() => NameControls.start('addShadow'));
  }, []);

  function openMailto() {
    window.open('mailto:gonzarascon@gmail.com?subject=Contact');
  }

  const NameVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
    hidden: {
      y: -10,
      opacity: 0,
    },
    addShadow: {
      textShadow: '6px 4px 0px #0E153A',
      transition: {
        delay: 0.5,
        type: 'spring',
        mass: 1.5,
        stiffness: 120,
        velocity: 2,
      },
    },
  };

  const MovingTextVariants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 1.25,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const Texts = [
    'is creating awesome <br /> web experiences✨.',
    `probably is eating pizza 🍕.`,
    'is thinking in new projects.',
    'is playing with his dogs 🐶.',
  ];

  return (
    <Wrapper>
      <GridContainer>
        <Welcome>
          <Avatar />
          <WelcomeTextContainer>
            <Name
              variants={NameVariants}
              animate={NameControls}
              initial="hidden">
              Gonzalo <br />
              Rascón
            </Name>
            <MovingText
              variants={MovingTextVariants}
              initial="hidden"
              animate="visible">
              <Typed strings={Texts} typeSpeed={50} loop backSpeed={50} />
            </MovingText>
          </WelcomeTextContainer>
        </Welcome>
        <BottomSection>
          <Features>
            Full-stack developer <span className="dash">—</span> Web designer
          </Features>
          <Button label="Contact me!" emoji="😃" onClick={() => openMailto()} />
          <GithubLink
            href="https://github.com/gonzarascon"
            target="_blank"
            rel="noopener noreferrer">
            Check me on Github <SVG src="./icons/github.svg" />
          </GithubLink>
        </BottomSection>
      </GridContainer>
    </Wrapper>
  );
}

export default Home;
