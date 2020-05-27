import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 40px;
  color: #3a3a3a;
  line-height: 56px;

  margin-left: 69px;
  margin-top: 30px;
  max-width: 400px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 20px;
  max-width: 782px;
  margin-left: 69px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    transition: 500ms;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
        border-right: 0px;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.25s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
  margin-left: 69px;
  margin-bottom: -27px;
`;

export const Line = styled.div`
  margin-top: 40px;
  margin-bottom: 60px;
  background: #d4d4d4;
  margin-left: 69px;
  max-width: 782px;
  height: 1px;
`;

export const Repositories = styled.div`
  margin-top: 20px;
  margin-left: 69px;
  max-width: 782px;
  /* margin-left: 35px; */
  /* margin-right: 35px; */

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition-duration: 500ms;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      margin-right: 6px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
