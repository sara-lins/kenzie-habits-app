import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleForm = (e: any) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <>
      <div>
        <div>
          <p>Kenzie Habits</p>
          <form onSubmit={handleForm}>
            <label htmlFor="inputName">
              Insira seu nome
              <input
                type="text"
                id="inputName"
                placeholder="Nome e sobrenome"
              />
            </label>
            <button type="submit">Entrar</button>
          </form>
        </div>
        <div>
          <iframe src="https://embed.lottiefiles.com/animation/41068"></iframe>
        </div>
      </div>
    </>
  );
}
