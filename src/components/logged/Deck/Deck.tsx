import styles from "./Deck.module.scss";

export const Deck = () => {
  return (
    <div className={styles.deckNav}>
      <h6>Main Deck</h6>
      <div className={styles.deckNav__options}>
        <p>64 cards to study</p>
        <svg
          width="9"
          height="32"
          viewBox="0 0 9 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector_2"
            d="M4.76459 23.7037C3.64132 23.7037 2.56406 24.1407 1.76979 24.9187C0.975514 25.6966 0.529297 26.7517 0.529297 27.8519C0.529297 28.952 0.975514 30.0071 1.76979 30.785C2.56406 31.563 3.64132 32 4.76459 32C5.88786 32 6.96512 31.563 7.7594 30.785C8.55367 30.0071 8.99988 28.952 8.99988 27.8519C8.99988 26.7517 8.55367 25.6966 7.7594 24.9187C6.96512 24.1407 5.88786 23.7037 4.76459 23.7037ZM4.76459 11.8519C3.64132 11.8519 2.56406 12.2889 1.76979 13.0668C0.975514 13.8447 0.529297 14.8998 0.529297 16C0.529297 17.1002 0.975514 18.1553 1.76979 18.9332C2.56406 19.7111 3.64132 20.1481 4.76459 20.1481C5.88786 20.1481 6.96512 19.7111 7.7594 18.9332C8.55367 18.1553 8.99988 17.1002 8.99988 16C8.99988 14.8998 8.55367 13.8447 7.7594 13.0668C6.96512 12.2889 5.88786 11.8519 4.76459 11.8519ZM8.99988 4.14815C8.99988 3.04799 8.55367 1.99289 7.7594 1.21496C6.96512 0.437036 5.88786 0 4.76459 0C3.64132 0 2.56406 0.437036 1.76979 1.21496C0.975514 1.99289 0.529297 3.04799 0.529297 4.14815C0.529297 5.24831 0.975514 6.3034 1.76979 7.08133C2.56406 7.85926 3.64132 8.2963 4.76459 8.2963C5.88786 8.2963 6.96512 7.85926 7.7594 7.08133C8.55367 6.3034 8.99988 5.24831 8.99988 4.14815Z"
            fill="#E67320"
          />
        </svg>
      </div>
    </div>
  );
};