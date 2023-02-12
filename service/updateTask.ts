import ApiServer from "./api";

const updateTaskFunction = (
  setState: Function,
  valueState: boolean,
  id: string,
  data: {}
) => {
  ApiServer.patch(`${id}`, data)
    .then((res) => {
      console.log(res);
      setState(valueState);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default updateTaskFunction;
