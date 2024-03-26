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
            text="upload document"
            onClick={() => {
              setIsUploadOpen(true);
            }}
          />
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
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
          </svg>
          <p>
            Are you sure you want to delete your account, once you delete it you
            can no longer recover it
          </p>
        </div>
        <div>
          <Button
            text="Cancel"
            onClick={() => {
              setIsUploadOpen(false);
            }}
          />
          <Button
            text="Delete"
            outlined={true}
            onClick={() => {
              setIsUploadOpen(false);
            }}
          />
        </div>
      </Modal>
    </>
  );
}
