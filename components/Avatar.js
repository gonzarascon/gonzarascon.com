import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 50%;
  object-fit: contain;
  width: 100%;
  grid-column: 3/6;

  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
`;

export default function Avatar() {
  return <Image src="./images/me.jpg" alt="Gonzalo Rascon" />;
}
