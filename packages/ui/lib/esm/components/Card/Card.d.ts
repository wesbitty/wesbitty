import React from 'react';
interface CardProps {
    children?: React.ReactNode;
    className?: string;
    cover?: React.ReactNode;
    description?: string;
    hoverable?: boolean;
    style?: React.CSSProperties;
    title?: string;
    titleExtra?: React.ReactNode;
}
declare function Card({ children, className, cover, hoverable, style, title, titleExtra, }: CardProps): import("react/jsx-runtime").JSX.Element;
declare namespace Card {
    var Meta: ({ title, description, style, className }: MetaProps) => import("react/jsx-runtime").JSX.Element;
}
interface MetaProps {
    title?: string;
    description?: string;
    style?: React.CSSProperties;
    className?: string;
}
export default Card;
