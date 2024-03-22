import { ComponentType, MouseEventHandler } from 'react';
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  outlined?: boolean;
  type?: "button" | "submit" | "reset";
  haveIcon?: boolean;
  Icon?: ComponentType;
  onClick?: MouseEventHandler<HTMLButtonElement>; 
}

export default function Button ({ text, type = "button", onClick, outlined=false, haveIcon=false, Icon}: ButtonProps) {

    return (
      <button type={type} className={`${styles.button} ${outlined ? styles.button__secondary : styles.button__primary}`} onClick={onClick} >
        {haveIcon && Icon ? <Icon /> : null}
        {text}
      </button>
    );
}