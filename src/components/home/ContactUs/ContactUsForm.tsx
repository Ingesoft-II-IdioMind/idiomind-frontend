"use client";

import Image from "next/image";
import { TextField } from "app/components/shared/TextField";
import styles from "./ContactUs.module.scss";
import { Button } from "app/components/shared/Button";

export default function ContactUsForm() {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__image}>
        <Image
          src="images/contactUsImage.svg"
          alt="Contact us image"
          fill={true}
        />
      </div>
      <form className={styles.contact__form}>
        <TextField label="Name" placeholder="Name" required={true} />
        <TextField label="E-mail" placeholder="E-mail" required={true} />
        <TextField label="Subject" placeholder="Subject" required={true} />
        <TextField label="Message" placeholder="Message" required={true} />
        <Button text="Send message" type="submit" />
      </form>
    </div>
  );
}
