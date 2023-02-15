import { useContext } from "react";
import { Montserrat } from "@next/font/google";

import { TasksContext } from "../../contexts/tasks";
import { IButton } from "../../interfaces";

const montserrat = Montserrat({ weight: ["600", "400", "300"] });

const Button = ({ title, quant }: IButton) => {
  const { setHomeState } = useContext(TasksContext);

  return (
    <>
      <button type="button" onClick={() => setHomeState(title)}>
        {title}
        <p className={montserrat.className}>{quant}</p>
      </button>
    </>
  );
};

export default Button;
