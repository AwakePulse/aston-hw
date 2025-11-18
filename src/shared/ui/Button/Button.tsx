import React, {PropsWithChildren} from 'react';
import styles from './Button.module.css';
import {ButtonTypes} from "./Button.types.ts";

const Button = ({children, onClick}: PropsWithChildren<ButtonTypes>) => {
    return (
        <button onClick={onClick} className={styles.my_button}>
            {children}
        </button>
    );
};

export default Button;