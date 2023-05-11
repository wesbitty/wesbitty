import React from 'react';
interface GroupProps {
    allowedValues?: any;
    checkboxes?: any;
    id?: any;
    layout?: 'horizontal' | 'vertical';
    error?: any;
    descriptionText?: any;
    label?: any;
    afterLabel?: string;
    beforeLabel?: string;
    labelOptional?: any;
    name?: any;
    type?: 'cards' | 'list' | 'small-cards' | 'large-cards';
    transform?: any;
    value?: any;
    className?: any;
    children?: React.ReactNode;
    options?: Array<InputProps>;
    onChange?(x: React.ChangeEvent<HTMLInputElement>): void;
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';
    validation?: (x: any) => void;
    groupClassName?: string;
    labelsLayout?: 'horizontal' | 'vertical';
}
declare function RadioGroup({ id, layout, error, descriptionText, label, afterLabel, beforeLabel, labelOptional, children, className, type, options, value, name, onChange, size, validation, groupClassName, labelsLayout, }: GroupProps): import("react/jsx-runtime").JSX.Element;
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label: string;
    afterLabel?: string;
    beforeLabel?: string;
    description?: string;
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';
    hidden?: boolean;
    align?: 'vertical' | 'horizontal';
    optionalLabel?: 'string' | React.ReactNode;
    addOnBefore?: React.ReactNode;
}
declare function Radio({ id, disabled, value, label, afterLabel, beforeLabel, description, name, checked, onChange, onFocus, onBlur, hidden, size, align, optionalLabel, addOnBefore, }: InputProps): import("react/jsx-runtime").JSX.Element;
declare namespace Radio {
    var Group: typeof RadioGroup;
}
export default Radio;
