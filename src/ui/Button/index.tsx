import React, {MouseEventHandler} from 'react';
import styles from './index.module.scss'
import classNames from 'classnames/bind';

interface ButtonProps {
    children: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    primary?: boolean;
    className?: string;
}

const Button = ({children, primary, className, onClick}: ButtonProps) => {
    return (
        <button onClick={onClick} className={classNames(className, styles.base, primary ? styles.primary : styles.secondary)}>
            {children}
        </button>
    );
}

export default Button;