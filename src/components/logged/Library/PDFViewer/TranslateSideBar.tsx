import { HighlightArea } from "@react-pdf-viewer/highlight";
import styles from "./PDFViewer.module.scss";
import { Button } from "app/components/shared/Button";
import { useTranslatebar } from "./SideBarProvider";
import { Modal } from "app/components/shared/Modal";
import { TextField } from "app/components/shared/TextField";
import { useState } from "react";
import { FormError } from "app/components/home/auth/FormError";
import { FormSuccess } from "app/components/home/auth/FormSuccess";

interface NotesTranslatebarProps {
  translateWord: String;
}

export const TranslateSidebar: React.FC<NotesTranslatebarProps> = ({
  translateWord,
}) => {
  const { setIsTranslatebarOpen, isTranslatebarOpen } = useTranslatebar();
  const [isCreateFlashcardOpen, setIsCreateFlashcardOpen] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  function onClose() {
    setIsTranslatebarOpen(false);
  }

  if (!isTranslatebarOpen) {
    return null;
  }

  return (
    <>
      <div className={styles.translateSidebar}>
        <div className={styles.notesSidebar__titleContent}>
          <h5 className={styles.notesSidebar__title}>Translation</h5>
          <svg
            className={styles.notesSidebar__close}
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
          </svg>
        </div>
        <div className={styles.translateSidebar__section}>
          <h6 className={styles.translateSidebar__subtitle}>
            Original (English)
          </h6>
          <div className={styles.translateSidebar__translatediv}>
            <p>{translateWord}</p>
          </div>
        </div>
        <div className={styles.translateSidebar__section}>
          <h6 className={styles.translateSidebar__subtitle}>
            Translation (Spanish)
          </h6>
          <div className={styles.translateSidebar__translatediv}>
            <p>Hola</p>
          </div>
        </div>
        <div className={styles.translateSidebar__section}>
          <h6 className={styles.translateSidebar__subtitle}>Description</h6>
          <p>Lorem dfasdnc skjdnckjasnds casdncnsadc</p>
        </div>
        <div className={styles.translateSidebar__section}>
          <h6 className={styles.translateSidebar__subtitle}>
            Example sentences
          </h6>
          <p>ndkjfnd sdfnjasdncasdjncsdcnc sdncjc</p>
        </div>
        <div className={styles.translateSidebar__button}>
          <Button onClick={() => setIsCreateFlashcardOpen(true)}>
            Create flashcard
          </Button>
        </div>
      </div>
      <Modal
        isOpen={isCreateFlashcardOpen}
        onClose={() => {
          setIsCreateFlashcardOpen(false);
        }}
        title="Create flashcard"
      >
        <form>
          <TextField label="Front side">
            <input type="text" placeholder="Hola" />
          </TextField>
          <TextField label="Back side">
            <input type="text" placeholder="Hello" />
          </TextField>
          <TextField label="Deck">
            <select>
              <option className={styles.option} value="">Select a deck</option>
              <option className={styles.option} value="deck1">Deck 1</option>
              <option className={styles.option} value="deck2">Deck 2</option>
              <option className={styles.option} value="deck3">Deck 3</option>
            </select>
          </TextField>
          <FormError message={error} />
          <FormSuccess message={success} />
        </form>
        <div>
          <Button
            outlined={true}
            onClick={() => {
              setIsCreateFlashcardOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button>
            {/* <Button onClick={uploadDocument}>
      {isLoading? <Loader color="white"></Loader> : "upload"} */}
            Create
          </Button>
        </div>
      </Modal>
    </>
  );
};
