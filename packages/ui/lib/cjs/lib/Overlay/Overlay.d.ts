import React from 'react';
import { AnimationTailwindClasses } from '../../types';
type Props = {
    visible?: boolean;
    overlay?: React.ReactNode;
    children?: React.ReactNode;
    placement?: 'bottomLeft' | 'bottomRight' | 'bottomCenter' | 'topLeft' | 'topRight' | 'topCenter';
    onVisibleChange?: any;
    disabled?: boolean;
    triggerElement?: any;
    overlayStyle?: React.CSSProperties;
    overlayClassName?: string;
    transition?: AnimationTailwindClasses;
};
declare function Overlay({ visible, overlay, children, placement, onVisibleChange, disabled, triggerElement, overlayStyle, overlayClassName, transition, }: Props): import("react/jsx-runtime").JSX.Element;
export default Overlay;
