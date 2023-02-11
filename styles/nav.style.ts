import styled, { css } from "styled-components";

interface INavStyle {
  state: string;
}

export const NavContainer = styled.div<INavStyle>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 5rem;

  button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    width: 100%;

    font-weight: 600;
    border: none;
    background-color: transparent;
    cursor: pointer;

    p {
      border-radius: 5px;
      margin-left: 5px;
      padding: 3px;
      color: var(--blue-light);
      background-color: #3532ff40;
    }
  }

  .containerButtonMobile {
    display: flex;
    justify-content: space-between;
    padding: 25px 15px 0 15px;
    width: 100%;
    height: 80%;

    p {
      font-weight: 600;
    }
  }

  .containerButtonDesktop {
    display: none;
  }

  details {
    text-align: center;
    width: 8rem;
    height: 9.5rem;
  }

  details[open] {
    background-color: var(--white);
    border-radius: 8px;
    z-index: 1;
  }

  summary {
    list-style: none;
    font-weight: 600;
  }

  @media (min-width: 490px) {
    button {
      padding: 0;
    }

    .containerButtonMobile {
      display: none;
    }

    .containerButtonDesktop {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 0 15px 0 15px;

      p {
        font-weight: 600;
      }

      div {
        display: flex;
        justify-content: space-between;
        width: 20rem;
      }
    }
  }
`;
