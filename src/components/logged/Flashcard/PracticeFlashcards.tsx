"use client";

import { Button } from "app/components/shared/Button";
import { Flashcard } from "./Flashcard";
import styles from "./Flashcard.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useBringOneDeckMutation } from "app/redux/features/deckApiSlice";
import { toast } from "react-toastify";
import { Modal } from "app/components/shared/Modal";
import { TextField } from "app/components/shared/TextField";
import { Loader } from "app/components/shared/Loader";
import { useCreateFlashcardMutation } from "app/redux/features/flashApiSlice";
import { NavDeck } from "app/components/shared/NavDocument";

interface DeckObject {
  id: string;
  name:string;
  ultima_Practica: string | null;
}

export default function PracticeFlashcards({ idDeck }: { idDeck: string }) {
  const [isFront, setIsFront] = useState(true);
  const [deck, setDeck] = useState<DeckObject>();;
  const [newFlashcardFront, setNewFlashcardFront] = useState<string>("");
  const [newFlashcardBack, setNewFlashcardBack] = useState<string>("");
  const [bringOneDeck2, { isLoading }] = useBringOneDeckMutation();
  const [createFlashcard2, { isLoading:isLoading2 }] = useCreateFlashcardMutation();

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = () => {
    bringOneDeck2({id:idDeck})
      .unwrap()
      .then((response) => {
        console.log(response);
        setDeck(response);
      })
      .catch((e) => {
        toast.error("There was an error while loading the deck, please try again");
      });
  };

  

  return (
    <>
      <NavDeck id={idDeck} name={"nombre"}/>
      <div className={styles.flashcard__section}>
        <Flashcard isFront={isFront} />
        <div className={styles.flashcard__buttons}>
          {isFront ? (
            <>
              <Button onClick={() => setIsFront(false)}>Show answer</Button>
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
