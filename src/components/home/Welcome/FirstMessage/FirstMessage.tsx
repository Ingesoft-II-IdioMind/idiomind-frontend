import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Welcome.module.scss";

export const FirstMessage = () => {
    return (
        <div className={styles.firstMessage}>
        <FontAwesomeIcon icon={faBook} className={styles.firstMessage__icon} size="sm"/>
        <h2>
          Learn a language whenever and wherever you want with the best tools
          designed for you.
        </h2>
      </div>
    );
  };
  