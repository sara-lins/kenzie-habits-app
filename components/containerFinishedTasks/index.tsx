import { useContext } from "react";
import { Montserrat } from "@next/font/google";

import CardTasks from "../cardsTasks";
import { TasksContext } from "../../contexts/tasks";

const montserrat = Montserrat({ weight: ["600", "400", "300"] });

const ContainerFinishedTasks = () => {
  const { tasksFilterFinished } = useContext(TasksContext);

  return (
    <ul className="containerFinishedTasks">
      {tasksFilterFinished.length ? (
        tasksFilterFinished.map((elem, index) => (
          <CardTasks
            key={index}
            id={elem.id}
            is_active={elem.is_active}
            tag={elem.tag}
            title={elem.title}
          />
        ))
      ) : (
        <p className={montserrat.className}>
          Você não possui tasks finalizadas
        </p>
      )}
    </ul>
  );
};

export default ContainerFinishedTasks;
