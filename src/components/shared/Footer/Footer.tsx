import Image from 'next/image'
import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className= {styles.footer__logo}>
          <img src="/logoBlanco.svg" alt="IdioMind logo" />
          <h6>© 2024 IdioMind. All rights reserved.</h6>
      </div>
      <ul className={styles.footer__networks}>
        <li><a href="/"> <Image src="/icons/facebookIcon.svg" alt="Facebook" width={32} height={32} /></a></li>
        <li><a href="/aboutUs"><Image src="/icons/tiktokIcon.svg" alt="Tiktok" width={32} height={32} /></a></li>
        <li><a href="/blog"><Image src="/icons/instagramIcon.svg" alt="Twitter" width={32} height={32} /></a></li>
      </ul>
      <ul className={styles.footer__items}>
        <li><Link href="/" className={styles.footer__link}>Home</Link></li>
        <li><Link href="/aboutUs" className={styles.footer__link}>About</Link></li>
        <li><Link href="/blog" className={styles.footer__link}>Blog</Link></li>
        <li><Link href="/pricing" className={styles.footer__link}>Pricing</Link></li>
      </ul>
    </footer>
  );
}