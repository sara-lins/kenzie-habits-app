import CardTasks from "../cardsTasks";

const ContainerNeedToDoTasks = () => {
  const arr: any[] = [{}];
  return (
    <section className="containerNeedToDoTasks">
      {arr.length ? (
        arr.map((elem, index) => <CardTasks key={index} data={elem} />)
      ) : (
        <p>Você não possui tasks por fazer</p>
      )}
    </section>
  );
};

export default ContainerNeedToDoTasks;
