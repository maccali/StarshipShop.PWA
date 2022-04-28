import React from 'react'

import styles from './input.module.css'

type InputFace = {
  title: string;
  type: 'email' | 'password' | 'text' | 'textarea' | 'number';
  label: string;
  placeholder?: string;
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({
  title,
  type,
  label,
  placeholder,
  value,
  onChange,
}: InputFace) {

  if (type === "textarea") {
    return (
      <>
      </>
    )
  }

  if (type === "number") {
    return (
      <>
      </>
    )
  }

  return (
    <>
      <div className={styles.inputcont}>
        <label htmlFor={`${label}`}>{title}</label>
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          name={label}
        />
      </div>
    </>
  )
}

export default Input
