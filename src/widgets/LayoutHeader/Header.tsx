import React, {useState} from 'react';
import Button from "../../shared/ui/Button/Button";
import styles from './Header.module.css';
import Modal from "../../shared/ui/Modal/Modal";
import AboutModal from "../../shared/ui/Modal/views/AboutModal.tsx";
import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher.tsx";

const Header = () => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }

    return (
        <header className={styles.header_content}>
            <h1>ASTON</h1>
            <section>
                <Button onClick={onOpen}>About us</Button>
                <ThemeSwitcher />
            </section>
            {open && (
                <Modal onClose={onClose}>
                    <AboutModal/>
                </Modal>
            )}
        </header>
    );
};

export default Header;