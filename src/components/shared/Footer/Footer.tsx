import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p >Soy un Footer</p>
      <ul className={styles.navMenu}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/aboutUs">About</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/pricing">Pricing</Link></li>
      </ul>
      <ul className={styles.navMenu}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/aboutUs">About</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/pricing">Pricing</Link></li>
      </ul>
    </footer>
  );
}