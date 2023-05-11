import React from 'react';
export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    defaultValue?: string | number;
    descriptionText?: string | React.ReactNode;
    error?: string;
    icon?: any;
    inputRef?: React.RefObject<HTMLInputElement>;
    label?: string;
    afterLabel?: string;
    beforeLabel?: string;
    labelOptional?: string | React.ReactNode;
    actions?: React.ReactNode;
    layout?: 'horizontal' | 'vertical';
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';
    validation?: (x: any) => void;
}
declare function InputNumber({ defaultValue, descriptionText, error, icon, inputRef, label, afterLabel, beforeLabel, labelOptional, layout, value, actions, size, validation, id, name, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default InputNumber;
