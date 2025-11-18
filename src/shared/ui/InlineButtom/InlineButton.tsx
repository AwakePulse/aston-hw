import React, {PropsWithChildren} from 'react';
import styles from './InlineButton.module.css';
import {InlineButtonTypes} from "./InlineButton.types.ts";

const InlineButton = ({children, onClick}: PropsWithChildren<InlineButtonTypes>) => {
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