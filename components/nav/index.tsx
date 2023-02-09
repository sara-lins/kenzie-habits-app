import { useContext } from "react";
import { TasksContext } from "../../contexts/tasks";

const Nav = () => {
  const { setHomeState } = useContext(TasksContext);

  return (
    <div>
      <p>To-do List</p>
      <button type="button" onClick={() => setHomeState("all")}>
        All tasks
        <p>10</p>
      </button>
      <button type="button" onClick={() => setHomeState("finished")}>
        Finished
        <p>10</p>
      </button>
      <button type="button" onClick={() => setHomeState("needToDo")}>
        Need to do
        <p>10</p>
      </button>
    </div>
  );
};

export default Nav;
