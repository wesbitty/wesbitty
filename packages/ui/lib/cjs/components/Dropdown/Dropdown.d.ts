import React from 'react';
import type * as RadixDropdownTypes from '@radix-ui/react-dropdown-menu/';
interface RootProps {
    open?: boolean;
    arrow?: boolean;
    onOpenChange?: RadixDropdownTypes.DropdownMenuProps['onOpenChange'];
    side?: RadixDropdownTypes.DropdownMenuContentProps['side'];
    align?: RadixDropdownTypes.DropdownMenuContentProps['align'];
    sideOffset?: RadixDropdownTypes.DropdownMenuContentProps['sideOffset'];
    overlay?: React.ReactNode;
    children?: React.ReactNode;
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'content';
    className?: string;
    style?: React.CSSProperties;
    isNested?: Boolean;
}
declare function Dropdown({ open, onOpenChange, align, //Default value
side, //Default value
sideOffset, overlay, children, size, className, style, arrow, isNested, }: RootProps): import("react/jsx-runtime").JSX.Element;
declare namespace Dropdown {
    var Item: typeof import("./Dropdown").Item;
    var Misc: typeof import("./Dropdown").Misc;
    var Checkbox: typeof import("./Dropdown").Checkbox;
    var Radio: typeof import("./Dropdown").Radio;
    var RadioGroup: typeof import("./Dropdown").RadioGroup;
    var Label: typeof import("./Dropdown").Label;
    var Seperator: typeof import("./Dropdown").Seperator;
    var RightSlot: typeof import("./Dropdown").RightSlot;
    var TriggerItem: typeof import("./Dropdown").TriggerItem;
}
export declare function RightSlot({ children }: any): import("react/jsx-runtime").JSX.Element;
interface ItemProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    onClick?: (event: Event) => void;
    rightSlot?: React.ReactNode;
}
export declare function Item({ children, icon, disabled, onClick, rightSlot, }: ItemProps): import("react/jsx-runtime").JSX.Element;
export declare function TriggerItem({ children, icon, disabled }: ItemProps): import("react/jsx-runtime").JSX.Element;
export declare function Misc({ children, icon }: ItemProps): import("react/jsx-runtime").JSX.Element;
interface CheckboxProps {
    children: React.ReactNode;
    checked?: boolean;
    onChange?(x: boolean): void;
    disabled?: boolean;
    ItemIndicator?: React.ReactNode;
}
export declare function Seperator(): import("react/jsx-runtime").JSX.Element;
export declare function Checkbox({ children, checked: propsChecked, onChange, disabled, ItemIndicator, }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
interface RadioProps {
    children: React.ReactNode;
    value: string;
    ItemIndicator?: React.ReactNode;
}
export declare function Radio({ children, value, ItemIndicator }: RadioProps): import("react/jsx-runtime").JSX.Element;
interface RadioGroupProps {
    children: React.ReactNode;
    value: string;
    onChange?(x: string): void;
}
export declare function RadioGroup({ children, value: propsValue, onChange, }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
interface LabelProps {
    children: React.ReactNode;
}
export declare function Label({ children }: LabelProps): import("react/jsx-runtime").JSX.Element;
export default Dropdown;
