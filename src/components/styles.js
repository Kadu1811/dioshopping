import styled, { css } from "styled-components";

export const Logo = styled.a`
  font-size: 3rem;
  align-self: center;
  text-decoration: none;
  color: #64b5f6;
  margin: 10px;

  &:hover {
    cursor: pointer;
    color: #E541AD;
    transition: 0.5s;
  }

  @media (max-width: 540px) {
    font-size: 158%;
    margin-left: 4%;
  }
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #0dcaf0;
  color: #0dcaf0;
  margin: 0 1em;
  padding: 0.40em 1em;

  &:hover {
    color: #E541AD;
    border: 2px solid #E541AD;
    transition: 0.5s;
  }

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;