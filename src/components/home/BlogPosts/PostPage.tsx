import Image from "next/image";
import styles from "./Blog.module.scss";
import Link from "next/link";

export default function PostPage({ id }: { id: string }) {
  return (
    <>
      <div className={styles.navPost}>
        <Link href={"/blog"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Link>
        <h1>Titulo</h1>
        <div></div>
      </div>

      <div className={styles.PostPage}>
        <p>
          <b>Autor:</b>Andres Morales
        </p>
        <p>
          <b>Release date:</b>24/12/2023
        </p>
        <Image
          src="/images/exampleImage.png"
          alt="foto of post"
          width={100}
          height={100}
          className={styles.PostPage__foto}
        />
        <p>hellloo</p>
      </div>
    </>
  );
}
