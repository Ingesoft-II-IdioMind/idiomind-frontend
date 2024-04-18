"use client";


import { NavDocument } from "app/components/shared/NavDocument";
import { useBringOneDocumentMutation } from "app/redux/features/docApiSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { HighlightArea, MessageIcon, RenderHighlightTargetProps, highlightPlugin } from '@react-pdf-viewer/highlight';
import { PDFViewer } from "app/components/logged/Library/PDFViewer/PDFViewer";


interface DocumentDataType {
  titulo: string;
  autor: string;
  // fileType: string;
  // fileName: string;
  // fileContentBase64: string;
}

export default function PageBook({ params }: { params: { id: string } }) {
  
  const [bringOneDocument2, { isLoading }] = useBringOneDocumentMutation();
  const [document, setDocument] = useState<DocumentDataType>({} as DocumentDataType);

  useEffect(() => {
    fetchDocument();
  }, []);
  
  const fetchDocument = () => {
    bringOneDocument2({id: params.id})
      .unwrap()
      .then((response) => {
        console.log(response);
        setDocument(response);
      })
      .catch((e) => {
        toast.error(e.data.detail || "There was an error while loading the documents, please try again");
      });
  };

  const fileUrl = "http://localhost:3000/docExample/cuestionario.pdf";


  return (
    <>
      <NavDocument name={document.titulo} id={params.id} />
      <PDFViewer
        fileUrl={fileUrl}
      />
    </>
  );
}
