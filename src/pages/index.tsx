import Head from "next/head";
import styles from "@/styles/Home.module.css";

//Components
import HeaderNav from "../../components/HeaderNav";


export default function Home() {
  return (
    <>
      <Head>
        <title>Jimmy Lam | 2025</title>
        <meta name="description" content="Welcome to my portfolio! I'm Jimmy, a Software Developer and UX/UI Designer based in Toronto, Canada
        with a strong background software development and UX/UI design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNav/>
    </>
  );
}
