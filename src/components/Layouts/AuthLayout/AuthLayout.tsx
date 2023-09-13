import styles from "./AuthLayout.module.scss";

export const AuthLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>{children}</div>
    </div>
  );
};
