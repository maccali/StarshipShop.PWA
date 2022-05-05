import { useEffect, useRef, InputHTMLAttributes } from "react";
import styles from "./styles.module.css";
import { useField } from "@unform/core";

type InputFace = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
};

export default function Input({ name, label, ...rest }: InputFace) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <div className={styles.card}>
      <div className={styles.label}>
        {label ? <label htmlFor={fieldName}>{label}</label> : ""}
      </div>
      <input
        ref={inputRef}
        id={fieldName}
        className={styles.input}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span style={{ color: "#f00" }}>{error}</span>}
    </div>
  );
}
