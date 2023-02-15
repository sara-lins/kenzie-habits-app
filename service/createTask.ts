import ApiServer from "./api";
import getAllTasksFunction from "./getAllTasks";
import { IDataFormCreateTask } from "../interfaces";

const createTaskFunction = (data: IDataFormCreateTask, setState: Function) => {
  ApiServer.post("", data)
    .then((res) => {
      getAllTasksFunction(setState);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default createTaskFunction;
