import React from 'react';
import * as RadixCollapsible from '@radix-ui/react-collapsible';
export interface CollapsibleProps extends RadixCollapsible.CollapsibleProps {
    children: React.ReactNode;
}
export declare const Collapsible: {
    ({ open, children, className, ...props }: CollapsibleProps): import("react/jsx-runtime").JSX.Element;
    Trigger: typeof Trigger;
    Content: typeof Content;
};
export declare function Trigger({ children, asChild, }: {
    children: React.ReactNode;
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export declare function Content({ children, className, }: {
    children: React.ReactNode;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export default Collapsible;
