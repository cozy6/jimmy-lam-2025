import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.topSection}>
          <div className={styles.placeholderAnimation}></div>
          <div className={styles.lets}>LET&apos;S</div>
          <div className={styles.touch}>GET IN TOUCH</div>
          <div className={styles.emailContainer}>
            <a href="mailto:Lamjimmy.work@gmail.com">Lamjimmy.work@gmail.com</a>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.bottomSection}>
          <div className={styles.credit}>Jimmy Lam | 2025</div>
          <div className={styles.love}>cODeD wITh lOvE</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
