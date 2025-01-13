import Head from "next/head";
import styles from "@/styles/Home.module.css";

//Components
import HeaderNav from "../../components/HeaderNav";
import ProjectsTable from "../../components/ProjectsTable";
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>Jimmy Lam | 2025</title>
        <meta name="description" content="Welcome to my portfolio! I'm Jimmy, a Software Developer and UX/UI Designer based in Toronto, Canada
        with a strong background software development and UX/UI design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <HeaderNav/>
      <main className={styles.page}>
        <div className={styles.centerContent}>
          <h1 className={styles.name}>JIMMY LAM</h1>
          <div className={styles.details}>
            <p className={styles.role}>Software Developer</p>
            <p className={styles.location}>Based in <span className={styles.city}>TORONTO</span></p>
            <p className={styles.company}>Currently @ Commissary Connect</p>
          </div>
        </div>
        <section className={styles.projectsSection}>
          <ProjectsTable />
        </section>
      </main>
      <Footer />
    </>
  );
}
