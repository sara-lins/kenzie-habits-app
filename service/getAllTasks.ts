import ApiServer from "./api";

const getAllTasksFunction = (setState: Function) => {
  ApiServer.get("")
    .then((res) => {
      console.log(res);
      setState(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default getAllTasksFunction;
