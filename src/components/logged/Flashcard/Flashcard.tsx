import styles from "./Flashcard.module.scss";

export const Flashcard = () => {
  return (
    <div className={styles.flashcard__container}>
      <div className={styles.flashcard}>
        <div className={styles.flashcard__front}></div>
        <div className={styles.flashcard__back}></div>
      </div>
    </div>
  );
};
