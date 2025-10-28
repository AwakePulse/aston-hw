import React from 'react';
import Button from "../Button/Button";
import styles from './Modal.module.css'
import {createPortal} from "react-dom";

function Modal({ children, onClose }: {children: React.ReactNode}) {
    const portalRoot = document.getElementById('modal-root');
    if(!portalRoot) return null;

    return createPortal (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modal_container} onClick={(e) => e.stopPropagation()}>
                {children}
                <div className={styles.modal_close}>
                    <Button onClick={onClose}>Close</Button>
                </div>
            </div>
        </div>,
        portalRoot
    );
};

export default Modal;