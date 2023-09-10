import React from "react";
import styles from "./MainLayout.module.scss";
import { clsx } from "clsx";
import { NavLink } from "react-router-dom";

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
  const auth = true;
  return (
    <div className={styles.sidebar}>
      {auth ? (
        <div className={styles.items}>
          <NavLink
            to={"posts"}
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
            <button
              onClick={() => navigate("/blog/new")}
              className={clsx("button is-primary is-fullwidth is-rounded", {
                [styles.create_btn]: true,
              })}
            >
              Написать
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.items}>
          <NavLink
            to={"posts"}
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
