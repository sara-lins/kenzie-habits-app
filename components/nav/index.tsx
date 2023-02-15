import { useContext } from "react";
import { JetBrains_Mono, Montserrat } from "@next/font/google";

import Button from "../button";
import { TasksContext } from "../../contexts/tasks";
import { NavContainer } from "../../styles/nav.style";

const jetbrais = JetBrains_Mono({ weight: ["700", "400", "300"] });
const montserrat = Montserrat({ weight: ["600", "400", "300"] });

const Nav = () => {
  const { homeState, quantAllTasks, quantFinishedTasks, quantNeedToDoTasks } =
    useContext(TasksContext);

  return (
    <NavContainer state={homeState} className={jetbrais.className}>
      <div className="containerButtonMobile">
        <p id="titleNavMobile" className={montserrat.className}>
          To-do List
        </p>
        <details>
          <summary className={montserrat.className}>{homeState}</summary>
          <Button title="All tasks" quant={quantAllTasks} />
          <Button title="Finished" quant={quantFinishedTasks} />
          <Button title="Need to do" quant={quantNeedToDoTasks} />
        </details>
      </div>
      <div className="containerButtonDesktop">
        <p id="titleNavDesktop" className={montserrat.className}>
          To-do List
        </p>
        <div>
          <Button title="All tasks" quant={quantAllTasks} />
          <Button title="Finished" quant={quantFinishedTasks} />
          <Button title="Need to do" quant={quantNeedToDoTasks} />
        </div>
      </div>
    </NavContainer>
  );
};

export default Nav;
