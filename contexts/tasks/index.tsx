import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ReactNode } from "react";

interface ITasksProvider {
  children: ReactNode;
}

interface IContext {
  homeState: string;
  setHomeState: Dispatch<SetStateAction<string>>;
}

export const TasksContext = createContext<IContext>({} as IContext);

export const TasksProvider = ({ children }: ITasksProvider) => {
  const [homeState, setHomeState] = useState<string>("all");

  return (
    <TasksContext.Provider
      value={{
        homeState,
        setHomeState,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
