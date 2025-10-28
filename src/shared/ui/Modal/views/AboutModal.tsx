import React from 'react';
import styles from './About.module.css';

const AboutModal = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>О нас</h1>
            <span className={styles.span}>ASTON</span>
            <p className={styles.description}>Модальное окно с информацией о текущей компании данного проекта</p>
        </section>
    );
};

export default AboutModal;