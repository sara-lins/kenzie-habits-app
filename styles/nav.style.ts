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

    font-weight: 600;
    border: none;
    background-color: transparent;
    cursor: pointer;

    p {
      border-radius: 5px;
      color: var(--blue-light);
      background-color: #3532ff40;
    }
  }

  .containerButtonMobile {
    display: flex;
    justify-content: space-between;
    padding: 25px 20px 0 20px;
    width: 100%;
    height: 80%;

    font-weight: 600;
    border: none;
    background-color: transparent;
    cursor: pointer;

    button {
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
      width: 100%;

      p {
        margin-left: 5px;
        padding: 3px;
      }
    }

    #titleNavMobile {
      width: 8rem;
      text-align: center;
      font-size: 1.2rem;
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

  @media (min-width: 560px) {
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
      padding: 0px 30px 0 30px;

      button {
        justify-content: space-evenly;
        align-items: center;
        padding: 10px 15px;
        width: 100%;

        p {
          margin-left: 5px;
          padding: 3px;
        }
      }

      #titleNavDesktop {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 600;
      }

      div {
        display: flex;
        justify-content: space-between;
        width: 25rem;
      }
    }
  }
`;
