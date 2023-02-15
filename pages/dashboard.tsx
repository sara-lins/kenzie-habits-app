import Head from "next/head";
import { useContext } from "react";

import Nav from "../components/nav";
import Header from "../components/header";
import { TasksContext } from "../contexts/tasks";
import ModalCreateTask from "../components/modalCreate";
import { ContainerDashboard } from "../styles/dashboard.style";
import ContainerAllTasks from "../components/containerAllTasks";
import ContainerFinishedTasks from "../components/containerFinishedTasks";
import ContainerNeedToDoTasks from "../components/containerNeedToDoTasks";
import ModalUpdateDeleteTask from "../components/modalUpdateDelete";

const Dashboard = () => {
  const { homeState } = useContext(TasksContext);
  const { isOpenModalEditTask, isOpenModalCreateTask } =
    useContext(TasksContext);

  return (
    <ContainerDashboard>
      <Head>
        <title>Kenzie Habits</title>
      </Head>
      <Header />
      <Nav />
      {homeState === "All tasks" ? (
        <ContainerAllTasks />
      ) : homeState === "Finished" ? (
        <ContainerFinishedTasks />
      ) : (
        <ContainerNeedToDoTasks />
      )}
      {isOpenModalCreateTask && <ModalCreateTask />}
      {isOpenModalEditTask && <ModalUpdateDeleteTask />}
    </ContainerDashboard>
  );
};

export default Dashboard;
