import { JetBrains_Mono } from "@next/font/google";

import { ContainerHome } from "../styles/home.style";
import AnimationHome from "../components/animation";
import Form from "../components/form";

const jetbrais = JetBrains_Mono({ weight: ["700", "400", "300"] });

const Home = () => {
  return (
    <ContainerHome className={jetbrais.className}>
      <div className="containerForm">
        <h1>Kenzie Habits</h1>
        <Form />
      </div>
      <div className="ContainerAnimation">
        <AnimationHome />
      </div>
    </ContainerHome>
  );
};

export default Home;
