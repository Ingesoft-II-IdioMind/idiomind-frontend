"use client";

import { Button } from "app/components/shared/Button";
import styles from "../Auth.module.scss";
import { TextField } from "app/components/shared/TextField";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useLoginMutation } from "app/redux/features/authApiSlice";
import { FormSuccess } from "../FormSuccess";
import { useAppDispatch } from "app/redux/hooks";
import { setAuth } from "app/redux/features/authSlice";
import { useRouter } from 'next/navigation';
import { Loader } from "app/components/shared/Loader";

type FormInputs = {
  email: string;
  password: string;
};

export default function ResetPasswordForm() {
  const router = useRouter();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [login2, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  //const router = useRouter()

  const onSubmit = handleSubmit((data) => {
    login2({email: data.email, password: data.password})
      .unwrap()
      .then(() => {
        dispatch(setAuth());
        setError(undefined);
        setSuccess("You have been logged successfully");
        router.push('/logged');
      })
      .catch(() => {
        setSuccess(undefined);
        setError("There was an error while login, please try again");
      });
  });

  return (
    <div className={styles.auth__form}>
      <div className={styles.auth__form__logo}>
        <img src="/appLogo.svg" alt="IdioMind logo" />
        <h2>Reset password</h2>
      </div>
      <form onSubmit={onSubmit}>
        <TextField label="E-mail">
          <input
            type="email"
            disabled={isLoading}
            {...register("email", {
              required: {
                value: true,
                message: "*Email is required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "*Invalid email address",
              },
            })}
            placeholder="user@email.com"
          />
        </TextField>
        {errors.email && (
          <span className={styles.errorInput}>{errors.email.message}</span>
        )}
        <Button type="submit" >{isLoading ? <Loader color="white"/> : "Request password reset"}</Button>
      </form>
      <div></div>
    </div>
  );
}
