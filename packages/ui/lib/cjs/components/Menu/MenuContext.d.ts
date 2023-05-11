import React from 'react';
interface ContextProps {
    type: 'text' | 'pills' | 'border';
}
interface Provider extends ContextProps {
    children?: React.ReactNode;
}
export declare const MenuContextProvider: (props: Provider) => import("react/jsx-runtime").JSX.Element;
export declare const useMenuContext: () => ContextProps;
export {};
