import styles from "./Flashcard.module.scss";

interface FlashcardProps {
  isFront: boolean;
}

export const Flashcard = ({ isFront }: FlashcardProps) => {
  return (
    <div className={styles.flashcard__container}>
      <div className={styles.flashcard}>
      <div className={`${styles.flashcard__card} ${isFront ? '' : styles.flashcard__flip}`}>
        {isFront ? (
          <div className={styles.flashcard__front}><p>Front</p></div>
        ) : (
          <div className={styles.flashcard__back}><p>Back</p></div>)}
        </div>
        <div className={styles.flashcard__background}></div>
      </div>
    </div>
  );
};
