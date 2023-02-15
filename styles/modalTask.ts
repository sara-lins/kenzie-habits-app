import styled from "styled-components";

export const ContainerModalTask = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  gap: 1.5rem;
  background-color: var(--blue-light);
  padding: 1.5rem;

  .topTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;

    border-bottom: gray 1px solid;

    button {
      width: fit-content;
      height: 45px;

      font-size: 1.5rem;
      letter-spacing: 1.5px;
      border: none;
      border-radius: 8px;
      color: var(--white);
      background-color: transparent;
      cursor: pointer;
      transition: ease-in 0.5s;
    }
  }

  .topTitlesUpdateDelete {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;
  }

  .buttonTab {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1rem;
    margin-bottom: 0;

    width: 40%;
    height: 1.5rem;
    border-radius: 8px;
    background-color: #ffffff57;
  }

  .buttonUpdate,
  .buttonDelete {
    margin: 1rem 0;
  }

  .containerTitleUpdate,
  .containerTitleDelete {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3rem;

    border-bottom: gray 1px solid;

    button {
      width: fit-content;
      height: fit-content;

      font-size: 1.5rem;
      letter-spacing: 1.5px;
      border: none;
      border-radius: 8px;
      color: var(--white);
      background-color: transparent;
      cursor: pointer;
      transition: ease-in 0.5s;
    }
  }

  .containerDelete {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
    width: 100%;
    height: 100%;
  }

  .containerContantButtonDelete {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 91%;

    p {
      text-align: center;
    }

    span {
      text-align: center;
      font-size: 5rem;
    }

    button {
      width: 100%;
      height: 45px;

      font-size: 0.9rem;
      letter-spacing: 1.5px;
      border: none;
      border-radius: 8px;
      color: var(--white);
      background-color: var(--blue-dark);
      cursor: pointer;
      transition: ease-in 0.5s;
    }
    button:hover {
      opacity: 0.8;
    }
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 75%;

    div {
      height: fit-content;
    }
  }

  .formCreateTask {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 75%;
  }

  input {
    font-weight: 400;
    margin-top: 0.5rem;
    width: 100%;
    height: 2rem;

    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  p {
    text-align: end;
    width: 100%;
    height: 1rem;

    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  input {
    border-radius: 8px;
    border: none;
    outline: var(--blue-light);
    padding: 0 1rem;
  }

  form > button {
    width: 100%;
    height: 45px;

    font-size: 0.9rem;
    letter-spacing: 1.5px;
    border: none;
    border-radius: 8px;
    color: var(--white);
    background-color: var(--blue-dark);
    cursor: pointer;
    transition: ease-in 0.5s;
  }

  form > button:hover {
    opacity: 0.8;
  }
`;
