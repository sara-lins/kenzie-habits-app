import Link from "next/link";
import { useContext } from "react";
import { CgLogOut } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";
import { JetBrains_Mono, Montserrat } from "@next/font/google";

import { HeaderApp } from "../../styles/header.style";
import { TasksContext } from "../../contexts/tasks";

const jetbrais = JetBrains_Mono({ weight: ["700", "400", "300"] });
const montserrat = Montserrat({ weight: ["600", "400", "300"] });

const Header = () => {
  const { nameUser } = useContext(TasksContext);

  return (
    <HeaderApp>
      <div className="containerLogo">
        <Link href="/">
          <CgLogOut />
        </Link>
        <h2 className={jetbrais.className}>Kenzie Habits</h2>
      </div>
      <div className="containerUser">
        <p className={montserrat.className}>{nameUser}</p>
        <div>
          <FaUserAlt />
        </div>
      </div>
    </HeaderApp>
  );
};

export default Header;
