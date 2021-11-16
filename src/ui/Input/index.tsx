import React, {useRef} from 'react';
import styles from './index.module.scss';
import searchIcon from './search.svg';
import classNames from "classnames/bind";

export enum InputIcon {
    search = 'search',
    none = 'none',
}

interface InputProps {
    value: string;
    icon?: InputIcon;
    placeholder?: string;
    className?: string;
}

const Input = ({value, icon, placeholder, className}: InputProps) => {
    const inputRef = useRef(null);
    return (
        <div className={classNames(className, styles.base)}
             onClick={() => (inputRef?.current as HTMLInputElement | null)?.focus()}>
            {icon === InputIcon.search &&
            <img src={searchIcon} className={styles.icon} alt=""/>
            }
            <input className={styles.input} value={value} placeholder={placeholder} ref={inputRef}/>
        </div>
    );
}

export default Input;