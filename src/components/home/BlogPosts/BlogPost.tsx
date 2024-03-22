import Image from "next/image";
import styles from "./Blog.module.scss";
import Link from "next/link";
import { Button } from "app/components/shared/Button";

export default function BlogPost(props: any) {
  return (
    <Link className={styles.blogPost} href="/">
        <Image src="/images/exampleImage.png"
        alt="foto of post"
        width={300}
        height={200}
        className={styles.blogPost__foto}
        />
        <div className={styles.blogPost__content}>
            <div className={styles.blogPost__content__text}>
              <h5>Post title</h5>
              <p className={styles.blogPost__content__text__description}>Lorem ipsum dolor sit amet consectetur. Volutpat commodo nunc ullamcorper dignissim augue euismod sed fermentum.ullamcorper dignissim augue euismod sed fermentum</p>
              <p className={styles.blogPost__content__text__date}>29/08/2024</p>
            </div>
            <Button text="Read more"/>
        </div>
    </Link>
  );
}
