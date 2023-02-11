import styled, { css } from "styled-components";

interface ICardStyle {
  state: boolean;
}

export const Card = styled.div<ICardStyle>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 0px 15px;
  width: 90%;
  height: 4rem;

  border-radius: 8px;
  border: var(--blue-light) solid 2px;
  transition: all ease-in 1s;

  ${(props) =>
    props.state &&
    css`
      opacity: 0.5;
    `}

  .titleCard {
    width: 40%;
    text-overflow: ellipsis;
    overflow: hidden;

    ${(props) =>
      props.state &&
      css`
        text-decoration: line-through;
      `}
  }

  .tagCard {
    padding: 8px;
    width: fit-content;

    border-radius: 8px;
    background-color: #3532ffa3;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    height: 100%;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;

    color: var(--white);
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .buttonCheck {
    width: 1rem;
    font-size: 1rem;
    ${(props) =>
      props.state
        ? css`
            color: green;
          `
        : css`
            color: var(--blue-light);
          `};
  }

  @media (min-width: 490px) {
    width: 100%;

    .containerAllTasks {
      flex-direction: row;
    }
  }
`;
