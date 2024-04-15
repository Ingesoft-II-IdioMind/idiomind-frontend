"use client";

import styles from "../../../styles/Library.module.scss";
import Image from "next/image";
import { Button } from "app/components/shared/Button";
import { Document } from "app/components/logged/Library/Document";
import { TextField } from "app/components/shared/TextField";
import { useState, useEffect, ChangeEvent } from "react";
import { Modal } from "app/components/shared/Modal";
import { useRouter } from "next/navigation";
import { useRef } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormError } from "app/components/home/auth/FormError";
import { FormSuccess } from "app/components/home/auth/FormSuccess";
import { useBringDocumentsMutation, useUploadDocumentMutation } from "app/redux/features/docApiSlice";
import { toast } from "react-toastify";
import { Loader } from "app/components/shared/Loader";

interface DocumentType {
  titulo: string;
  id: string;
}

export default function Library() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [documents, setDocuments] = useState<DocumentType[]>([]);;
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [titleUpload, setTitleUpload] = useState("");
  const [autorUpload, setAutorUpload] = useState("");
  const [fileUpload, setFileUpload] = useState<File | null>(null);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [uploadDocument2, { isLoading }] = useUploadDocumentMutation();
  const [bringDocuments2, { isLoading: isLoading2 }] = useBringDocumentsMutation();

  useEffect(() => {
    fetchDocuments();
  }, []);
  
  const fetchDocuments = () => {
    bringDocuments2(undefined)
      .unwrap()
      .then((response) => {
        console.log(response);
        setDocuments(response);
      })
      .catch((e) => {
        toast.error(e.data.detail || "There was an error while loading the documents, please try again");
      });
  };

  const handleTitleUploadChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitleUpload(event.target.value);
  };

  const handleFileUploadChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) {
      setSuccess(undefined);
      setError("Please select a file to upload");
    } else if (file.size > 2 * 1024 * 1024) {
      setSuccess(undefined);
      setError("The document is to big, please select a document smaller than 2MB");
      event.target.value = ""; // Clear the selected file
    } else {
      setSuccess(undefined);
      setError(undefined);
      setFileUpload(event.target.files ? event.target.files[0] : null);
    }
  };

  const handleAutorUploadChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAutorUpload(event.target.value);
  };

  const fileToBase64 = (file:File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  async function uploadDocument() {
    if (!fileUpload) {
      console.error("No file to upload");
      return;
    }
    const file = fileUpload; // get the file from the form data
    const base64 = await fileToBase64(file); // convert the file to base64
    // console.log(base64);
    if (titleUpload=="") {
      setSuccess(undefined);
      setError("Please enter a title for the document");
      return;
    }else if (fileUpload==null) {
      setSuccess(undefined);
      setError("Please select a file to upload");
      return;
    }else{
      uploadDocument2({titulo:titleUpload,autor:autorUpload,base64:base64})
      .unwrap()
      .then(() => {
        setError(undefined);
        setSuccess("Document uploaded successfully");
        toast.success("Document uploaded successfully");
        setIsUploadOpen(false);
        setSuccess(undefined);
        setFileUpload(null);
        setTitleUpload("");
        fetchDocuments();
      })
      .catch((e) => {
        setSuccess(undefined);
        setError(e.data.detail || "There was an error while loading the document, please try again");
      });
    }
  };

  const title = "Learning English";
  const imageUrl = "/images/soul.png";
  const fileType = "pdf";
  const fileName = "cuestionario.pdf";
  let fileContentBase64 = "";

  const handleClick = (id: string) => {
    router.push(`/logged/${id}`);
  };

  const documentComponents = [];
  for (let i = 0; i < 10; i++) {
    documentComponents.push(
      <Document
        key={i}
        title={title}
        imageUrl={imageUrl}
        onClick={() => handleClick("CuestionarioSistemas")}
      />
    );
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
          >
            Upload document
          </Button>
        </div>
        <div className={styles.documentsContainer}>
          {isLoading2? <Loader color="orange"></Loader> :documents.map((document, index) => (
            <Document
              key={index}
              title={document.titulo}
              imageUrl={"/images/soul.png"}
              onClick={() => handleClick(document.id)}
            />
          ))}
        </div>
      </div>
      <Modal
        isOpen={isUploadOpen}
        onClose={() => {
          setIsUploadOpen(false);
        }}
        title="Upload document"
      >
        <form >
          <TextField label="Document title">
          <input 
          type="text" 
          placeholder="Book title"
          onChange={handleTitleUploadChange}
          />
          </TextField>
          <TextField label="Author of the text">
          <input 
          type="text" 
          placeholder="Lernen"
          onChange={handleAutorUploadChange}
          />
          </TextField>
          <TextField label="Document file">
            <input 
            type="file" 
            onChange={handleFileUploadChange}
            />
          </TextField>
          
          <FormError message={error} />
        <FormSuccess message={success} />
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
          <Button onClick={uploadDocument}>
          {isLoading? <Loader color="white"></Loader> : "upload"}
          </Button>
        </div>
      </Modal>
    </>
  );
}
