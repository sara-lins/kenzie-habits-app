import { createContext, useState } from "react";
import { ReactNode } from "react";

interface ITasksProvider {
  children: ReactNode;
}

interface IContext {}

export const TasksContext = createContext<IContext>({} as IContext);

export const TasksProvider = ({ children }: ITasksProvider) => {
  const [homeState, setHomeState] = useState("home");

  return <TasksContext.Provider value={{}}>{children}</TasksContext.Provider>;
};
