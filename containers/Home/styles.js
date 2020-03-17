import styled from 'styled-components';
import { breakpoints, colors, Utils } from 'constants';

const { readColor, calculateRem } = Utils;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${readColor(colors.blue)};
  color: ${readColor(colors.lightCyan)};
`;

export const GridContainer = styled.section`
  width: 100%;
  height: 100%;

  max-width: calc(100% - 280px);
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr;

  @media ${breakpoints.mediumDevice} {
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 16px;
    padding: 100px 0;
  }
`;
