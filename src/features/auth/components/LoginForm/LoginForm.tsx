import styles from "./LoginForm.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("john_doe");
  const [password, setPassword] = useState("QwErTy123");

  return (
    <div className={styles.login_wrapper}>
      <Link to={"../register"} className={styles.to_reg}>
        Зарегистрироваться
      </Link>
      <div className={styles.login}>
        <div className={styles.title}>MilkHunters ID</div>
        <div className={styles.subtitle}>Войдите в аккаунт MilkHunters</div>
        <div className={styles.form}>
          <input
            className={clsx("input", {
              [styles.username]: true,
            })}
            type="text"
            placeholder="Имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={clsx("input", {
              [styles.password]: true,
            })}
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.button_wrapper}>
          <button
            className={clsx("button is-black is-rounded is-normal", {
              [styles.login_button]: true,
            })}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};
