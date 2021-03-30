import * as React from "react";
import {useForm} from "react-hook-form";

import styles from "./form.module.css";

function Form() {
  const {handleSubmit, register} = useForm();

  const onSubmit = value => {
    console.log(value);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Label id="email">Email</Label>
        <Input id="email" />
        <Label id="password">Password</Label>
        <InputGroup>
          <Input id="password" />
          <InputRightElement>
            <button>Show</button>
          </InputRightElement>
        </InputGroup>
        <Button type="submit">Masuk</Button>
      </form>
    </div>
  );
}

function Label({children, id}) {
  return (
    <label htmlFor={id} className={styles.label}>
      {children}
    </label>
  );
}

function InputGroup({children}) {
  return <div className={styles.inputGroup}>{children}</div>;
}

function Input({placeholder, type, id}) {
  return (
    <input
      id={id}
      type={type || "text"}
      placeholder={placeholder}
      className={styles.input}
    />
  );
}

function InputRightElement({children}) {
  return <div className={styles.inputRightElement}>{children}</div>;
}

function Button({type, children}) {
  return (
    <button type={type || "button"} className={styles.button}>
      {children}
    </button>
  );
}

export default Form;
