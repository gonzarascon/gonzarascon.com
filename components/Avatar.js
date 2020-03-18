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
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
  @media ${breakpoints.mediumDevice} {
    width: 300px;
    height: 300px;
  }
`;

export default function Avatar() {
  return <Image src="./images/me.jpg" alt="Gonzalo Rascon" />;
}
