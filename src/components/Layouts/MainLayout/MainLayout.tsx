import React, { useState } from 'react';
import { clsx } from 'clsx';
import { NavLink } from 'react-router-dom';

import { Notifications } from '@/components/ Notifications/Notifications.tsx';
import { Spinner } from '@/components/Elements/Spinner/Spinner.tsx';
import { getCurrentUser } from '@/features/users/api/users.ts';
import { logout } from '@/features/auth/api/auth.ts';
import { useQuery } from '@/hooks/useQuery.ts';
import { useMutation } from '@/hooks/useMutation.ts';
import { BaseResponse } from '@/types';

import styles from './MainLayout.module.scss';
import 'bulma/css/bulma.min.css';

type HeaderProps = {
	isUserDropdownActive: boolean;
	setIsUserDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
	user: BaseResponse;
};

const Header = ({ isUserDropdownActive, setIsUserDropdownActive, user }: HeaderProps) => {
	let userDropdownClass = '';
	if (isUserDropdownActive) userDropdownClass += 'is-active';

	const changeUserDropdownState = (e: React.MouseEvent<HTMLImageElement>) => {
		setIsUserDropdownActive((i) => !i);
		e.stopPropagation();
	};

	const logoutMutation = useMutation(logout);
	const tryLogout = async () => {
		const { error } = await logoutMutation.mutation(null);
		if (error) console.error(error.error.content);
		else window.location.reload();
	};

	return (
		<div className={styles.header}>
			<div className={styles.header_layout}>
				<div className={styles.logo}>
					<div className={styles.logo_inner}>
						<img src="../../../../public/logo.svg" />
						MilkHunters
					</div>
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
					{user ? (
						<>
							<div className={styles.notifications}>
								<i className="fi fi-rr-bell"></i>
							</div>
							<div className={clsx('image is-48x48', [styles.user])}>
								<div className={clsx('dropdown is-right', [userDropdownClass])}>
									<div className="dropdown-trigger">
										<img
											className={clsx('is-rounded', [styles.avatar])}
											src="https://leonardo.osnova.io/1232c2f0-0bcd-5561-9a17-b8a1d0edaef4/-/scale_crop/72x72/-/format/webp"
											onClick={(event) => changeUserDropdownState(event)}
										/>
									</div>
									<div className="dropdown-menu" id="dropdown-menu" role="menu">
										<div className="dropdown-content">
											<a href="#" className="dropdown-item">
												Профиль
											</a>
											<a href="#" className="dropdown-item">
												Настройки
											</a>
											<hr className="dropdown-divider" />
											<a onClick={tryLogout} className="dropdown-item">
												Выйти
											</a>
										</div>
									</div>
								</div>
							</div>
						</>
					) : (
						<>
							<NavLink to={'auth/login'} className="button is-primary">
								Войти
							</NavLink>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

type SidebarProps = {
	user: BaseResponse;
};

const Sidebar = ({ user }: SidebarProps) => {
	return (
		<div className={styles.sidebar}>
			{user ? (
				<div className={styles.items}>
					<NavLink
						to={'articles'}
						className={({ isActive }) =>
							clsx({ [styles.item]: true, [styles.active]: isActive })
						}
					>
						<i className="fi fi-rr-home"></i>
						<div className={styles.name}>Главная</div>
					</NavLink>
					<NavLink
						to={'aibryx'}
						className={({ isActive }) =>
							clsx({ [styles.item]: true, [styles.active]: isActive })
						}
						end
					>
						<i className="fi fi-rr-user"></i>
						<div className={styles.name}>Профиль</div>
					</NavLink>
					<NavLink
						to={'search'}
						className={({ isActive }) =>
							clsx({ [styles.item]: true, [styles.active]: isActive })
						}
					>
						<i className="fi fi-rr-search"></i>
						<div className={styles.name}>Поиск</div>
					</NavLink>
					<NavLink
						to={'bookmarks'}
						className={({ isActive }) =>
							clsx({ [styles.item]: true, [styles.active]: isActive })
						}
					>
						<i className="fi fi-rr-bookmark"></i>
						<div className={styles.name}>Закладки</div>
					</NavLink>
					<div className={clsx({ [styles.item]: true, [styles.create]: true })}>
						<NavLink
							to={'/new'}
							className={clsx('button is-primary is-fullwidth is-rounded', {
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
						to={'articles'}
						className={({ isActive }) =>
							clsx({ [styles.item]: true, [styles.active]: isActive })
						}
					>
						<i className="fi fi-rr-home"></i>
						<div className={styles.name}>Главная</div>
					</NavLink>
					<NavLink
						to={'search'}
						className={({ isActive }) =>
							clsx({ [styles.item]: true, [styles.active]: isActive })
						}
						end
					>
						<i className="fi fi-rr-search"></i>
						<div className={styles.name}>Поиск</div>
					</NavLink>
				</div>
			)}
		</div>
	);
};

const MobileSidebar = () => {
	const auth = true;
	return (
		<div className={styles.mobile_sidebar}>
			{auth ? (
				<>
					{' '}
					<div className={styles.mobile_create}>
						<NavLink to={'/new'}>
							<i style={{ color: 'white' }} className="fi fi-rr-pencil"></i>
						</NavLink>
					</div>
					<NavLink
						to={'/articles'}
						className={({ isActive }) =>
							clsx({ [styles.mobile_item]: true, [styles.active]: isActive })
						}
						end
					>
						<i className="fi fi-rr-home"></i>
					</NavLink>
					<NavLink
						to={'/profile'}
						className={({ isActive }) =>
							clsx({ [styles.mobile_item]: true, [styles.active]: isActive })
						}
						end
					>
						<i className="fi fi-rr-user"></i>
					</NavLink>
					<NavLink
						to={'/search'}
						className={({ isActive }) =>
							clsx({ [styles.mobile_item]: true, [styles.active]: isActive })
						}
						end
					>
						<i className="fi fi-rr-search"></i>
					</NavLink>
					<NavLink
						to={'bookmarks'}
						className={({ isActive }) =>
							clsx({ [styles.mobile_item]: true, [styles.active]: isActive })
						}
						end
					>
						<i className="fi fi-rr-bookmark"></i>
					</NavLink>
				</>
			) : (
				<>
					{' '}
					<div className={styles.mobile_create}>
						<NavLink to={'/blog/new'}>
							<i style={{ color: 'white' }} className="fi fi-rr-pencil"></i>
						</NavLink>
					</div>
					<NavLink
						to={'posts'}
						className={({ isActive }) =>
							clsx({ [styles.mobile_item]: true, [styles.active]: isActive })
						}
						end
					>
						<i className="fi fi-rr-home"></i>
					</NavLink>
					<NavLink
						to={'search'}
						className={({ isActive }) =>
							clsx({ [styles.mobile_item]: true, [styles.active]: isActive })
						}
						end
					>
						<i className="fi fi-rr-search"></i>
					</NavLink>
					<NavLink
						to={'/auth/login'}
						className={({ isActive }) =>
							clsx({ [styles.mobile_item]: true, [styles.active]: isActive })
						}
						end
					>
						<i className="fi fi-rr-enter"></i>
					</NavLink>
				</>
			)}
		</div>
	);
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
				Условия предоставления услуг Политика конфиденциальности Политика в отношении файлов
				Cookie Специальные возможности Информация о рекламе Еще © 2023 MilkHunters Corp.
			</div>
		</div>
	);
};

type MainLayoutProps = {
	children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
	const { data: user, isLoading } = useQuery(getCurrentUser);
	const [isUserDropdownActive, setIsUserDropdownActive] = useState<boolean>(false);

	if (isLoading) return <Spinner />;

	return (
		<div onClick={() => setIsUserDropdownActive(false)} className={styles.layout_wrapper}>
			<Header
				isUserDropdownActive={isUserDropdownActive}
				setIsUserDropdownActive={setIsUserDropdownActive}
				user={user}
			/>
			<Notifications />
			<div className={styles.container}>
				<div className={styles.layout}>
					<Sidebar user={user} />
					<View>{children}</View>
					<Live />
					<Footer />
					<MobileSidebar />
				</div>
			</div>
		</div>
	);
};
