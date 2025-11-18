import React, {PropsWithChildren} from "react";

interface ItemListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

export function ItemList<T>({ items, renderItem }: PropsWithChildren<ItemListProps<T>>) {
    return (
        <>
            {items.map(renderItem)}
        </>
    )
}