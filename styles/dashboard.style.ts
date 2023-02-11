import styled from "styled-components";

export const ContainerDashboard = styled.div`
  width: 100%;
  height: 100vh;

  .containerData {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    width: 100%;
    height: 5rem;

    p,
    button {
      font-weight: 600;
    }

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

    .containerCards {
      display: flex;
      justify-content: center;
      width: 100%;

      overflow-y: scroll;
      scrollbar-width: thin;
      scrollbar-color: var(--blue-light);

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--blue-light);
        border-radius: 20px;
      }
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
      padding: 35px 45px 0 45px;
    }
  }

  @media (min-width: 700px) {
    .containerAllTasks {
      flex-direction: row;
      justify-content: space-evenly;
      padding: 45px 36px 0 36px;
    }

    .containerFinishedTasks,
    .containerNeedToDoTasks {
      padding-top: 45px;
    }

    .containerData {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-left: 5rem;
      width: 11rem;
      height: 15rem;
    }

    .containerCards {
      width: 50%;
      height: 30rem;
      padding-right: 3rem;
    }
  }
`;
