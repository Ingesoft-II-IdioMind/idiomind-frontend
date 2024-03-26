import { MisionImage } from "./MisionImage";
import styles from "./AboutUs.module.scss";
import { VisionImage } from "./VisionImage";

export const AboutUsContent = () => {
  return (
    <>
      <section className={styles.aboutBlock}>
        <VisionImage />
        <div className={styles.aboutVision}>
          <h2>Vision:</h2>
          <p>
            At IdioMind we strive to facilitate access and mastery of new
            languages for our users through innovative tools. We constantly work
            to ensure that our users have an immersive, pleasant and, above all,
            effective experience when learning a new language.
          </p>
        </div>
      </section>

      <section className={`${styles.aboutBlock} ${styles.reverse}`}>
        <MisionImage />
        <div className={styles.aboutMision}>
          <h2>Mision:</h2>
          <p>
            By 2027 IdioMind will become a benchmark in language learning
            through the use of innovative technology, offering a platform that
            motivates and accompanies thousands of people in the process of
            mastering a new language; breaking cultural barriers and providing
            more opportunities, both work and personal, in an increasingly
            interconnected world.
          </p>
        </div>
      </section>
    </>
  );
};
