import React from "react";
import styles from "./MainLayout.module.scss";
import { clsx } from "clsx";
import { NavLink } from "react-router-dom";
import "bulma/css/bulma.min.css";

const Header = () => {
  const auth = false;
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

            <figure className="image is-50x50">
              <img
                className="is-rounded"
                src="https://leonardo.osnova.io/1232c2f0-0bcd-5561-9a17-b8a1d0edaef4/-/scale_crop/48x48/-/format/webp"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const auth = false;
  return (
    <div className={styles.sidebar}>
      {auth ? (
        <div className={styles.items}>
          <NavLink
            to={"articles"}
            className={({ isActive }) =>
              clsx({ [styles.item]: true, [styles.active]: isActive })
            }
          >
            <i className="fi fi-rr-home"></i>
            <div className={styles.name}>Главная</div>
          </NavLink>
          <NavLink
            to={"aibryx"}
            className={({ isActive }) =>
              clsx({ [styles.item]: true, [styles.active]: isActive })
            }
            end
          >
            <i className="fi fi-rr-user"></i>
            <div className={styles.name}>Профиль</div>
          </NavLink>
          <NavLink
            to={"search"}
            className={({ isActive }) =>
              clsx({ [styles.item]: true, [styles.active]: isActive })
            }
          >
            <i className="fi fi-rr-search"></i>
            <div className={styles.name}>Поиск</div>
          </NavLink>
          <NavLink
            to={"bookmarks"}
            className={({ isActive }) =>
              clsx({ [styles.item]: true, [styles.active]: isActive })
            }
          >
            <i className="fi fi-rr-bookmark"></i>
            <div className={styles.name}>Закладки</div>
          </NavLink>
          <div className={clsx({ [styles.item]: true, [styles.create]: true })}>
            <NavLink
              to={"/new"}
              className={clsx("button is-primary is-fullwidth is-rounded", {
                [styles.create_btn]: true,
              })}
            >
              Написать
            </NavLink>
          </div>
        </div>
      ) : (
        <div className={styles.items}>
          <NavLink
            to={"articles"}
            className={({ isActive }) =>
              clsx({ [styles.item]: true, [styles.active]: isActive })
            }
          >
            <i className="fi fi-rr-home"></i>
            <div className={styles.name}>Главная</div>
          </NavLink>
          <NavLink
            to={"search"}
            className={({ isActive }) =>
              clsx({ [styles.item]: true, [styles.active]: isActive })
            }
            end
          >
            <i className="fi fi-rr-search"></i>
            <div className={styles.name}>Поиск</div>
          </NavLink>
          <NavLink
            to={"/auth/login"}
            className={({ isActive }) =>
              clsx({ [styles.item]: true, [styles.active]: isActive })
            }
            end
          >
            <i className="fi fi-rr-user"></i>
            <div className={styles.name}>Войти</div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

const MobileSidebar = () => {
  return <div className={styles.mobile_sidebar}>Mobile Sidebar</div>;
};

type ViewProps = {
  children: React.ReactNode;
};

const View = ({ children }: ViewProps) => {
  return <main className={styles.view}>{children}</main>;
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
          <View>{children}</View>
          <Live />
          <Footer />
          <MobileSidebar />
        </div>
      </div>
    </div>
  );
};
