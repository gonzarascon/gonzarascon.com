import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoints, colors, Utils } from 'constants';
const { readColor, calculateRem } = Utils;

export const Welcome = styled.header`
  display: grid;
  width: 100%;
  grid-gap: 20px;

  justify-items: center;

  @media ${breakpoints.mediumDevice} {
    grid-gap: 50px;

    grid-column: 3/ 11;
    grid-template-columns: 1fr 1fr;
  }

  @media ${breakpoints.iPadPort} {
    grid-column: 2/12;
    grid-template-columns: 1fr;
  }

  @media ${breakpoints.fullHDevice} {
    grid-gap: 0;
  }
`;

export const WelcomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;

  @media ${breakpoints.mediumDevice} {
    align-items: flex-start;
  }

  @media ${breakpoints.iPadPort} {
    align-items: center;
  }
`;

export const Name = styled(motion.h1)`
  font-family: 'Work Sans', sans-serif;
  font-size: ${calculateRem(60)};
  color: ${readColor(colors.lightCyan)};
  font-weight: bolder;
  text-align: center;
  @media ${breakpoints.mediumDevice} {
    font-size: ${calculateRem(100)};
    text-align: left;
  }
`;

export const MovingText = styled(motion.p)`
  font-family: 'Work Sans', sans-serif;
  margin-top: 15px;
  margin-left: 10px;
  height: 80px;
  font-size: ${calculateRem(25)};
  line-height: ${calculateRem(30)};
  width: 90%;
  color: ${readColor(colors.lightCyan)};
  font-weight: 300;
  text-align: center;
  @media ${breakpoints.mediumDevice} {
    font-size: ${calculateRem(35)};
    line-height: ${calculateRem(40)};
    text-align: left;
  }
  @media ${breakpoints.iPadPort} {
    text-align: center;
  }
`;
