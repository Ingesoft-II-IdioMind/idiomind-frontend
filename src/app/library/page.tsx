import styles from "./Library.module.scss";
import Image from "next/image";
import { Button } from 'app/components/shared/Button';
import { Document } from 'app/components/Document';

export default function Library() {
    const documentComponents = [];
    for (let i = 0; i < 16; i++) {
        documentComponents.push(<Document key={i} />);
    }

    return (
    <div className={styles.libraryContainer}>
        <h1>Library</h1>
        <div className={styles.searchDocument}>
            <div className={styles.searchIcon}>
                <Image src="/icons/searchIcon.svg" alt="Search" width={32} height={32} />
            </div>
            <input type="Search here" placeholder="Search here" className={styles.searchBar}/>
            <Button />
        </div>
        <div className={styles.documentsContainer}>
            {documentComponents}
        </div>
    </div>
    );
  }