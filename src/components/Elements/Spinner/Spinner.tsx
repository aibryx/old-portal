import styles from './Spinner.module.scss';
import {clsx} from "clsx";
export const Spinner = () => {
    return (
        <div className={styles.spinner_wrapper}>
            <button className={clsx('button is-loading is-primary', styles.spinner)}></button>
        </div>
    );
};
