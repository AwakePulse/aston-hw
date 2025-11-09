import React from 'react';
import Loader from "../../ui/Loader/Loader.tsx";

export function withLoading<P>(WrappedComponent) {
    return function ComponentWithLoading(props: P & { isLoading: boolean}) {
        const { isLoading, ...otherProps } = props;
        if(isLoading) return <Loader />

        return <WrappedComponent {...(otherProps as P)}/>
    }
}