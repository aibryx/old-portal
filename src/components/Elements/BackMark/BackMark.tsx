import styles from './BackMark.module.scss';
import React from 'react';

type BackMarkProps = {
	back: () => void;
};

export const BackMark = ({ back }: BackMarkProps) => {
	const handleBackMarkClick = (e: React.MouseEvent<HTMLDivElement>) => {
		back();
		e.stopPropagation();
	};

	return (
		<div onClick={(event) => handleBackMarkClick(event)} className={styles.backmark}>
			<i className="fi fi-rr-angle-left"></i>
		</div>
	);
};
