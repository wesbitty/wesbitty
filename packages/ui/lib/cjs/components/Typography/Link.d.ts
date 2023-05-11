import { HandlerFunction } from '@storybook/addon-actions';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
    href?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: HandlerFunction;
}
declare function Link({ children, target, href, className, onClick, style, }: Props): import("react/jsx-runtime").JSX.Element;
export default Link;
