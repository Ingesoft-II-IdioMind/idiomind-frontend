import LoginForm from "app/components/home/auth/Login/LoginForm";
import { LoginImage } from "app/components/home/auth/Login/LoginImage";
import styles from "../../../../components/home/auth/Auth.module.scss";

export default function Login() {
  return (
    <div className={styles.auth}>
      <LoginImage />
      <LoginForm />
    </div>
  );
}
