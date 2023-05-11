import React from 'react';
export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    copy?: boolean;
    defaultValue?: string | number;
    descriptionText?: string | React.ReactNode | undefined;
    disabled?: boolean;
    error?: string;
    icon?: any;
    inputRef?: string;
    label?: string | React.ReactNode;
    afterLabel?: string;
    beforeLabel?: string;
    labelOptional?: string | React.ReactNode;
    layout?: 'horizontal' | 'vertical';
    reveal?: boolean;
    actions?: React.ReactNode;
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';
    borderless?: boolean;
    validation?: (x: any) => void;
}
declare function Input({ autoComplete, autoFocus, className, copy, defaultValue, descriptionText, disabled, error, icon, id, name, inputRef, label, afterLabel, beforeLabel, labelOptional, layout, onChange, onBlur, onFocus, onKeyDown, placeholder, type, value, style, reveal, actions, size, borderless, validation, ...props }: Props): import("react/jsx-runtime").JSX.Element;
declare namespace Input {
    var TextArea: ({ className, descriptionText, disabled, error, icon, id, name, label, afterLabel, beforeLabel, labelOptional, layout, onChange, onFocus, onBlur, onKeyDown, placeholder, value, style, rows, limit, size, borderless, validation, copy, actions, ...props }: TextAreaProps) => import("react/jsx-runtime").JSX.Element;
}
export interface TextAreaProps extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    descriptionText?: string;
    error?: string;
    icon?: any;
    label?: string;
    afterLabel?: string;
    beforeLabel?: string;
    labelOptional?: string;
    layout?: 'horizontal' | 'vertical';
    rows?: number;
    limit?: number;
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';
    borderless?: boolean;
    validation?: (x: any) => void;
    copy?: boolean;
    actions?: React.ReactNode;
}
export default Input;
