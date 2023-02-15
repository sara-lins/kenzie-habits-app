import React, { useContext } from "react";
import { Montserrat } from "@next/font/google";

import ModalBase from "../modalBase";
import TabDelete from "../tabDelete";
import TabUpdate from "../tabUpdate/indesx";
import { TasksContext } from "../../contexts/tasks";
import { ContainerModalTask } from "../../styles/modalTask";

const montserrat = Montserrat({ weight: ["600", "400", "300"] });

const ModalUpdateDeleteTask = () => {
  const {
    isOpenModalEditTask,
    setIsOpenModalEditTask,
    isOpenTabUpdate,
    setIsOpenTabUpdate,
  } = useContext(TasksContext);

  return (
    <ModalBase state={isOpenModalEditTask} setState={setIsOpenModalEditTask}>
      <ContainerModalTask className={montserrat.className}>
        <div className="topTitlesUpdateDelete">
          <p className="buttonTab" onClick={() => setIsOpenTabUpdate("editar")}>
            Editar
          </p>
          <p
            className="buttonTab"
            onClick={() => setIsOpenTabUpdate("deletar")}
          >
            Deletar
          </p>
        </div>
        {isOpenTabUpdate === "editar" ? <TabUpdate /> : <TabDelete />}
      </ContainerModalTask>
    </ModalBase>
  );
};

export default ModalUpdateDeleteTask;
