import React from "react";
import styles from "./MainLayout.module.scss";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

const Header = () => {
  return <div className={styles.header}>Header</div>;
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
