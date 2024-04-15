import Link from "next/link";
import styles from "./NavDocument.module.scss";
import { useState } from "react";
import { useDeleteDocumentMutation } from "app/redux/features/docApiSlice";
import { Modal } from "../Modal";
import { Button } from "../Button";
import { FormError } from "app/components/home/auth/FormError";
import { FormSuccess } from "app/components/home/auth/FormSuccess";
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import { useSidebar } from "app/components/logged/Library/PDFViewer/SideBarProvider";


export default function NavDocument({name,id}:{name:string, id:string}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteDocumentOpen, setIsDeleteDocumentOpen] = useState(false);
  const [deleteDocument2, { isLoading }] = useDeleteDocumentMutation();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const { setIsSidebarOpen } = useSidebar();

  const handleOpenNotes = () => {
    setIsSidebarOpen(true);
    setIsOpen(false);
  };

  function deleteDocument() {
    deleteDocument2({id:id})
      .unwrap()
      .then(() => {
        setError(undefined);
        toast.success("Document deleted successfully");
        setSuccess("Document deleted successfully");
        router.push('/logged');
      })
      .catch((e) => {
        setSuccess(undefined);
        setError(
          e.data.detail ||
            "There was an error while deleting the document, please try again"
        );
      });
  }



  return (
    <nav className={styles.navDocument}>
      <Link href={"/logged"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </Link>

      <h1 className={styles.navDocument__title}>{name}</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 512"
        onClick={() => setIsOpen(!isOpen)}
      >
        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
      </svg>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li onClick={handleOpenNotes}>Notes</li>
          <li>Edit name</li>
          <li onClick={() => {
              setIsDeleteDocumentOpen(true);
            }}>Delete document</li>
        </ul>
      )}
      <Modal
        isOpen={isDeleteDocumentOpen}
        onClose={() => {
          setIsDeleteDocumentOpen(false);
        }}
        title="Delete Document"
      >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
          </svg>
          <p>
            Are you sure you want to delete your document?, once you delete it you
            can no longer recover it.
          </p>
        </div>
        <FormError message={error} />
          <FormSuccess message={success} />
        <div>
          <Button
            onClick={() => {
              setIsDeleteDocumentOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button outlined={true} onClick={deleteDocument}>
            Delete
          </Button>
        </div>
      </Modal>
    </nav>
  );
}
