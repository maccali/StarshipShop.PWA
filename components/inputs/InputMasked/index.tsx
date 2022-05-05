import { useEffect, useRef, InputHTMLAttributes } from "react";
import { useField } from "@unform/core";

import InputMask, { Props } from "react-input-mask";

import styles from "./styles.module.css";

type InputFace = InputHTMLAttributes<HTMLInputElement> &
  Props & {
    name: string;
    mask: (string | (string | RegExp)[]) & string;
    label?: string;
  };

export function InputMasked({ name, label, mask, ...rest }: InputFace) {
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

      <InputMask
        ref={inputRef}
        id={fieldName}
        mask={mask}
        className={styles.input}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span style={{ color: "#f00" }}>{error}</span>}
    </div>
  );
}
