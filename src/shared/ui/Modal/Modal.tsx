import React from 'react';
import styles from './Modal.module.css'
import {createPortal} from "react-dom";

function Modal({ children, onClose }: ModalTypes) {
    const portalRoot = document.getElementById('modal-root');
    if(!portalRoot) return null;

    return createPortal (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modal_container} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        portalRoot
    );
}

Modal.Header = ({ children }: {children: React.ReactNode}) => {
    return <h2 className={styles.content_header}>{children}</h2>
}

Modal.Body = ({ children }: {children: React.ReactNode}) => {
    return <div>{children}</div>
}

Modal.Footer = ({ children }: {children: React.ReactNode}) => {
    return <div className={styles.modal_close}>{children}</div>
}

export default Modal;