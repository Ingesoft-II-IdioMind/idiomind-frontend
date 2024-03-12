import styles from "./Navbar.module.scss";
import Link from 'next/link';

export const Navbar = () => {
    return (
      <nav className = {styles.navbar}>
        <Link href="/" className= {styles.navbar__logo}>
          <img src="/appLogo.svg" alt="IdioMind logo" />
          <h5>IdioMind</h5>
        </Link>
        <ul className={styles.navbar__items}>
            <li><Link href="/" className={styles.navbar__link}>Home</Link></li>
            <li><Link href="/home/aboutUs" className={styles.navbar__link}>About</Link></li>
            <li><Link href="/home/blog" className={styles.navbar__link}>Blog</Link></li>
            <li><Link href="/home/pricing" className={styles.navbar__link}>Pricing</Link></li>
            <li><Link href="/home/pricing" className={styles.navbar__link}>Log in</Link></li>
            <li><Link href="/home/pricing" className={styles.navbar__link}>Sign up</Link></li>
        </ul>
      </nav>
    );
  }




