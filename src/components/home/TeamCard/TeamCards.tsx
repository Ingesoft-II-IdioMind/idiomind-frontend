import TeamCard from "./TeamCard";
import styles from "./TeamCard.module.scss";

export const TeamCards = () => {
  return (
    <div className={styles.teamCards}>
      <TeamCard
        name="Andres David Ramirez Chiquillo"
        rol="Front-end developer and ML analyst"
        fotoLink="/images/aboutUs/AndresChiquillo.jpeg"
        githubLink="#"
        linkedinLink="#"
        mailLink="#"
      />
      <TeamCard
        name="Andres Felipe Morales Cortes"
        rol="Back-end developer and ML analyst"
        fotoLink="/images/aboutUs/AndresMorales.png"
        githubLink="#"
        linkedinLink="#"
        mailLink="#"
      />
      <TeamCard
        name="Carlos Enrique Amaya Angarita"
        rol="Back-end developer and ML analyst"
        fotoLink="/images/aboutUs/CarlosAmaya.jpeg"
        githubLink="#"
        linkedinLink="#"
        mailLink="#"
      />
      <TeamCard
        name="Jefferson Duvan Ramirez Castañeda"
        fotoLink="/images/aboutUs/JeffersonRamirez.png"
        rol="Front-end developer and ML analyst"
        githubLink="#"
        linkedinLink="#"
        mailLink="#"
      />
    </div>
  );
};
