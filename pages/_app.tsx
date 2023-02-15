import type { AppProps } from "next/app";

import "../styles/globals.css";
import { TasksProvider } from "../contexts/tasks";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TasksProvider>
      <Component {...pageProps} />
    </TasksProvider>
  );
}
