import { useContext } from "react";
import { Montserrat } from "@next/font/google";
import { SlOptionsVertical } from "react-icons/sl";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

import { IDataCard } from "../../interfaces";
import { Card } from "../../styles/card.style";
import { TasksContext } from "../../contexts/tasks";
import updateCheckTaskFunction from "../../service/updateCheckTasks";

const montserrat = Montserrat({ weight: ["600", "400", "300"] });

const CardTasks = ({ ...data }: IDataCard) => {
  const { title, tag, is_active } = data;
  const { configTask, setTasks } = useContext(TasksContext);

  const dataCheck = {
    is_active: !is_active,
  };

  return (
    <Card id="card" className={montserrat.className} state={is_active}>
      <button onClick={() => configTask(data.id, title, tag)}>
        <SlOptionsVertical />
      </button>
      <p className="titleCard">{title}</p>
      <div>
        <p className="tagCard">{tag}</p>
        <button
          className="buttonCheck"
          onClick={() => updateCheckTaskFunction(data.id, dataCheck, setTasks)}
        >
          {is_active ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
        </button>
      </div>
    </Card>
  );
};

export default CardTasks;
