import React from 'react';
type Props = {
    variant?: 'success' | 'danger' | 'warning' | 'info' | 'neutral';
    className?: string;
    title: string;
    withIcon?: boolean;
    closable?: boolean;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    actions?: React.ReactNode;
};
export declare function Alert({ variant, className, title, withIcon, closable, children, icon, actions, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
