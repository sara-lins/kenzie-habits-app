import ApiServer from "./api";
import getAllTasksFunction from "./getAllTasks";

const deleteTaskFunction = (id: string, setState: Function) => {
  ApiServer.delete(`${id}/`)
    .then((res) => {
      getAllTasksFunction(setState);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default deleteTaskFunction;
