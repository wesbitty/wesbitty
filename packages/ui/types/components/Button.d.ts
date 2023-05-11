import React from 'react'
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  block?: boolean
  className?: string
  children?: React.ReactNode
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  loading?: boolean
  loadingCentered?: boolean
  shadow?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  style?: React.CSSProperties
  type?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'alternative'
    | 'outline'
    | 'dashed'
    | 'link'
    | 'text'
    | 'danger'
    | 'warning'
  danger?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  ref?: any
  ariaSelected?: boolean
  ariaControls?: string
  tabIndex?: 0 | -1
  role?: string
  textAlign?: 'left' | 'center' | 'right'
  as?: keyof JSX.IntrinsicElements
  form?: string
}
export type RefHandle = {
  button: () => HTMLButtonElement | null
}
export declare const Button: React.ForwardRefExoticComponent<
  Omit<ButtonProps, 'ref'> & React.RefAttributes<RefHandle>
>
