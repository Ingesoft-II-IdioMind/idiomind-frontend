import styles from "../Welcome.module.scss";

export const Questions = () => {
  return (
    <>
      <h1 className={styles.left}>Frequently asked questions</h1>
      <ul className={styles.questions}>
        <li>
          <div>What are the main tools that IdioMind gives to users?</div>
          <p>
            With IdioMind you have access to different tools to inmerse yourself
            in lenguage learning like real time traslation, phonetic practices
            and grammar exercises.
          </p>
        </li>
        <li></li>
      </ul>
    </>
  );
};
