import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-color: var(--blue-light);
  font-family: "JetBrains Mono", monospace;
  font-weight: 700;
  color: var(--white);

  .containerForm {
    max-width: 18rem;
    height: 25rem;
  }

  .containerInput {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;

    border-radius: 8px;
    background-color: var(--white);

    .valid {
      color: green;
    }

    .invalid {
      color: var(--red);
    }
  }

  .ContainerAnimation {
    width: 18rem;
  }

  label,
  input,
  span {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }

  h1 {
    font-size: 4rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 9.5rem;
    gap: 3px;
    margin-top: 2rem;
  }

  label {
    padding-left: 5px;
    letter-spacing: 1.5px;
  }

  input {
    width: 70%;
    height: 2.5rem;
    padding-left: 8px;

    border: none;
    letter-spacing: 0.5px;
    outline: none;
  }

  span {
    height: 15px;
    padding-left: 5px;

    font-size: 0.8rem;
    letter-spacing: 1.5px;
    color: var(--white);
  }

  button {
    width: 100%;
    height: 2.5rem;

    background-color: #051e3263;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.5px;
    color: var(--white);
    border: none;
    border-radius: 8px;
    cursor: pointer;

    :hover {
      background-color: #00000063;
    }
  }

  @media (min-width: 661px) {
    flex-direction: row;
    gap: 15px;

    .containerForm {
      max-width: 18rem;
      height: 30rem;
    }

    h1 {
      font-size: 5rem;
    }
  }
`;

export const ContainerAnimation = styled.div`
  width: 100%;
  height: 100%;
`;
