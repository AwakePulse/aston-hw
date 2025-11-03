import React from 'react';
import styles from './InlineButton.module.css';
import {InlineButtonTypes} from "./InlineButton.types.ts";

const InlineButton: React.FC<InlineButtonTypes> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={styles.my_button}>
            {children}
        </button>
    );
};

export default InlineButton;