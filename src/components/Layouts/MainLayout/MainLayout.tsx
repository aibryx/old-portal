import React from "react";
import styles from "./MainLayout.module.scss";
import { clsx } from "clsx";
import { NavLink } from "react-router-dom";
import "bulma/css/bulma.min.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_layout}>
        <div className={styles.logo}>
          <div className={styles.logo_inner}>MilkHunters</div>
        </div>
        <div className={styles.search}>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Поиск..." />
            <span className="icon is-small is-left">
              <i className="fi fi-rr-search"></i>
            </span>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.notifications}>
            <i className="fi fi-rr-bell"></i>
          </div>
          <div className={clsx("image is-48x48", [styles.user])}>
            <img
              className={clsx("is-rounded", [styles.avatar])}
              src="https://leonardo.osnova.io/1232c2f0-0bcd-5561-9a17-b8a1d0edaef4/-/scale_crop/72x72/-/format/webp"
            />
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
            {/*<NavLink*/}
            {/*  to={"/playground"}*/}
            {/*  className={clsx("button is-primary is-fullwidth is-rounded", {*/}
            {/*    [styles.create_btn]: true,*/}
            {/*  })}*/}
            {/*>*/}
            {/*  Playground*/}
            {/*</NavLink>*/}
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
  return (
    <div className={styles.footer}>
      <div className={styles.footer_inner}>
        Условия предоставления услуг Политика конфиденциальности Политика в
        отношении файлов Cookie Специальные возможности Информация о рекламе Еще
        © 2023 MilkHunters Corp.
      </div>
    </div>
  );
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
