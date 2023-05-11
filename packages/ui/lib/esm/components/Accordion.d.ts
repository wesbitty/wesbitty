import React from 'react';
type Type = 'default' | 'bordered';
type Size = 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';
type Align = 'left' | 'right';
interface AccordionProps {
    children?: React.ReactNode;
    className?: string;
    defaultActiveId?: (string | number)[];
    icon?: React.ReactNode;
    iconPosition?: Align;
    bordered: boolean;
    onChange?: (item: string | string[]) => void;
    openBehaviour: 'single' | 'multiple';
    type: Type;
    size: Size;
    defaultValue?: string | string[] | undefined;
    justified: Boolean;
    chevronAlign: Align;
}
export declare function Accordion({ children, className, defaultActiveId, icon, iconPosition, onChange, openBehaviour, type, defaultValue, justified, chevronAlign, }: AccordionProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Accordion {
    var Item: typeof import("./Accordion").Item;
}
interface ItemProps {
    children?: React.ReactNode;
    className?: string;
    header: React.ReactNode;
    id: string;
    icon?: React.ReactNode;
}
export declare function Item({ children, className, header, id, icon }: ItemProps): import("react/jsx-runtime").JSX.Element;
export {};
