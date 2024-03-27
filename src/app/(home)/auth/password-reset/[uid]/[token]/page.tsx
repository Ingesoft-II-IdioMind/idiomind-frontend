import type { Metadata } from "next";
import styles from "../../../../../components/home/auth/Auth.module.scss";
import { ConfirmResetPasswordForm } from "app/components/home/auth/Login/ConfirmPasswordReset";

export const metadata: Metadata = {
  title: "Password Reset Confirm",
  description: "password reset confirm page",
};

interface Props {
  params: {
    uid: string;
    token: string;
  };
}

export default function ResetPage({ params: { uid, token } }: Props) {
  return (
    <div className={styles.auth}>
      <ConfirmResetPasswordForm uid={uid} token={token} />
    </div>
  );
}
