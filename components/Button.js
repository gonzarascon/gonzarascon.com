import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoints, colors, Utils } from 'constants';
import Emoji from 'components/Emoji';

const { readColor, calculateRem } = Utils;

const ButtonBox = styled(motion.button)`
  width: 100%;
  max-width: 350px;
  height: 75px;

  font-family: 'Work Sans', Arial, Helvetica, sans-serif;

  font-size: ${calculateRem(22)};

  border-radius: 20px;
  border: none;

  background: white;

  color: ${readColor(colors.darkBlue)};
  transition: all ease 0.3s;

  & .emoji {
    margin-left: 10px;
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }

  @media (hover: none) {
    background-color: white;
    color: ${readColor(colors.darkBlue)};
  }
`;

function Button({ label, emoji, ...props }) {
  const ButtonVariants = {
    initial: {
      boxShadow: '0px 0px 0px 0px #0E153A',
      transition: {
        duration: 0.1,
        delay: 0,
      },
    },
    hover: {
      boxShadow: `9px 10px 0px 0px #0E153A`,
      transition: {
        duration: 0.1,
        delay: 0,
      },
    },
  };
  return (
    <ButtonBox
      {...props}
      variants={ButtonVariants}
      initial="initial"
      whileHover="hover">
      {label}
      {emoji && <Emoji symbol={emoji} label="Emoji" />}
    </ButtonBox>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
