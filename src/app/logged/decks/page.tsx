import { Button } from "app/components/shared/Button";
import { Loader } from "app/components/shared/Loader";

export default function Decks() {
    return (
      <>
        <h1>Decks</h1>
        <Loader color="orange"/>
        <Button><Loader color="white"/></Button>
      </>
    );
  }
  