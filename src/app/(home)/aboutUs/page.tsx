import { TeamCard } from "app/components/home/TeamCard";

export default function AboutUs() {
  return (
    <main>
      <h1>About us</h1>
      <p className="BB">
      Idiomind transforms the language learning experience, offering our users a customizable approach that adapts to their individual needs, through immersive and effective tools.
      </p>
      <h2>Mision:</h2>
      <p className="BB">
        At IdioMind we strive to facilitate access and mastery of new languages
        for our users through innovative tools. We constantly work to ensure
        that our users have an immersive, pleasant and, above all, effective
        experience when learning a new language.
      </p>
      <h2>Vision:</h2>
      <p  className="BB">
        By 2027 IdioMind will become a benchmark in language learning through
        the use of innovative technology, offering a platform that motivates and
        accompanies thousands of people in the process of mastering a new
        language; breaking cultural barriers and providing more opportunities,
        both work and personal, in an increasingly interconnected world.
      </p>
      <h2>Development team:</h2>
      <TeamCard />
    </main>
  );
}
