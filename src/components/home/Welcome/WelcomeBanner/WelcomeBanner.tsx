import styles from "../Welcome.module.scss";

import { Button } from "app/components/shared/Button";
import { WelcomeImage } from "app/components/home/Welcome/WelcomeImage";

export const WelcomeBanner = () => {
  return (
    <div className={styles.welcomeBanner}>
      <div className={styles.welcomeBanner__Message}>
        <p>Caring for learning.</p>
        <h2>Immerse yourself in a new language with IdioMind.</h2>
        <Button />
      </div>
      <WelcomeImage />
    </div>
  );
};
