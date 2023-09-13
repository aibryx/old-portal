import { useState } from "react";
import styles from "./RegisterForm.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const [username, setUsername] = useState("alex_hotz");
  const [email, setEmail] = useState("alexhotz123@gmail.com");
  const [password, setPassword] = useState("QwErTy123");
  const [confirmPassword, setConfirmPassword] = useState("QwErTy123");

  return (
    <div className={styles.reg_wrapper}>
      <Link to={"../login"} className={styles.to_login}>
        Войти
      </Link>
      <div className={styles.reg}>
        <div className={styles.title}>MilkHunters ID</div>
        <div className={styles.subtitle}>
          Создайте единый аккаунт MilkHunters
        </div>
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
            className={clsx("input ", {
              [styles.email]: true,
            })}
            type="email"
            placeholder="Адрес электронной почты"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <input
            className={clsx("input", {
              [styles.confirm_password]: true,
            })}
            type="password"
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className={styles.button_wrapper}>
          <button
            className={clsx("button is-black is-rounded is-normal", {
              [styles.reg_button]: true,
            })}
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};
