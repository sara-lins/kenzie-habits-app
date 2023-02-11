import styled from "styled-components";

export const ContainerDashboard = styled.div`
  width: 100%;
  height: 100vh;

  .containerData {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    width: 100%;
    height: 5rem;

    p {
      display: flex;
      text-align: center;
      flex-wrap: wrap;
      font-size: 1.2rem;
      width: 4rem;
      padding: 10px;

      border-radius: 8px;
      background-color: #3532ff9c;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      width: 4rem;
      height: 4rem;
      padding: 10px;

      border: none;
      border-radius: 8px;
      color: var(--white);
      background-color: #3532ff9c;
      cursor: pointer;
    }
  }

  .containerAllTasks {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    padding-top: 20px;
    width: 100%;
    height: 100%;

    color: var(--white);
    border-radius: 15px 15px 0 0;
    background-color: var(--blue-dark);

    .containerData {
      p,
      button {
        font-weight: 600;
      }
    }

    .containerCards {
      display: flex;
      justify-content: center;
      width: 95%;

      overflow-y: scroll;
    }
  }

  .containerFinishedTasks {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-top: 20px;
    height: 100%;

    color: var(--white);
    border-radius: 15px 15px 0 0;
    background-color: var(--blue-dark);
  }

  .containerNeedToDoTasks {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-top: 20px;
    height: 100%;

    color: var(--white);
    border-radius: 15px 15px 0 0;
    background-color: var(--blue-dark);
  }

  @media (min-width: 490px) {
    .containerAllTasks {
      flex-direction: row;
      justify-content: space-evenly;
    }

    .containerCards {
      width: 60%;
    }
  }
`;
