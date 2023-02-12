import ApiServer from "./api";

const createTaskFunction = (data: {}) => {
  ApiServer.post("", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default createTaskFunction;
