import React from 'react';
import { Icon } from '../Icon/IconImportHandler';
type Props = {
    children?: React.ReactNode;
    src?: string | undefined;
    style?: React.CSSProperties;
    className?: string;
    alt?: string;
    responsive?: boolean;
    text?: string;
    variant?: 'circle' | 'square';
    AvatarIcon?: Icon;
    size: number;
};
export default function Avatar({ src, style, className, alt, responsive, text, variant, AvatarIcon, size, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
