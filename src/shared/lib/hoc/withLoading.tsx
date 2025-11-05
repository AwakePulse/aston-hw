import React from 'react';
import styles from './hocs.module.css';

export function withLoading<P>(WrappedComponent) {
    return function ComponentWithLoading(props: P & { isLoading: boolean}) {
        const { isLoading, ...otherProps } = props;
        if(isLoading) return <div className={styles.loader}></div>

        return <WrappedComponent {...(otherProps as P)}/>
    }
}