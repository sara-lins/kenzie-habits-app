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
    padding: 45px 20px 0 20px;
    width: 100%;
    height: 100%;

    color: var(--white);
    border-radius: 15px 15px 0 0;
    background-color: var(--blue-dark);

    .containerCards {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      width: 100%;
      max-width: 1000px;
      height: 38rem;
      padding: 0 8px 15px 8px;

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

  .containerNeedToDoTasks,
  .containerFinishedTasks {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 45px 20px 0 20px;
    height: 100%;

    color: var(--white);
    border-radius: 15px 15px 0 0;
    background-color: var(--blue-dark);
  }

  @media (min-width: 490px) {
    .containerAllTasks,
    .containerNeedToDoTasks,
    .containerFinishedTasks {
      padding: 45px 45px 0 45px;
    }

    .containerFinishedTasks,
    .containerNeedToDoTasks {
      display: flex;
      justify-content: flex-start;
      align-items: center;
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

    .containerData {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-left: 5rem;
      width: 11rem;
      height: 15rem;
    }

    .containerCards {
      height: 25rem;
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
`;
