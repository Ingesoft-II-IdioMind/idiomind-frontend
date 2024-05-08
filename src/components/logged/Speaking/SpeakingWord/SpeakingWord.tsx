//import { useState } from "react";
import styles from "../../Deck/Deck.module.scss";
import { useRouter } from "next/navigation";

interface SpeakingWordProps {
  id: string;
  fetchWords: () => void;
  word: string;
}

export const SpeakingWord = ({ id, fetchWords, word }: SpeakingWordProps) => {
  const router = useRouter();
  //const [wordSpeaking, setNameDeck] = useState<string>("");
  console.log(id);

  const handleClick = () => {
    router.push(`/logged/speaking/practice`);
  };

  return (
    <>
      <div className={styles.deckNav} onClick={handleClick}>
        <h6 className={styles.deckNav__name}>{word}</h6>
        <div className={styles.deckNav__options}>
          <svg
            width="30"
            height="35"
            viewBox="0 0 64 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.0608 31.1979C61.8262 31.6282 62.4617 32.247 62.9036 32.9921C63.3455 33.7372 63.5781 34.5825 63.5781 35.4429C63.5781 36.3033 63.3455 37.1485 62.9036 37.8936C62.4617 38.6388 61.8262 39.2575 61.0608 39.6878L7.84956 69.5933C7.08414 70.0235 6.21587 70.25 5.33203 70.25C4.44819 70.25 3.57993 70.0235 2.81449 69.5933C2.04906 69.1631 1.41344 68.5443 0.971502 67.7992C0.529568 67.0541 0.296897 66.2088 0.296875 65.3484V5.54224C0.296897 4.68182 0.529568 3.83655 0.971502 3.09141C1.41344 2.34627 2.04906 1.72751 2.81449 1.2973C3.57993 0.8671 4.44819 0.64062 5.33203 0.640625C6.21587 0.64063 7.08414 0.867121 7.84956 1.29733L61.0608 31.2029V31.1979Z"
              fill="#E67320"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
