import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints, colors, Utils } from 'constants';
import Emoji from 'components/Emoji';

const { readColor, calculateRem } = Utils;

const ButtonBox = styled.button`
  width: 100%;
  max-width: 350px;
  height: 75px;

  font-family: 'Work Sans', Arial, Helvetica, sans-serif;

  font-size: ${calculateRem(22)};

  border: 1px solid ${readColor(colors.yellow)};
  border-radius: 20px;

  background: transparent;

  color: ${readColor(colors.yellow)};
  transition: all ease 0.3s;

  & .emoji {
    margin-left: 10px;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${readColor(colors.yellow)};
      color: ${readColor(colors.darkBlue)};
      cursor: pointer;
    }
  }
`;

function Button({ label, emoji, ...props }) {
  return (
    <ButtonBox {...props}>
      {label}
      {emoji && <Emoji symbol={emoji} />}
    </ButtonBox>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
