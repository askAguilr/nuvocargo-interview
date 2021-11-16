import React from "react";
import styles from "./index.module.scss"

const Footer = () => {
    return (
        <div className={styles.base}>
            <div className={styles.label}>Powered by Nuvo Cargo</div>
            <div className={styles.label}>Help</div>
        </div>
    );
}

export default Footer