import styles from "./Deck.module.scss";
import { Button } from "app/components/shared/Button";
import { Deck } from "./Deck";

export default function MapDecks() {
    return(
        <>
        {Array.from({ length: 8 }, (_, i) => <Deck key={i} />)}
        <Button>Create new deck</Button>
        </>
    )
}