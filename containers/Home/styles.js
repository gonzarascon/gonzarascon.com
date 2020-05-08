import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoints, colors, Utils } from 'constants';

const { readColor, calculateRem } = Utils;

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${readColor(colors.blue)};
  color: ${readColor(colors.lightCyan)};
  max-width: 100%;

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
  grid-template-rows: 1fr auto 140px;
  grid-gap: 10px;

  @media ${breakpoints.mediumDevice} {
    max-width: calc(100% - 280px);
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 450px auto 100px;
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

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-row: 2/3;
  @media ${breakpoints.mediumDevice} {
    grid-column: 3/11;
    justify-content: space-between;
  }
`;

export const FormSectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 25px auto;

  @media ${breakpoints.mediumDevice} {
    height: 525px;
  }
`;

export const ThankYou = styled.h3`
  font-size: ${calculateRem(30)};
  text-align: center;
  width: 100%;
`;

export const ErrorSave = styled.span`
  text-decoration: underline;
  font-weight: lighter;
  margin-top: 20px;
  font-size: ${calculateRem(25)};

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
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
