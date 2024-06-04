"use client";

import styles from "./Deck.module.scss";
import { Button } from "app/components/shared/Button";
import { Deck } from "./Deck";
import { Modal } from "app/components/shared/Modal";
import { SetStateAction, useEffect, useState } from "react";
import { TextField } from "app/components/shared/TextField";
import { FormError } from "app/components/home/auth/FormError";
import { FormSuccess } from "app/components/home/auth/FormSuccess";
import {
  useBringDecksMutation,
  useCreateDeckMutation,
} from "app/redux/features/deckApiSlice";
import { toast } from "react-toastify";
import { Loader } from "app/components/shared/Loader";

export interface DeckType {
  id: string;
  nombre: string;
  ultima_Practica: string | null;
  flashcards_count: number;
}

export default function MapDecks() {
  const [decks, setDecks] = useState<DeckType[]>([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [nameDeck, setNameDeck] = useState<string>("");
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [createDeck2, { isLoading }] = useCreateDeckMutation();
  const [bringDecks2, { isLoading: isLoading2 }] = useBringDecksMutation();

  const handleNameDeckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameDeck(e.target.value);
  };

  useEffect(() => {
    fetchDecks();
  }, []);

  const fetchDecks = () => {
    bringDecks2(undefined)
      .unwrap()
      .then((response: SetStateAction<DeckType[]>) => {
        // console.log(response);
        setDecks(response);
      })
      .catch((e: { data: { detail: any } }) => {
        toast.error(
          e.data.detail ||
            "There was an error while loading the decks, please try again"
        );
      });
  };

  async function createDeck() {
    const currentDate = new Date();
    createDeck2({ nombre: nameDeck, ultima_Practica: currentDate })
      .unwrap()
      .then(() => {
        setError(undefined);
        toast.success("Deck created successfully");
        setIsCreateOpen(false);
        setSuccess(undefined);
        setNameDeck("");
        fetchDecks();
      })
      .catch((e) => {
        setSuccess(undefined);
        toast.error(
          e.data.detail ||
            "There was an error while creating the deck, please try again"
        );
      });
  }

  return (
    <>
      <div className={styles.decksTitle}>
        <h1>Flashcards decks</h1>
        <svg
          onClick={() => {
            setIsCreateOpen(true);
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
        </svg>
      </div>
      {isLoading2 ? (
        <Loader color={"orange"}></Loader>
      ) : decks.length > 0 ? (
        decks.map((deck, i) => (
          <Deck
            key={i}
            id={deck.id}
            name={deck.nombre}
            fetchDecks={fetchDecks}
            ultima_Practica={deck.ultima_Practica}
            flashcards_count={deck.flashcards_count}
          />
        ))
      ) : (
        <div
          className={styles.noDeck}
          onClick={() => {
            setIsCreateOpen(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z" />
          </svg>
          <h3>Create your first deck and start practicing.</h3>
        </div>
      )}
      <Modal
        isOpen={isCreateOpen}
        onClose={() => {
          setIsCreateOpen(false);
        }}
        title="Create a new deck"
      >
        <form>
          <TextField label="New deck name">
            <input
              value={nameDeck}
              type="text"
              placeholder="French deck"
              onChange={handleNameDeckChange}
            />
          </TextField>
          <FormError message={error} />
          <FormSuccess message={success} />
        </form>
        <div>
          <Button
            outlined={true}
            onClick={() => {
              setIsCreateOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={createDeck}>
            {isLoading ? <Loader color="white"></Loader> : "Create"}
          </Button>
        </div>
      </Modal>
    </>
  );
}
