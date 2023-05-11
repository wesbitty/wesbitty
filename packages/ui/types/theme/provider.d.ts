import React from 'react'
interface ThemeContextInterface {
  theme?: any
}
export declare const ThemeContext: React.Context<ThemeContextInterface>
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  theme?: object
}
export declare const ThemeProvider: React.FC<Props>
export {}
