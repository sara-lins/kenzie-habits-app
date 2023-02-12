import ApiServer from "./api";

const updateCheckTaskFunction = (id: string, data: {}) => {
  ApiServer.patch(`check/${id}`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default updateCheckTaskFunction;
