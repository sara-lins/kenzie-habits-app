import ApiServer from "./api";
import getAllTasksFunction from "./getAllTasks";
import { IDataUpdateCheckTask } from "../interfaces";

const updateCheckTaskFunction = (
  id: string,
  data: IDataUpdateCheckTask,
  setState: Function
) => {
  ApiServer.patch(`check/${id}/`, data)
    .then((res) => {
      getAllTasksFunction(setState);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default updateCheckTaskFunction;
