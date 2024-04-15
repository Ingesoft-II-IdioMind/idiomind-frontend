import { MapDecks } from "app/components/logged/Deck";
import { PracticeFlashcards } from "app/components/logged/Flashcard";
import { Button } from "app/components/shared/Button";
import { Loader } from "app/components/shared/Loader";

export default function Flashcards({ params }: { params: { id: string } }) {
    return (
      <PracticeFlashcards idDeck={params.id} />
    );
  }
  