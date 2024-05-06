import Image from "next/image";
import styles from "./Blog.module.scss";
import Link from "next/link";
import { Button } from "app/components/shared/Button";

export default function BlogPost({id,title, autor, date, content, image}:{id:string,title:string,autor:string, date:string, content:string, image:string}) {
  return (
    <Link className={styles.blogPost} href={`/blog/1`}>
        <Image src="/images/exampleImage.png"
        alt="foto of post"
        width={100}
        height={100}
        className={styles.blogPost__foto}
        />
        <div className={styles.blogPost__content}>
            <div className={styles.blogPost__content__text}>
              <h5>{title}</h5>
              <p className={styles.blogPost__content__text__description}>Lorem ipsum dolor sit amet consectetur. Volutpat commodo nunc ullamcorper dignissim augue euismod sed fermentum.ullamcorper dignissim augue euismod sed fermentum</p>
              <p className={styles.blogPost__content__text__date}>29/08/2024</p>
            </div>
            <Button>Read more</Button>
        </div>
    </Link>
  );
}
