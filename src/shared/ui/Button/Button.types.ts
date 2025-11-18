import React, {MouseEventHandler, PropsWithChildren} from "react";

export interface ButtonTypes extends PropsWithChildren {
    children: React.ReactNode;
    // onClick?: () => void;
    onClick: MouseEventHandler<HTMLButtonElement>;
}