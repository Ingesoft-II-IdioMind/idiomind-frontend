import styles from "./Header.module.scss";
import Link from 'next/link';

export const HeaderComponent = () => {
    return (
      <header className = {styles.header}>
        <Link href="/" className= {styles.logoNav}>
          <img src="/appLogo.svg" alt="IdioMind logo" />
          <h5>IdioMind</h5>
        </Link>
        <ul className={styles.navMenu}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/aboutUs">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
        </ul>
      </header>
    );
  }




