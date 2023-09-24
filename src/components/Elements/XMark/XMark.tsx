import styles from './XMark.module.scss';
import React from "react";

type XMarkProps = {
	close: () => void;
};

export const XMark = ({ close }: XMarkProps) => {
	const handleXMarkClick = (event: React.MouseEvent<HTMLDivElement>) => {
		close();
		event.stopPropagation();
	}
	return (
		<div onClick={(event) => handleXMarkClick(event)} className={styles.xmark}>
			<i className="fi fi-rr-cross"></i>
		</div>
	);
};
