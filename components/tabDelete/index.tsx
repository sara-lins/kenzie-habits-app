import { useContext } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

import { TasksContext } from "../../contexts/tasks";
import deleteTaskFunction from "../../service/deleteTask";

const TabDelete = () => {
  const { setIsOpenModalEditTask, setTasks } = useContext(TasksContext);

  const { idUpdate } = useContext(TasksContext);

  const handleDeleteForm = () => {
    deleteTaskFunction(idUpdate, setTasks);
  };

  return (
    <div className="containerDelete">
      <div className="containerTitleDelete">
        <h3>Delete sua Task</h3>
        <button onClick={() => setIsOpenModalEditTask(false)}>
          <IoCloseCircleSharp />
        </button>
      </div>
      <div className="containerContantButtonDelete">
        <p>Tem certeza que deseja deletar sua task?</p>
        <span>😟</span>
        <button
          className="buttonDelete"
          type="button"
          onClick={() => handleDeleteForm()}
        >
          Deletar
        </button>
      </div>
    </div>
  );
};

export default TabDelete;
