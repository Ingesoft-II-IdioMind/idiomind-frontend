import styles from "../Board/Board.module.scss";

interface BoardProps {
    sentence: string;
}

export const Board = ({ sentence }: BoardProps) => {

  return (
    <>
      <div className={styles.board} >
        <h2 className={styles.boardText}>{sentence}</h2>
      </div>
    </>
  );
};
