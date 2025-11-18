import React, {MouseEventHandler, PropsWithChildren} from "react";

export interface InlineButtonTypes extends PropsWithChildren {
    children: React.ReactNode;
    // onClick?: () => void;
    onClick: MouseEventHandler<HTMLButtonElement>;
}