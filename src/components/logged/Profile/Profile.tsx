import { Button } from "app/components/shared/Button";
import { Modal } from "app/components/shared/Modal";
import styles from "./Profile.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { TextField } from "app/components/shared/TextField";
import { ProfileImage } from "./ProfileImage/ProfileImage";

export default function ProfileContent() {
  const [isDeleteAccountOpen, setIsDeleteAccountOpen] = useState(false);
  return (
    <div className={styles.profile}>
    <ProfileImage />
      <div className={styles.profileContent}>
        <ul className={styles.userData}>
            <li>
                <TextField label="First Name"><input type="text" disabled={true} value="Andres"/></TextField>
            </li>
            <li>
                <TextField label="Last Name"><input type="text" disabled={true} value="Andres"/></TextField>
            </li>
            <li>
                <TextField label="Email"><input type="text" disabled={true} value="Andres"/></TextField>
            </li>
            <li>
                <TextField label="Subscription"><input type="text" disabled={true} value="Andres"/></TextField>
            </li>
        </ul>
        <ul className={styles.userOptions}>
          <li>Edit names</li>
          <li>Change subscription</li>
          <li>Change password</li>
          <li
            onClick={() => {
              setIsDeleteAccountOpen(true);
            }}
          >
            Delete account
          </li>
        </ul>
      </div>
      <Modal
        isOpen={isDeleteAccountOpen}
        onClose={() => {
          setIsDeleteAccountOpen(false);
        }}
        title="Delete account"
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
            onClick={() => {
              setIsDeleteAccountOpen(false);
            }}
          >Cancel</Button>
          <Button
            outlined={true}
            onClick={() => {
              setIsDeleteAccountOpen(false);
            }}
            >Delete</Button>
        </div>
      </Modal>
    </div>
  );
}
