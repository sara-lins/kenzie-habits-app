import { Montserrat } from "@next/font/google";
import { useContext } from "react";

import { TasksContext } from "../../contexts/tasks";
import CardTasks from "../cardsTasks";

const montserrat = Montserrat({ weight: ["600", "400", "300"] });

const ContainerAllTasks = () => {
  const { tasks, setIsOpenModalCreateTask } = useContext(TasksContext);

  const newDate = new Date();
  const day = newDate.getDate().toString().padStart(2, "0");
  const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
  const date = `${day} ${month}`;

  return (
    <section className="containerAllTasks">
      <div className="containerData">
        <p className={montserrat.className}>{date}</p>
        <button
          onClick={() => {
            setIsOpenModalCreateTask(true);
          }}
        >
          +
        </button>
      </div>
      <ul className="containerCards">
        {tasks.length ? (
          tasks.map((elem, index) => <CardTasks key={index} {...elem} />)
        ) : (
          <p className={montserrat.className}>Você não possui tasks</p>
        )}
      </ul>
    </section>
  );
};

export default ContainerAllTasks;
