import { ComponentType, MouseEventHandler, ReactNode } from 'react';
import styles from "./Button.module.scss";

interface ButtonProps {
  disabled?: boolean;
  outlined?: boolean;
  type?: "button" | "submit" | "reset";
  haveIcon?: boolean;
  Icon?: ComponentType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

export default function Button ({ type = "button", onClick, outlined=false, haveIcon=false, Icon,disabled=false, children}: ButtonProps) {

    return (
      <button type={type} className={`${styles.button} ${outlined ? styles.button__secondary : styles.button__primary}`} onClick={onClick} disabled={disabled}>
        {haveIcon && Icon ? <Icon /> : null}
        {children}
      </button>
    );
}