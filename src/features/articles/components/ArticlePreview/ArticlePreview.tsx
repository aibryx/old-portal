import styles from './ArticlePreview.module.scss';
import { clsx } from 'clsx';

export const ArticlePreview = () => {
	return (
		<div className={styles.wrapper}>
			<div className="card">

				<div className="card-content">

					<div className={styles.dots}>
						<i className="fi fi-rr-menu-dots"></i>
					</div>

					<div className="media">
						<div className="media-left">
							<figure className="image is-48x48">
								<img
									className="is-rounded"
									src="https://leonardo.osnova.io/1232c2f0-0bcd-5561-9a17-b8a1d0edaef4/-/scale_crop/72x72/-/format/webp"
									alt="Placeholder image"
								/>
							</figure>
						</div>

						<div className="media-content">
							<p className="title is-5">John Doe</p>
							<p className="subtitle is-6">2 часа назад </p>
						</div>
					</div>

					<div className="content title is-4">
						Погружение в мир Genshin Impact: Открытие тайн и приключений игры...
					</div>

					<div className="tags are-medium">
						<span className="tag is-link is-light">Genshin Impact</span>
						<span className="tag is-link is-light">Games</span>
						<span className="tag is-link is-light">Anime</span>
					</div>

					<div className="card-image">
						<figure className="image">
							<img
								src="https://cojo.ru/wp-content/uploads/2022/12/anime-igra-genshin-impact-1.webp"
								alt="Placeholder image"
							/>
						</figure>
					</div>

				</div>

				<footer className="card-footer">
					<div className="card-footer-item">
						<span className={clsx('icon', styles.like)}>
							<i className="fi fi-rr-heart"></i>
							<span className={styles.like_count}>56</span>
						</span>
					</div>

					<div className="card-footer-item">
						<span className={clsx('icon', styles.comments)}>
							<i className="fi fi-rr-comment-alt-middle"></i>
							<span className={styles.comments_count}>10</span>
						</span>
					</div>

					<div className="card-footer-item">
						<span className={clsx('icon', styles.share)}>
							<i className="fi fi-rr-share"></i>
						</span>
					</div>

					<div className="card-footer-item">
						<span className={clsx('icon', styles.views)}>
							<i className="fi fi-rr-eye"></i>
								<span className={styles.views_count}>116</span>
						</span>
					</div>
				</footer>
			</div>
		</div>
	);
};
