"use client";

import { Button } from "app/components/shared/Button";
import { Flashcard } from "./Flashcard";
import styles from "./Flashcard.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function PracticeFlashcards({ idDeck }: { idDeck: string }) {
  const [isFront, setIsFront] = useState(true);
  console.log(idDeck);

  return (
    <>
      <div className={styles.navFlashcard}>
        <Link href={"/logged/decks"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Link>
        <h2>Title deck</h2>
        <div></div>
      </div>
      <div className={styles.flashcard__section}>
        <Flashcard isFront={isFront} />
        <div className={styles.flashcard__buttons}>
          {isFront ? (
            <>
              <div className={styles.flashcard__options}>
                <Button outlined={true}>Add flashcard </Button>
              </div>
              <Button onClick={() => setIsFront(false)}>Show answer</Button>
              <div className={styles.flashcard__options}>
                <Button outlined={true}>Edit flashcard</Button>
              </div>
            </>
          ) : (
            <>
              <Button onClick={() => setIsFront(true)}>Good</Button>
              <Button onClick={() => setIsFront(true)}>Reverse</Button>
              <Button onClick={() => setIsFront(true)}>Bad</Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
