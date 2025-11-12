import React from 'react';
import styles from './InlineButton.module.css';
import {InlineButtonTypes} from "./InlineButton.types.ts";

const InlineButton: React.FC<InlineButtonTypes> = ({children, onClick}) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onClick?.(e);
    }

    return (
        <button onClick={handleClick} className={styles.my_button}>
            {children}
        </button>
    );
};

export default InlineButton;