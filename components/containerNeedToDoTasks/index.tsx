import CardTasks from "../cardsTasks";

const ContainerNeedToDoTasks = () => {
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

export default ContainerNeedToDoTasks;
