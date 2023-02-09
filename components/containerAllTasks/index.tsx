import CardTasks from "../cardsTasks";

const ContainerAllTasks = () => {
  const newarr: any[] = [];

  return (
    <section>
      <div>
        <p>08 fev</p>
        <button>+</button>
      </div>
      <div>
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
