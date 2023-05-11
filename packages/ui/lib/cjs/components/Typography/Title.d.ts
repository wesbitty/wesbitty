import React from 'react';
interface Props {
    className?: string;
    level?: 1 | 2 | 3 | 4 | 5;
    children: any;
    style?: React.CSSProperties;
}
declare function Title({ className, level, children, style }: Props): import("react/jsx-runtime").JSX.Element;
export default Title;
