import { useContext } from "react";
import { Montserrat } from "@next/font/google";

import { TasksContext } from "../../contexts/tasks";
import CardTasks from "../cardsTasks";

const montserrat = Montserrat({ weight: ["600", "400", "300"] });

const ContainerNeedToDoTasks = () => {
  const { tasksFilterNeedToDo } = useContext(TasksContext);

  return (
    <ul className="containerNeedToDoTasks">
      {tasksFilterNeedToDo.length ? (
        tasksFilterNeedToDo.map((elem, index) => (
          <CardTasks
            key={index}
            id={elem.id}
            tag={elem.tag}
            title={elem.title}
            is_active={elem.is_active}
          />
        ))
      ) : (
        <p className={montserrat.className}>Você não possui tasks por fazer</p>
      )}
    </ul>
  );
};

export default ContainerNeedToDoTasks;
