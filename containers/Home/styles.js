import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoints, colors, Utils } from 'constants';

const { readColor, calculateRem } = Utils;

export const Wrapper = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: ${readColor(colors.blue)};
  color: ${readColor(colors.lightCyan)};

  @media ${breakpoints.mediumDevice} {
    height: 100vh;
  }
  @media ${breakpoints.iPadPort} {
    height: auto;
  }
`;

export const GridContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 50px 25px 25px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr 300px;

  @media ${breakpoints.mediumDevice} {
    max-width: calc(100% - 280px);
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 55% 1fr;
    grid-column-gap: 16px;
    padding: 100px 0 0;
    justify-items: center;
  }

  @media ${breakpoints.iPadPort} {
    max-width: unset;
    grid-template-rows: 1fr 300px;
    grid-gap: 30px;
  }
`;

export const Welcome = styled.div`
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
  @media ${breakpoints.mediumDevice} {
    font-size: ${calculateRem(100)};
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
  font-size: ${calculateRem(20)};
  color: ${readColor(colors.lightCyan)};
  text-align: center;

  & .dash {
    display: block;
  }

  @media ${breakpoints.mediumDevice} {
    font-size: ${calculateRem(32)};

    & .dash {
      display: inline-block;
    }
  }
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
