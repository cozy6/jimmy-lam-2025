import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef } from "react";

//Components
import HeaderNav from "../../components/HeaderNav";
import ProjectsTable from "../../components/ProjectsTable";
import Footer from "../../components/Footer";

export default function Home() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const name = nameRef.current;
      if (!name) return;

      const rect = name.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (e.clientX - centerX) * 0.1;
      const moveY = (e.clientY - centerY) * 0.1;
      
      name.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
      const name = nameRef.current;
      if (!name) return;
      name.style.transform = 'translate(0, 0)';
    };

    const nameElement = nameRef.current;
    if (nameElement) {
      nameElement.addEventListener('mousemove', handleMouseMove);
      nameElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (nameElement) {
        nameElement.removeEventListener('mousemove', handleMouseMove);
        nameElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

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
          <h1 ref={nameRef} className={styles.name}>
            {'JIMMY LAM'.split('').map((char, index) => (
              <span 
                key={index} 
                className={styles.nameChar}
                style={{ '--char-index': `${index}` } as React.CSSProperties}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
            <span className={styles.sun}>☼</span>
          </h1>
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
