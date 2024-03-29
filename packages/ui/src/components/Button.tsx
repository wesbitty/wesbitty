import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { IconContext } from './Icon/IconContext'
import { IconLoader } from './Icon/icons/IconLoader'
import styleHandler from '../theme/handler'
import warn from '../utils/warning'

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

interface CustomButtonProps extends React.HTMLAttributes<HTMLOrSVGElement> {}

export type RefHandle = {
  button: () => HTMLButtonElement | null
}

export const Button = React.forwardRef<RefHandle, ButtonProps>(
  (
    {
      block,
      className,
      children,
      danger,
      disabled = false,
      onClick,
      icon,
      iconRight,
      loading = false,
      loadingCentered = false,
      shadow = true,
      size = 'tiny',
      style,
      type = 'primary',
      htmlType = 'button',
      ariaSelected,
      ariaControls,
      tabIndex,
      role,
      as,
      textAlign = 'center',
      ...props
    }: ButtonProps,
    ref
  ) => {
    const hasIcon = loading || icon

    warn(
      hasIcon && !props['aria-label'] && !children,
      'Button',
      'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.'
    )

    const buttonRef = useRef<HTMLButtonElement>(null)

    useImperativeHandle(ref, () => ({
      button: () => {
        return buttonRef.current
      },
    }))

    // styles
    let __styles = styleHandler('button')

    let classes = [__styles.base]
    let containerClasses = [__styles.container]

    classes.push(__styles.type[type])

    if (block) {
      containerClasses.push(__styles.block)
      classes.push(__styles.block)
    }

    if (shadow && type !== 'link' && type !== 'text') {
      classes.push(__styles.shadow)
    }

    if (size) {
      classes.push(__styles.size[size])
    }

    if (className) {
      classes.push(className)
    }

    if (disabled) {
      classes.push(__styles.disabled)
    }

    const iconLoaderClasses = [__styles.loading]

    // custom button tag
    const CustomButton: React.FC<CustomButtonProps> = ({ ...props }) => {
      const Tag = as as keyof JSX.IntrinsicElements
      return <Tag {...props} />
    }

    const buttonContent = (
      <>
        {hasIcon &&
          (loading ? (
            <IconLoader size={size} className={iconLoaderClasses.join(' ')} />
          ) : icon ? (
            <IconContext.Provider value={{ contextSize: size }}>
              {icon}
            </IconContext.Provider>
          ) : null)}
        {children && <span className={__styles.label}>{children}</span>}
        {iconRight && !loading && (
          <IconContext.Provider value={{ contextSize: size }}>
            {iconRight}
          </IconContext.Provider>
        )}
      </>
    )

    if (as) {
      return (
        <CustomButton
          {...props}
          className={classes.join(' ')}
          onClick={onClick}
          style={style}
        >
          {buttonContent}
        </CustomButton>
      )
    } else {
      return (
        // <span ref={containerRef} className={containerClasses.join(' ')}>
        <button
          {...props}
          ref={buttonRef}
          className={classes.join(' ')}
          disabled={loading || (disabled && true)}
          onClick={onClick}
          style={style}
          type={htmlType}
          aria-selected={ariaSelected}
          aria-controls={ariaControls}
          tabIndex={tabIndex}
          role={role}
          form={props.form}
        >
          {buttonContent}
        </button>
        // </span>
      )
    }
  }
)
