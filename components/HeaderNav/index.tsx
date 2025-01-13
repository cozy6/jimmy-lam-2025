import React from 'react';
import Link from 'next/link';
import styles from './HeaderNav.module.css';
import { useTheme } from '@/context/ThemeContext';

export default function HeaderNav() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <img src="/images/jimmy-lam-logo-2025.svg" alt="Jimmy Lam Logo" />
        </Link>
        <div className={styles.navLinks}>
          <Link href="/projects" className={styles.navLink}>Projects</Link>
          <span className={styles.separator}>/</span>
          <Link href="/about" className={styles.navLink}>About</Link>
          <span className={styles.separator}>/</span>
          <Link href="/cv" className={styles.navLink}>CV</Link>
        </div>
        <button 
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <img 
            src={theme === 'light' ? '/icons/dark-mode.svg' : '/icons/light-mode.svg'} 
            alt={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            width="24"
            height="24"
          />
        </button>
        <Link href="/contact" className={styles.contactLink}>
          Contact
          <span className={styles.arrow}>↗</span>
        </Link>
      </nav>
      
      <div className={styles.roleContainer}>
        <span className={styles.role}>Full-Stack Developer</span>
        <span className={styles.role}>UX/UI Designer</span>
      </div>
    </header>
  );
}
