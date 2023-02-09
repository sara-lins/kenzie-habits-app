import CardTasks from "../cardsTasks";

const ContainerFinishedTasks = () => {
  const arr: any[] = [];
  return (
    <section>
      {arr.length ? (
        arr.map((elem, index) => <CardTasks key={index} data={elem} />)
      ) : (
        <p>Você não possui tasks</p>
      )}
    </section>
  );
};

export default ContainerFinishedTasks;
