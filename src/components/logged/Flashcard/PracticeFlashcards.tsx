import { Button } from "app/components/shared/Button";
import { Flashcard } from "./Flashcard";
import styles from "./Flashcard.module.scss";

export default function PracticeFlashcards() {
  return (
    <div className={styles.flashcard__section}>
      <Flashcard />
      <div className={styles.flashcard__buttons}>
      <Button>Show answer</Button>
        <Button>Show answer</Button>
        <Button>Show answer</Button>
      </div>
    </div>
  );
}
