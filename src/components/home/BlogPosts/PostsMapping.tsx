import BlogPost from "./BlogPost";
import styles from "./Blog.module.scss";

export default function PostsMapping() {
    return (
      <div className={styles.posts}>
        <BlogPost id="1"/>
        <BlogPost id="2"/>
        <BlogPost id="3"/>
        <BlogPost id="4"/>
        <BlogPost id="5"/>
      </div>
    );
  }