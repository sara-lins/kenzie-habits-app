import { useContext } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

import { TasksContext } from "../../contexts/tasks";
import { Card } from "../../styles/card.style";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ weight: ["600", "400", "300"] });

interface IDataCard {
  data: {
    title: string;
    tag: string;
    created_at: string;
    updated_at: string;
  };
}

const CardTasks = ({ data }: IDataCard) => {
  const { title, tag } = data;
  const { isChecked, setIsChecked } = useContext(TasksContext);

  return (
    <Card className={montserrat.className} state={isChecked}>
      <p className="titleCard">titulo</p>
      <div>
        <p className="tagCard">tag</p>
        <button
          className="buttonCheck"
          onClick={() => setIsChecked(!isChecked)}
        >
          {isChecked ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
        </button>
        <button>
          <SlOptionsVertical />
        </button>
      </div>
    </Card>
  );
};

export default CardTasks;
