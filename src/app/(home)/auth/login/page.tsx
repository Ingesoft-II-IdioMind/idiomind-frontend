import LoginForm from "app/components/home/auth/Login/LoginForm";
import { LoginImage } from "app/components/home/auth/Login/LoginImage";
import styles from "../../../../components/home/auth/Auth.module.scss";
import { MainAccounts } from "app/components/home/MainAccounts";

export default function Login() {
  return (
    <div className={styles.auth}>
      {/* <MainAccounts /> */}
      <LoginImage />
      <LoginForm />
    </div>
  );
}
