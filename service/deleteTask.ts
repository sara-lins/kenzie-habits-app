import ApiServer from "./api";

const deleteTaskFunction = (id: string) => {
  ApiServer.patch(`${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default deleteTaskFunction;
