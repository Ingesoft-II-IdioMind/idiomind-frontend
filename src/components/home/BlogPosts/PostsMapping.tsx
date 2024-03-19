import BlogPost from "./BlogPost";
import styles from "./Blog.module.scss";

export default function PostsMapping() {
    return (
      <div className={styles.posts}>
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    );
  }