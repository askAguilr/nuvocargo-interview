import React from 'react';
import Icon from './icon.svg';
import styles from './index.module.scss';

interface UserProps {
    name: string;
}

const User = ({name}:UserProps) => {
    return(
        <div className={styles.base}>
            <div className={styles.name}>{name}</div>
            <img className={styles.icon} src={Icon} alt=""/>
        </div>
    );
}

export default User;