"use client";

import { NavDocument } from "app/components/shared/NavDocument";
import { useBringOneDocumentMutation } from "app/redux/features/docApiSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  HighlightArea,
  MessageIcon,
  RenderHighlightTargetProps,
  highlightPlugin,
} from "@react-pdf-viewer/highlight";
import { PDFViewer } from "app/components/logged/Library/PDFViewer/PDFViewer";
import { DocumentObject } from "../page";
import { Loader } from "app/components/shared/Loader";

export default function PageBook({ params }: { params: { id: string } }) {
  const [bringOneDocument2, { isLoading }] = useBringOneDocumentMutation();
  const [document, setDocument] = useState<DocumentObject>(
    {} as DocumentObject
  );

  useEffect(() => {
    fetchDocument();
  }, []);

  const fetchDocument = () => {
    bringOneDocument2({ id: params.id })
      .unwrap()
      .then((response) => {
        console.log(response);
        setDocument(response);
      })
      .catch((e) => {
        toast.error(
          e.data.detail ||
            "There was an error while loading the documents, please try again"
        );
      });
  };

  // const fileUrl = "https://idiomind-frontend.vercel.app/docExample/cuestionario.pdf";
  const fileUrl = "https://http://localhost:3000//docExample/cuestionario.pdf";

  return (
    <>
      <NavDocument name={document.titulo} id={params.id} autor={document.autor}/>
      {isLoading ? (
          <Loader color="orange"></Loader>
      ) : (
        <PDFViewer fileUrl={fileUrl} idDoc={params.id}/>
        // <PDFViewer fileUrl={document.archivo_url} idDoc={params.id} />
      )}
    </>
  );
}
