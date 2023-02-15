import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { ReactNode } from "react";
import { IDataCard } from "../../interfaces";

interface ITasksProvider {
  children: ReactNode;
}

interface IContext {
  homeState: string;
  nameUser: string;
  titleUpdate: string;
  tagUpdate: string;
  isOpenTabUpdate: string;
  idUpdate: string;
  isClickedButtonNav: string;
  isOpenModalEditTask: boolean;
  isOpenModalCreateTask: boolean;
  quantAllTasks: number;
  quantFinishedTasks: number;
  quantNeedToDoTasks: number;
  tasks: IDataCard[];
  tasksFilterFinished: IDataCard[];
  tasksFilterNeedToDo: IDataCard[];
  setHomeState: Dispatch<SetStateAction<string>>;
  setNameUser: Dispatch<SetStateAction<string>>;
  setTitleUpdate: Dispatch<SetStateAction<string>>;
  setTagUpdate: Dispatch<SetStateAction<string>>;
  setIsOpenTabUpdate: Dispatch<SetStateAction<string>>;
  setIdUpdate: Dispatch<SetStateAction<string>>;
  setIsClickedButtonNav: Dispatch<SetStateAction<string>>;
  setIsOpenModalEditTask: Dispatch<SetStateAction<boolean>>;
  setIsOpenModalCreateTask: Dispatch<SetStateAction<boolean>>;
  setQuantAllTasks: Dispatch<SetStateAction<number>>;
  setquantFinishedTasks: Dispatch<SetStateAction<number>>;
  setquantNeedToDoTasks: Dispatch<SetStateAction<number>>;
  setTasks: Dispatch<SetStateAction<IDataCard[]>>;
  setTasksFilterFinished: Dispatch<SetStateAction<IDataCard[]>>;
  setTasksFilterNeedToDo: Dispatch<SetStateAction<IDataCard[]>>;
  configTask: (id: string, title: string, tag: string) => void;
  filterFinishedTasks: () => void;
  filterNeedToDoTasks: () => void;
}

export const TasksContext = createContext<IContext>({} as IContext);

export const TasksProvider = ({ children }: ITasksProvider) => {
  const [homeState, setHomeState] = useState<string>("All tasks");
  const [nameUser, setNameUser] = useState<string>("User");
  const [titleUpdate, setTitleUpdate] = useState<string>("");
  const [tagUpdate, setTagUpdate] = useState<string>("");
  const [idUpdate, setIdUpdate] = useState<string>("");
  useState<boolean>(false);
  const [isOpenTabUpdate, setIsOpenTabUpdate] = useState<string>("editar");
  const [isClickedButtonNav, setIsClickedButtonNav] =
    useState<string>("All tasks");

  const [isOpenModalEditTask, setIsOpenModalEditTask] =
    useState<boolean>(false);
  const [isOpenModalCreateTask, setIsOpenModalCreateTask] =
    useState<boolean>(false);

  const [quantAllTasks, setQuantAllTasks] = useState<number>(0);
  const [quantFinishedTasks, setquantFinishedTasks] = useState<number>(0);
  const [quantNeedToDoTasks, setquantNeedToDoTasks] = useState<number>(0);

  const [tasks, setTasks] = useState<IDataCard[]>([]);
  const [tasksFilterFinished, setTasksFilterFinished] = useState<IDataCard[]>(
    []
  );
  const [tasksFilterNeedToDo, setTasksFilterNeedToDo] = useState<IDataCard[]>(
    []
  );

  useEffect(() => {
    filterFinishedTasks();
    filterNeedToDoTasks();
    setQuantAllTasks(tasks.length);
  }, [tasks]);

  const configTask = (id: string, title: string, tag: string) => {
    setIsOpenModalEditTask(true);
    setTitleUpdate(title);
    setTagUpdate(tag);
    setIdUpdate(id);
  };

  const filterFinishedTasks = () => {
    const newTasks = tasks.filter((elem) => elem.is_active === true);
    setquantFinishedTasks(newTasks.length);
    setTasksFilterFinished(newTasks);
  };

  const filterNeedToDoTasks = () => {
    const newTasks = tasks.filter((elem) => elem.is_active === false);
    setquantNeedToDoTasks(newTasks.length);
    setTasksFilterNeedToDo(newTasks);
  };

  return (
    <TasksContext.Provider
      value={{
        homeState,
        nameUser,
        tagUpdate,
        titleUpdate,
        idUpdate,
        isOpenTabUpdate,
        isOpenModalEditTask,
        isOpenModalCreateTask,
        isClickedButtonNav,
        tasks,
        tasksFilterFinished,
        tasksFilterNeedToDo,
        quantAllTasks,
        quantFinishedTasks,
        quantNeedToDoTasks,
        setHomeState,
        setNameUser,
        setTagUpdate,
        setTitleUpdate,
        setIdUpdate,
        setIsOpenTabUpdate,
        setIsOpenModalEditTask,
        setIsOpenModalCreateTask,
        setIsClickedButtonNav,
        setTasks,
        setTasksFilterFinished,
        setTasksFilterNeedToDo,
        configTask,
        filterFinishedTasks,
        filterNeedToDoTasks,
        setQuantAllTasks,
        setquantFinishedTasks,
        setquantNeedToDoTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
