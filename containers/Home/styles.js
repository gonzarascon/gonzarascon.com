import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoints, colors, Utils } from 'constants';

const { readColor, calculateRem } = Utils;

export const Wrapper = styled.div`
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
  grid-template-rows: 1fr 60px 240px;
  grid-gap: 10px;

  @media ${breakpoints.mediumDevice} {
    max-width: calc(100% - 280px);
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 55% 2rem 1fr;
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

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-row: 2/3;
  @media ${breakpoints.mediumDevice} {
    grid-column: 3/11;
  }
`;

export const BottomSection = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-row: 3/4;
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

export const LinkContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    text-align: center;

    &::after {
      content: '— or —';
      font-size: ${calculateRem(18)};
      font-weight: lighter;
      margin: 5px auto;
      display: block;
    }
  }

  @media ${breakpoints.mediumDevice} {
    span {
      margin: 0 20px;
      &::after {
        font-size: ${calculateRem(22)};
        content: '|';
      }
    }
    width: 100%;
    align-items: center;
    flex-direction: row;
  }
`;

export const SocialLink = styled.a`
  font-size: ${calculateRem(20)};
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 10px;
    max-width: 30px;
    width: 100%;
    max-height: 30px;
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
