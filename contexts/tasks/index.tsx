import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ReactNode } from "react";

interface ITasksProvider {
  children: ReactNode;
}

interface IContext {
  homeState: string;
  nameUser: string;
  isChecked: boolean;
  setHomeState: Dispatch<SetStateAction<string>>;
  setNameUser: Dispatch<SetStateAction<string>>;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

export const TasksContext = createContext<IContext>({} as IContext);

export const TasksProvider = ({ children }: ITasksProvider) => {
  const [homeState, setHomeState] = useState<string>("All tasks");
  const [nameUser, setNameUser] = useState<string>("User");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <TasksContext.Provider
      value={{
        homeState,
        nameUser,
        isChecked,
        setHomeState,
        setNameUser,
        setIsChecked,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
