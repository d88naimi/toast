import React, { Children, useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [radioOption, setRadioOption] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  // const [showToast, setShowToast] = React.useState(false);
  const [showToast, setShowToast] = React.useState([
    {
      message: "Something went wrong!",
      variant: "error",
    },
    {
      message: "17 photos uploaded",
      variant: "success",
    },
  ]);

  const handleCloseToast = () => {
    setShowToast(false);
    setMessage("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowToast(true);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
        {showToast && (
          <ToastShelf variant={radioOption} handleCloseToast={handleCloseToast}>
            {message}
          </ToastShelf>
        )}
      </header>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <input
                className={styles.messageInput}
                id="message"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <fieldset
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {VARIANT_OPTIONS.map((variant) => (
                  <label htmlFor={`variant-${variant}`} key={variant}>
                    <input
                      type="radio"
                      name="variant"
                      id={variant}
                      value={variant}
                      checked={radioOption === variant}
                      onChange={(event) => {
                        setRadioOption(event.target.value);
                      }}
                    />
                    {variant}
                  </label>
                ))}
              </fieldset>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
