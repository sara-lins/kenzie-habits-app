import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ReactNode } from "react";
import { IDataCard } from "../../interfaces";

interface ITasksProvider {
  children: ReactNode;
}

interface IContext {
  homeState: string;
  nameUser: string;
  isChecked: boolean;
  tasks: IDataCard[];
  setHomeState: Dispatch<SetStateAction<string>>;
  setNameUser: Dispatch<SetStateAction<string>>;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  setTasks: Dispatch<SetStateAction<IDataCard[]>>;
}

export const TasksContext = createContext<IContext>({} as IContext);

export const TasksProvider = ({ children }: ITasksProvider) => {
  const [homeState, setHomeState] = useState<string>("All tasks");
  const [nameUser, setNameUser] = useState<string>("User");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [tasks, setTasks] = useState<IDataCard[]>([]);

  return (
    <TasksContext.Provider
      value={{
        homeState,
        nameUser,
        isChecked,
        tasks,
        setHomeState,
        setNameUser,
        setIsChecked,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
