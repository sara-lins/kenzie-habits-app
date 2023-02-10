import { Montserrat } from "@next/font/google";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsCheckAll } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";

import formSchema from "../../schema";
import { useContext } from "react";
import { TasksContext } from "../../contexts/tasks";

const montserrat = Montserrat({ weight: ["600", "400", "300"] });

interface IDataForm {
  inputName: string;
}

const Form = () => {
  const { setNameUser } = useContext(TasksContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IDataForm>({
    resolver: yupResolver(formSchema),
  });

  const handleForm = (data: IDataForm) => {
    console.log(data);
    setNameUser(data.inputName);
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
