import styled from 'styled-components';
import { breakpoints, colors, Utils } from 'constants';

const { calculateRem, readColor } = Utils;

export const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 25px auto;
  margin-top: 90px;
`;

export const FormTitle = styled.h2`
  font-size: ${calculateRem(50)};
  color: ${readColor(colors.lightCyan)};
  text-shadow: 4px 2px 0px #0e153a;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > input,
  & > textarea {
    background-color: ${readColor(colors.blue.darken(0.1).fade(0.5))};
    border: none;
    outline: none;
    color: white;
    font-size: ${calculateRem(20)};
    border-bottom: 2px solid white;
    padding: 5px;

    &::placeholder {
      color: white;
      font-weight: 300;
    }

    @media ${breakpoints.mediumDevice} {
      padding: 15px;
    }
  }

  & .form-button {
    margin: 20px auto;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  margin: 20px 0;
  height: 50px;

  @media ${breakpoints.mediumDevice} {
    width: 45%;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  height: 250px;
  resize: none;
  font-family: 'Work Sans', sans-serif;

  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${readColor(colors.blue.darken(0.15).fade(0.25))};

    &:hover {
      cursor: pointer;
    }
  }
`;
