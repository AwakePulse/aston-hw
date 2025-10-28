import React from 'react';
import styles from './Button.module.css';
import {ButtonTypes} from "./Button.types.ts";

const Button: React.FC<ButtonTypes> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={styles.my_button}>
            {children}
        </button>
    );
};

export default Button;