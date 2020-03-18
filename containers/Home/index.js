import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import Typed from 'react-typed';
import Avatar from 'components/Avatar';

import {
  Wrapper,
  GridContainer,
  Welcome,
  Name,
  WelcomeTextContainer,
  MovingText,
} from './styles';

// text-shadow: 6px 4px 0px #CE5937;

function Home() {
  const NameControls = useAnimation();

  useEffect(() => {
    NameControls.start('visible').then(() => NameControls.start('addShadow'));
  }, []);

  const NameVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
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
      },
    },
  };

  const MovingTextVariants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.75,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const Texts = [
    'is creating awesome <br /> web experiences✨.',
    'probably is eating pizza 🍕.',
    'is thinking in new projects.',
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
      </GridContainer>
    </Wrapper>
  );
}

export default Home;
