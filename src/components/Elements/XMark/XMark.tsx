import styles from './XMark.module.scss';
import React from "react";

type XMarkProps = {
	back: () => void;
};

export const XMark = ({ back }: XMarkProps) => {
	const handleXMarkClick = (event: React.MouseEvent<HTMLDivElement>) => {
		back();
		event.stopPropagation();
	}
	return (
		<div onClick={(event) => handleXMarkClick(event)} className={styles.xmark}>
			<i className="fi fi-rr-cross"></i>
		</div>
	);
};
