import React from "react";
import styles from "./index.module.scss"
import Logo from "./components/Logo";
import User from "./components/User";

const Header =  () => {
    return(
        <div className={styles.base}>
            <div className={styles.row}>
                <Logo/>
                <User name="Regina Zepeda"/>
            </div>
        </div>
    );
}

export default Header;