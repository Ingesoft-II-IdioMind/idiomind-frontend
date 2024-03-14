import Link from "next/link";
import styles from "./Document.module.scss";
import Image from "next/image";

export const Document = ({  }) => {
  const title = "Learning English";
  const imageUrl = "/images/soul.png";

  return (
    <Link href="#" className={styles.documentContainer}>
      <div className={styles.documentImage}>
        <Image src={imageUrl} alt="DocumentCover" layout="fill" objectFit="cover" />
        <div className={styles.gradientOverlay}></div>
      </div>
      <div className={styles.documentTitleContainer}>
        <h5 className={styles.documentTitle}>{title}</h5>
      </div>
    </Link>
  );
};