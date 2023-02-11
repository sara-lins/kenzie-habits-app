import CardTasks from "../cardsTasks";

const ContainerFinishedTasks = () => {
  const arr: any[] = [{}];
  return (
    <section className="containerFinishedTasks">
      {arr.length ? (
        arr.map((elem, index) => <CardTasks key={index} data={elem} />)
      ) : (
        <p>Você não possui tasks finalizadas</p>
      )}
    </section>
  );
};

export default ContainerFinishedTasks;
