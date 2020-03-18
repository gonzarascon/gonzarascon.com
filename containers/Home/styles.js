import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoints, colors, Utils } from 'constants';

const { readColor, calculateRem } = Utils;

export const Wrapper = styled.main`
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
    grid-template-rows: 55% 1fr;
    grid-column-gap: 16px;
    padding: 100px 0 0;
    justify-items: center;
  }
`;

export const Welcome = styled.div`
  display: grid;
  grid-gap: 50px;
  width: 100%;
  @media ${breakpoints.mediumDevice} {
    grid-column: 3/ 11;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media ${breakpoints.fullHDevice} {
    grid-gap: 0;
  }
`;

export const WelcomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  width: 100%;
`;

export const Name = styled(motion.h1)`
  font-family: 'Work Sans', sans-serif;
  font-size: ${calculateRem(100)};
  color: ${readColor(colors.lightCyan)};
  font-weight: bolder;
`;

export const MovingText = styled(motion.p)`
  font-family: 'Work Sans', sans-serif;
  margin-top: 15px;
  margin-left: 10px;
  height: 80px;
  font-size: ${calculateRem(35)};
  line-height: ${calculateRem(40)};
  width: 90%;
  color: ${readColor(colors.lightCyan)};
  font-weight: 300;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-row: 2/3;
  @media ${breakpoints.mediumDevice} {
    grid-column: 3/11;
  }
`;

export const Features = styled.span`
  font-size: ${calculateRem(32)};
  color: ${readColor(colors.lightCyan)};
  text-align: center;
`;

export const GithubLink = styled.a`
  font-size: ${calculateRem(20)};
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-left: 10px;
    max-width: 30px;
    width: 100%;
    path {
      fill: white;
    }
  }

  transition: opacity ease 0.3s;

  @media (hover: hover) {
    &:hover {
      opacity: 0.5;
    }
  }
`;
