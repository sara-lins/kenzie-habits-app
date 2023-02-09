import { useContext } from "react";

import ContainerAllTasks from "../components/containerAllTasks";
import ContainerFinishedTasks from "../components/containerFinishedTasks";
import ContainerNeedToDoTasks from "../components/containerNeedToDoTasks";
import Header from "../components/header";
import Nav from "../components/nav";
import { TasksContext } from "../contexts/tasks";

const Dashboard = () => {
  const { homeState } = useContext(TasksContext);
  return (
    <>
      <Header />
      <h1>Dashboard</h1>
      <Nav />
      {homeState === "all" ? (
        <ContainerAllTasks />
      ) : homeState === "finished" ? (
        <ContainerFinishedTasks />
      ) : (
        <ContainerNeedToDoTasks />
      )}
    </>
  );
};

export default Dashboard;
