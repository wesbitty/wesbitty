import React from 'react';
export interface Props {
    className?: string;
    children: any;
    style?: React.CSSProperties;
    type?: 'default' | 'secondary' | 'success' | 'warning' | 'danger';
    disabled?: boolean;
    mark?: boolean;
    code?: boolean;
    keyboard?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    strong?: boolean;
    small?: boolean;
}
declare function Text({ className, children, style, type, disabled, mark, code, keyboard, underline, strikethrough, strong, small, }: Props): import("react/jsx-runtime").JSX.Element;
export default Text;
