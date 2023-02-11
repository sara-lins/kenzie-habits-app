import styled from "styled-components";

export const HeaderApp = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8rem;

  color: var(--white);
  background-color: var(--blue-light);
  box-shadow: 1px 2px 3px gray;

  .containerLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    padding-left: 15px;
    gap: 10px;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  .containerUser {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 15px;
    width: 18rem;
    gap: 10px;

    p {
      display: flex;
      flex-wrap: wrap;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff57;
      width: 60px;
      height: 60px;

      border-radius: 50%;
    }

    svg {
      width: 50%;
      height: 40%;
    }
  }

  @media (min-width: 700px) {
    .containerUser {
      width: 23%;
      padding-right: none;
    }

    .containerLogo {
      padding-left: none;
    }
  }
`;
