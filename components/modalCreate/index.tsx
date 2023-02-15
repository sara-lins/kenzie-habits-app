import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Montserrat } from "@next/font/google";
import { IoCloseCircleSharp } from "react-icons/io5";

import { TasksContext } from "../../contexts/tasks";
import { IDataFormCreateTask } from "../../interfaces";
import { formSchemaCreateTask } from "../../schema";
import createTaskFunction from "../../service/createTask";
import { ContainerModalTask } from "../../styles/modalTask";
import ModalBase from "../modalBase";

const montserrat = Montserrat({ weight: ["600", "400", "300"] });

const ModalCreateTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IDataFormCreateTask>({
    resolver: yupResolver(formSchemaCreateTask),
  });

  const { isOpenModalCreateTask, setIsOpenModalCreateTask, setTasks } =
    useContext(TasksContext);

  const handleCreateForm = (data: IDataFormCreateTask) => {
    createTaskFunction(data, setTasks);
    setIsOpenModalCreateTask(false);
  };

  return (
    <ModalBase
      state={isOpenModalCreateTask}
      setState={setIsOpenModalCreateTask}
    >
      <ContainerModalTask className={montserrat.className}>
        <div className="topTitle">
          <h3>Crie sua Task</h3>
          <button onClick={() => setIsOpenModalCreateTask(false)}>
            <IoCloseCircleSharp />
          </button>
        </div>
        <form
          className="formCreateTask"
          onSubmit={handleSubmit(handleCreateForm)}
        >
          <div>
            <label htmlFor="title">Descrição</label>
            <input
              id="title"
              type="text"
              placeholder="Academia"
              {...register("title")}
            />
            <p>{errors.title?.message}</p>
            <label htmlFor="tag">Categoria</label>
            <input
              id="tag"
              list="list"
              type="text"
              placeholder="Esporte"
              {...register("tag")}
            />
            <p>{errors.tag?.message}</p>
            <datalist id="list">
              <option value="Casa" />
              <option value="Saúde" />
              <option value="Lazer" />
              <option value="Hobby" />
              <option value="Trabalho" />
              <option value="Estudo" />
              <option value="Esporte" />
              <option value="Cuidado Pessoal" />
            </datalist>
          </div>
          <button type="submit">Criar</button>
        </form>
      </ContainerModalTask>
    </ModalBase>
  );
};

export default ModalCreateTask;
