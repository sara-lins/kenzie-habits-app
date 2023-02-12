import { Montserrat } from "@next/font/google";
import { useContext } from "react";
import { TasksContext } from "../../contexts/tasks";
import CardTasks from "../cardsTasks";

interface ICard {
  title: string;
  tag: string;
}

const montserrat = Montserrat({ weight: ["600", "400", "300"] });

const ContainerAllTasks = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <section className="containerAllTasks">
      <div className="containerData">
        <p className={montserrat.className}>08 fev</p>
        <button>+</button>
      </div>
      <div className="containerCards">
        {tasks.length ? (
          newarr.map((elem, index) => <CardTasks key={index} data={elem} />)
        ) : (
          <p>Você não possui tasks</p>
        )}
      </div>
    </section>
  );
};

export default ContainerAllTasks;
