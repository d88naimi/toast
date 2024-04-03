import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ variant, children, handleCloseToast }) {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        <Toast variant={variant}>{children}</Toast>
      </li>
    </ol>
  );
}

export default ToastShelf;
