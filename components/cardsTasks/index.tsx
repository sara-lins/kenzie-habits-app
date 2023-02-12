import { useContext } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

import { TasksContext } from "../../contexts/tasks";
import { Card } from "../../styles/card.style";
import { Montserrat } from "@next/font/google";
import updateCheckTaskFunction from "../../service/updateCheckTasks";
import { IDataCard } from "../../interfaces";

const montserrat = Montserrat({ weight: ["600", "400", "300"] });

const CardTasks = ({ data }: IDataCard) => {
  const { title, tag, isActive } = data;
  const { isChecked, setIsChecked } = useContext(TasksContext);

  return (
    <Card className={montserrat.className} state={isActive}>
      <button>
        <SlOptionsVertical />
      </button>
      <p className="titleCard">{title}</p>
      <div>
        <p className="tagCard">{tag}</p>
        <button
          className="buttonCheck"
          onClick={() => updateCheckTaskFunction(data.id, data)}
        >
          {isActive ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
        </button>
      </div>
    </Card>
  );
};

export default CardTasks;
