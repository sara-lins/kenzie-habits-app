import { JetBrains_Mono } from "@next/font/google";
import Head from "next/head";

import Form from "../components/formHomePage";
import AnimationHome from "../components/animation";
import { ContainerHome } from "../styles/home.style";

const jetbrais = JetBrains_Mono({ weight: ["700", "400", "300"] });

const Home = () => {
  return (
    <ContainerHome className={jetbrais.className}>
      <Head>
        <title>Kenzie Habits</title>
      </Head>
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
