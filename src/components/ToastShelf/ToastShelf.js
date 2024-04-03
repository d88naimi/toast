import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ showToast, children, handleCloseToast }) {
  return (
    <ol className={styles.wrapper}>
      {showToast.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            handleCloseToast={handleCloseToast}
            id={toast.id}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
