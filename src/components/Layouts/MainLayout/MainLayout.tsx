import React from "react";
import styles from "./MainLayout.module.scss";
import { clsx } from "clsx";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_layout}>
        <div className={styles.logo_wrapper}>
          <div className={styles.logo}> MilkHunters</div>
        </div>
        <div className={styles.search_wrapper}>
          <input className={styles.search} placeholder="Поиск..." />
        </div>
        <div className={styles.header_tools_wrapper}>
          <div className={styles.header_tools}>
            <i
              className={clsx("fi fi-rr-bell", {
                [styles.notifications]: true,
              })}
            ></i>

            <figure className="image is-48x48">
              <img
                className="is-rounded"
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return <div className={styles.sidebar}>Sidebar</div>;
};

const MobileSidebar = () => {
  return <div className={styles.mobile_sidebar}>Mobile Sidebar</div>;
};

type ViewProps = {
  children: React.ReactNode;
};

const View = () => {
  return <main className={styles.view}>View</main>;
};

const Live = () => {
  return <div className={styles.live}>Live</div>;
};

const Footer = () => {
  return <div className={styles.footer}>Footer</div>;
};

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layout_wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.layout}>
          <Sidebar />
          <View />
          <Live />
          <Footer />
          <MobileSidebar />
        </div>
      </div>
    </div>
  );
};
