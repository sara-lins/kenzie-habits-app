import { Montserrat } from "@next/font/google";
import CardTasks from "../cardsTasks";

interface ICard {
  title: string;
  tag: string;
}

const montserrat = Montserrat({ weight: ["600", "400", "300"] });

const ContainerAllTasks = () => {
  const newarr: any[] = [{}];

  return (
    <section className="containerAllTasks">
      <div className="containerData">
        <p className={montserrat.className}>08 fev</p>
        <button>+</button>
      </div>
      <div className="containerCards">
        {newarr.length ? (
          newarr.map((elem, index) => <CardTasks key={index} data={elem} />)
        ) : (
          <p>Você não possui tasks</p>
        )}
      </div>
    </section>
  );
};

export default ContainerAllTasks;
