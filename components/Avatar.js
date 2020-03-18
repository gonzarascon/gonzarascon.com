import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors, Utils } from 'constants';

const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  object-position: bottom;
  width: 200px;
  height: 200px;
  grid-column: 1/2;
  align-self: center;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  @media ${breakpoints.mediumDevice} {
    width: 300px;
    height: 300px;
  }
`;

export default function Avatar() {
  return <Image src="./images/me.jpg" alt="Gonzalo Rascon" draggable="false" />;
}
