import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ReactNode } from "react";

interface ITasksProvider {
  children: ReactNode;
}

interface IContext {
  homeState: string;
  nameUser: string;
  setHomeState: Dispatch<SetStateAction<string>>;
  setNameUser: Dispatch<SetStateAction<string>>;
}

export const TasksContext = createContext<IContext>({} as IContext);

export const TasksProvider = ({ children }: ITasksProvider) => {
  const [homeState, setHomeState] = useState<string>("all");
  const [nameUser, setNameUser] = useState<string>("User");

  return (
    <TasksContext.Provider
      value={{
        homeState,
        nameUser,
        setHomeState,
        setNameUser,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
