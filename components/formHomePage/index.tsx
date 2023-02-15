import { useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { BsCheckAll } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { Montserrat } from "@next/font/google";
import { yupResolver } from "@hookform/resolvers/yup";

import { formSchemaHome } from "../../schema";
import { TasksContext } from "../../contexts/tasks";
import getAllTasksFunction from "../../service/getAllTasks";

const montserrat = Montserrat({ weight: ["600", "400", "300"] });

interface IDataForm {
  inputName: string;
}

const Form = () => {
  const router = useRouter();
  const { setNameUser, setTasks, filterFinishedTasks } =
    useContext(TasksContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IDataForm>({
    resolver: yupResolver(formSchemaHome),
  });

  const handleForm = (data: IDataForm) => {
    setNameUser(data.inputName);
    getAllTasksFunction(setTasks);
    filterFinishedTasks();
    router.push("/dashboard");
  };
  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <label htmlFor="inputName" className={montserrat.className}>
        Insira seu nome
      </label>
      <div className="containerInput">
        <input
          type="text"
          id="inputName"
          placeholder="Nome e sobrenome"
          {...register("inputName")}
        />
        {isValid && <BsCheckAll className="valid" />}
        {errors.inputName && <BiErrorCircle className="invalid" />}
      </div>
      <span>{errors.inputName?.message}</span>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Form;
