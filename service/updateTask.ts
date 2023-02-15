import ApiServer from "./api";
import getAllTasksFunction from "./getAllTasks";
import { IDataFormUpdateTask } from "../interfaces";

const updateTaskFunction = (
  id: string,
  data: IDataFormUpdateTask,
  setState: Function
) => {
  ApiServer.patch(`${id}/`, data)
    .then((res) => {
      getAllTasksFunction(setState);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default updateTaskFunction;
