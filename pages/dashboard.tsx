import { useContext } from "react";

import ContainerAllTasks from "../components/containerAllTasks";
import ContainerFinishedTasks from "../components/containerFinishedTasks";
import ContainerNeedToDoTasks from "../components/containerNeedToDoTasks";
import Header from "../components/header";
import Nav from "../components/nav";
import { TasksContext } from "../contexts/tasks";
import { ContainerDashboard } from "../styles/dashboard.style";

const Dashboard = () => {
  const { homeState } = useContext(TasksContext);

  return (
    <ContainerDashboard>
      <Header />
      <Nav />
      {homeState === "All tasks" ? (
        <ContainerAllTasks />
      ) : homeState === "Finished" ? (
        <ContainerFinishedTasks />
      ) : (
        <ContainerNeedToDoTasks />
      )}
    </ContainerDashboard>
  );
};

export default Dashboard;
