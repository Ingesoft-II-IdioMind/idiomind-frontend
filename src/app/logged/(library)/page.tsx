"use client";
import styles from "../../../styles/Library.module.scss";
import Image from "next/image";
import { Button } from "app/components/shared/Button";
import { Document } from "app/components/logged/Document";
import { TextField } from "app/components/shared/TextField";
import { useState } from "react";
import { Modal } from "app/components/shared/Modal";

export default function Library() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const documentComponents = [];
  for (let i = 0; i < 16; i++) {
    documentComponents.push(<Document key={i} />);
  }

  return (
    <>
      <h1>Library</h1>
      <div className={styles.libraryContainer}>
        <div className={styles.searchDocument}>
          <div className={styles.searchIcon}>
            <Image
              src="/icons/searchIcon.svg"
              alt="Search"
              width={32}
              height={32}
            />
          </div>
          <TextField label="">
            <input
              type="Search here"
              placeholder="Search here"
              className={styles.searchBar}
            />
          </TextField>

          <Button
            onClick={() => {
              setIsUploadOpen(true);
            }}
          >Upload document</Button>
        </div>
        <div className={styles.documentsContainer}>{documentComponents}</div>
      </div>
      <Modal
        isOpen={isUploadOpen}
        onClose={() => {
          setIsUploadOpen(false);
        }}
        title="Upload document"
      >
          <form action="">
            <TextField label="Document title">
              <input type="text" />
            </TextField>
            <TextField label="Document file">
              <input type="file" />
            </TextField>
          </form>
        <div>
          <Button
            outlined={true}
            onClick={() => {
              setIsUploadOpen(false);
            }}
          >Cancel</Button>
          <Button
            onClick={() => {
              setIsUploadOpen(false);
            }}
          >Upload</Button>
        </div>
      </Modal>
    </>
  );
}
