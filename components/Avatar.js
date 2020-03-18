import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  object-position: bottom;
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  height: 100%;
  grid-column: 1/2;
  align-self: center;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
`;

export default function Avatar() {
  return <Image src="./images/me.jpg" alt="Gonzalo Rascon" />;
}
