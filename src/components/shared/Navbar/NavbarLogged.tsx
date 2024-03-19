"use client";
import styles from "./Navbar.module.scss";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import { useState } from "react";


export default function NavbarLogged () {
  const [menuOpen, setMenuOpen] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);
    return (
      <nav className = {styles.navbar}>
        <div className= {styles.navbar__logo}>
          <img src="/appLogo.svg" alt="IdioMind logo" />
          <h5>Andres</h5>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={configOpen? styles.iconActive:styles.iconInnactive} onClick={() => setConfigOpen(!configOpen)}>
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
        </div>
        <div className={styles.navbar__mobile} onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className={styles.navbar__mobile__icon}/>
        </div>
        <ul className={menuOpen ? styles.navbar__itemsActive : styles.navbar__items} onClick={() => setMenuOpen(!menuOpen)}>
            <li><Link href="/" className={styles.navbar__link}>Library</Link></li>
            <li><Link href="/aboutUs" className={styles.navbar__link}>Grammar</Link></li>
            <li><Link href="/blog" className={styles.navbar__link}>Speaking</Link></li>
            <li><Link href="/pricing" className={styles.navbar__link}>Flashcards</Link></li>
        </ul>
        <ul className={`${styles.dropDown} ${configOpen ? styles.dropDown__active : styles.dropDown__innactive}`}>
          <li><Link href="/" className={styles.navbar__link}>Library</Link></li>
          <li><Link href="/" className={styles.navbar__link}>Library</Link></li>
          <li><Link href="/" className={styles.navbar__link}>Log out</Link></li>
        </ul>       
      </nav>
    );
  }

