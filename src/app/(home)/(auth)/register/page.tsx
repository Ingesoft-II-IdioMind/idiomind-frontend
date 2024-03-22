import { RegisterForm } from "app/components/home/auth/Register";
import { RegisterImage } from "app/components/home/auth/Register/RegisterImage/RegisterImage";
import styles from "../../../../components/home/auth/Auth.module.scss";

export default function Register() {
    return (
      <div className={styles.auth}>
        <RegisterImage />
        <RegisterForm />
      </div>
    );
  }
  