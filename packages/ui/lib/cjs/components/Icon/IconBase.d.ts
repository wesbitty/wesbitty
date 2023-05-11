import React from 'react';
type Props = {
    className?: string;
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge' | number;
    type?: string;
    color?: string;
    strokeWidth?: number;
    fill?: string;
    stroke?: string;
    background?: 'brand' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
    src?: React.ReactNode;
    icon?: any;
};
declare function IconBase({ className, size, type, color, strokeWidth, fill, stroke, background, src, icon, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default IconBase;
