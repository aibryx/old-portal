import styles from "./Confirm.module.scss";
import clsx from "clsx";
import { useState } from "react";
import { AuthLayout } from "../../../../components/Layouts/AuthLayout/AuthLayout.tsx";

export const ConfirmEmail = () => {
  const [code, setCode] = useState("");

  return (
    <AuthLayout>
      <div className={styles.confirm_email_wrapper}>
        <button className={styles.to_reg}>
          <i className="fi fi-rr-circle-xmark"></i>
        </button>
        <div className={styles.confirm_email}>
          <div className={styles.title}>MilkHunters ID</div>
          <div className={styles.subtitle}>
            Подтвердите адрес электренной почты
            <br />
          </div>
          <div className={styles.form}>
            <input
              className={clsx("input", {
                [styles.code]: true,
              })}
              type="text"
              placeholder="Введите код"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className={styles.button_wrapper}>
            <button
              className={clsx("button is-black is-rounded is-normal", {
                [styles.confirm_email_button]: true,
              })}
            >
              Подтвердить
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
