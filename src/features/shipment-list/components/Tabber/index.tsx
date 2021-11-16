import React from "react";
import styles from './index.module.scss';

const Tabber = () => {
    return (
        <div className={styles.base}>
            <span className={styles.selected}>Delivery</span>
            <span className={styles.unselected}>History</span>
        </div>
    );
}

export default Tabber