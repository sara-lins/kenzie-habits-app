import { useState } from "react";
import ContainerAllTasks from "../components/containerAllTasks";
import ContainerFinishedTasks from "../components/containerFinishedTasks";
import ContainerNeedToDoTasks from "../components/containerNeedToDoTasks";
import Header from "../components/header";
import Nav from "../components/nav";

const Dashboard = () => {
  const [homeState, setHomeState] = useState("home");
  return (
    <>
      <Header />
      <h1>Dashboard</h1>
      <Nav />
      {homeState === "home" ? (
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
