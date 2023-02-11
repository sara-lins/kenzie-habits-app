import { JetBrains_Mono, Montserrat } from "@next/font/google";
import { useContext } from "react";
import { TasksContext } from "../../contexts/tasks";
import { NavContainer } from "../../styles/nav.style";
import Button from "../button";

const jetbrais = JetBrains_Mono({ weight: ["700", "400", "300"] });
const montserrat = Montserrat({ weight: ["600", "400", "300"] });

const Nav = () => {
  const { homeState } = useContext(TasksContext);

  return (
    <NavContainer state={homeState} className={jetbrais.className}>
      <div className="containerButtonMobile">
        <p className={montserrat.className}>To-do List</p>
        <details>
          <summary className={montserrat.className}>{homeState}</summary>
          <Button title="All tasks" />
          <Button title="Finished" />
          <Button title="Need to do" />
        </details>
      </div>
      <div className="containerButtonDesktop">
        <p className={montserrat.className}>To-do List</p>
        <div>
          <Button title="All tasks" />
          <Button title="Finished" />
          <Button title="Need to do" />
        </div>
      </div>
    </NavContainer>
  );
};

export default Nav;
