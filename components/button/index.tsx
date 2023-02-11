import { useContext } from "react";
import { Montserrat } from "@next/font/google";

import { TasksContext } from "../../contexts/tasks";

const montserrat = Montserrat({ weight: ["600", "400", "300"] });

interface IButton {
  title: string;
}

const Button = ({ title }: IButton) => {
  const { setHomeState } = useContext(TasksContext);

  return (
    <>
      <button type="button" onClick={() => setHomeState(title)}>
        {title}
        <p className={montserrat.className}>10</p>
      </button>
    </>
  );
};

export default Button;
