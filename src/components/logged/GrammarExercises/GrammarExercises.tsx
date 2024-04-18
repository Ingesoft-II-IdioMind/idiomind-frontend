import Link from "next/link";
import styles from "./Grammar.module.scss";

export function GrammarExercises() {
  const sections = [
    {
      title: "Section 1",
      exercises: ["Exercise 1", "Exercise 2", "Exercise 3"],
    },
    {
      title: "Section 2",
      exercises: ["Exercise 1", "Exercise 2", "Exercise 3"],
    },
    // Add more sections as needed
  ];

  return (
    <div className={styles.grammarContainer}>
      {sections.map((section, index) => (
        <div key={index} className={styles.grammarSection}>
          <h2 className={styles.grammarSection__title}>{section.title}</h2>
          {section.exercises.map((exercise, index) => (
            <Link href="#" className={styles.grammarSection__exercise}>
              <div className={styles.grammarSection__exerciseLevel}>A1</div>
              <p key={index} className={styles.grammarSection__exerciseName}>
                {exercise}
              </p>
              <IconArrowRight />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

const IconArrowRight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
  );
};
