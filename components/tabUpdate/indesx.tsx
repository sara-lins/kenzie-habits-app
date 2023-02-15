import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoCloseCircleSharp } from "react-icons/io5";

import { TasksContext } from "../../contexts/tasks";
import { formSchemaCreateTask } from "../../schema";
import { IDataFormUpdateTask } from "../../interfaces";
import updateTaskFunction from "../../service/updateTask";
import getAllTasksFunction from "../../service/getAllTasks";

const TabUpdate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataFormUpdateTask>({
    resolver: yupResolver(formSchemaCreateTask),
  });

  const { setIsOpenModalEditTask, setTasks } = useContext(TasksContext);
  const { titleUpdate, tagUpdate, idUpdate } = useContext(TasksContext);

  const handleUpdateForm = (data: IDataFormUpdateTask) => {
    updateTaskFunction(idUpdate, data, setTasks);
    getAllTasksFunction(setTasks);
  };

  return (
    <>
      <div className="containerTitleUpdate">
        <h3>Edite sua Task</h3>
        <button onClick={() => setIsOpenModalEditTask(false)}>
          <IoCloseCircleSharp />
        </button>
      </div>
      <form onSubmit={handleSubmit(handleUpdateForm)}>
        <div>
          <label htmlFor="title">Descrição</label>
          <input
            placeholder={titleUpdate}
            id="title"
            type="text"
            {...register("title")}
          />
          <p>{errors.title?.message}</p>
          <label htmlFor="tag">Categoria</label>
          <input
            placeholder={tagUpdate}
            id="tag"
            list="list"
            type="text"
            {...register("tag")}
          />
          <p>{errors.tag?.message}</p>
          <datalist id="list">
            <option value="Casa" />
            <option value="Lazer" />
            <option value="Hobby" />
            <option value="Trabalho" />
            <option value="Estudo" />
            <option value="Cuidado Pessoal" />
          </datalist>
        </div>
        <button className="buttonUpdate" type="submit">
          Editar
        </button>
      </form>
    </>
  );
};

export default TabUpdate;
