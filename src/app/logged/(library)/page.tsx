"use client";
import styles from "../../../styles/Library.module.scss";
import Image from "next/image";
import { Button } from "app/components/shared/Button";
import { Document } from "app/components/logged/Library/Document";
import { TextField } from "app/components/shared/TextField";
import { useState, useEffect } from "react";
import { Modal } from "app/components/shared/Modal";
import { PDFViewer } from "app/components/logged/Library/PDFViewer";

//This won't be used when integrated with backend

//------------------------------

export default function Library() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] =
    useState<DocumentDataType | null>(null);
  const [showPDFViewer, setShowPDFViewer] = useState(false);

  // This will be brought from the backend when the page is loaded
  const title = "Learning English";
  const imageUrl = "/images/soul.png";

  const fileType = "pdf";
  const fileName = "cuestionario.pdf";

  let fileContentBase64 = "";
  // useEffect(() => {
  //   const baseUrl = 'http://localhost:3000';
  //   const filePath = '/docExample/Calculo.pdf';
  //   const absoluteUrl = baseUrl + filePath;

  //   fetch(absoluteUrl)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.arrayBuffer();
  //     })
  //     .then(buffer => {
  //       if (buffer.byteLength === 0) {
  //         throw new Error('Fetched PDF is empty');
  //       }
  //       const base64Flag = 'data:application/pdf;base64,';
  //       fileContentBase64 = base64Flag + btoa(
  //         new Uint8Array(buffer)
  //           .reduce((data, byte) => data + String.fromCharCode(byte), '')
  //       );
  //       setSelectedDocument({ title, fileType, fileName, fileContentBase64 });
  //     })
  //     .catch(error => {
  //       console.error("Error fetching PDF file:", error);
  //     });
  // }, []);
  // console.log(fileContentBase64)

  //----------------------Test---------------------------------------------
  const pdfUrl = "http://localhost:3000/docExample/cuestionario.pdf";
  //----------------------Test---------------------------------------------

  interface DocumentDataType {
    title: string;
    fileType: string;
    fileName: string;
    fileContentBase64: string;
  }

  const handleDocumentClick = (documentData: DocumentDataType) => {
    setSelectedDocument(documentData);
    setShowPDFViewer(true);
  };

  const handleClosePDFViewer = () => {
    setShowPDFViewer(false);
    setSelectedDocument(null);
  };

  const documentComponents = [];
  for (let i = 0; i < 2; i++) {
    documentComponents.push(
      <Document
        key={i}
        title={title}
        imageUrl={imageUrl}
        onClick={() =>
          handleDocumentClick({ title, fileType, fileName, fileContentBase64 })
        }
      />
    );
  }

  return (
    <>
      <h1>Library</h1>
      <div className={styles.libraryContainer}>
        {!showPDFViewer ? (
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
            >
              Upload document
            </Button>
            <div className={styles.documentsContainer}>
              {documentComponents}
            </div>
          </div>
        ) : (
          // <PDFViewer
          //   title={title}
          //   fileType={fileType}
          //   fileName={fileName}
          //   fileContentBase64={fileContentBase64}
          //   // onClose={handleClosePDFViewer}
          // />

          <PDFViewer
            pdfUrl={pdfUrl}
            //title={title}
            // onClose={handleClosePDFViewer}
          />
        )}
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
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setIsUploadOpen(false);
            }}
          >
            Upload
          </Button>
        </div>
      </Modal>
    </>
  );
}
