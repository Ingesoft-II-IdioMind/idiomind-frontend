"use client"

import styles from "../Welcome.module.scss";

import { Button } from "app/components/shared/Button";
import { WelcomeImage } from "app/components/home/Welcome/WelcomeImage";
import Link from "next/link";

export const WelcomeBanner = () => {
  return (
    <div className={styles.welcomeBanner}>
      <div className={styles.welcomeBanner__Message}>
        <p>Caring for learning.</p>
        <h2>Immerse yourself in a new language with IdioMind.</h2>
        <Link href={"/auth/register"} className={styles.noStyles}>
          <Button
            text="Start your journey here"
          />
        </Link>
        
      </div>
      <WelcomeImage />
    </div>
  );
};
