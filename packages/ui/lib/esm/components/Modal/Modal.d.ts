import React from 'react';
import { AnimationTailwindClasses } from '../../types';
import * as Dialog from '@radix-ui/react-dialog';
export type ModalProps = RadixProps & Props;
interface RadixProps extends Dialog.DialogProps, Pick<Dialog.DialogContentProps, 'onOpenAutoFocus' | 'onCloseAutoFocus' | 'onEscapeKeyDown' | 'onPointerDownOutside' | 'onInteractOutside'> {
}
type Props = {
    children?: React.ReactNode;
    customFooter?: React.ReactNode;
    closable?: boolean;
    description?: string;
    hideFooter?: boolean;
    alignFooter?: 'right' | 'left';
    layout?: 'horizontal' | 'vertical';
    icon?: React.ReactNode;
    loading?: boolean;
    onCancel?: any;
    cancelText?: string;
    onConfirm?: any;
    confirmText?: string;
    showIcon?: boolean;
    footerBackground?: boolean;
    title?: string | React.ReactNode;
    variant?: 'danger' | 'warning' | 'success';
    visible: boolean;
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
    style?: React.CSSProperties;
    overlayStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    className?: string;
    overlayClassName?: string;
    transition?: AnimationTailwindClasses;
    transitionOverlay?: AnimationTailwindClasses;
    triggerElement?: React.ReactNode;
    header?: React.ReactNode;
};
declare const Modal: {
    ({ children, customFooter, closable, description, hideFooter, alignFooter, layout, loading, cancelText, onConfirm, onCancel, confirmText, showIcon, title, footerBackground, icon, variant, visible, size, style, overlayStyle, contentStyle, className, overlayClassName, triggerElement, header, ...props }: ModalProps): import("react/jsx-runtime").JSX.Element;
    Content: typeof Content;
    Seperator: typeof Seperator;
};
declare function Content({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function Seperator(): import("react/jsx-runtime").JSX.Element;
export default Modal;
