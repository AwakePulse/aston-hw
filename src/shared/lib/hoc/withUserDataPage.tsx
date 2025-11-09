import React from 'react';
import {useParams} from "react-router-dom";
import Loader from "../../ui/Loader/Loader.tsx";

export function withUserDataPage<T> ({
    useQueryHook,
    ItemComponent,
    className,
} : {
    useQueryHook: (id: string) => {data?: T[]; isLoading: boolean};
    ItemComponent: React.FC<{item: T}>;
    className?: string;
}) {
    const WrappedUserPage: React.FC = () => {
        const { id } = useParams<{id: string}>();
        const {data, isLoading} = useQueryHook(id!);

        if(isLoading) return <Loader />

        return (
            <div className={className}>
                {data?.map((item: T) => (
                    <ItemComponent
                        key={(item as any).id}
                        item={item}
                    />
                ))}
            </div>
        );
    };

    return WrappedUserPage;
}