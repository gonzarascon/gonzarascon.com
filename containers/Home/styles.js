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
`;
