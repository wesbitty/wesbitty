export const SIZES: string[]
export default Input
declare function Input({
  className,
  type,
  size,
  isError,
  children,
  ...props
}: {
  [x: string]: any
  className?: string
  type?: string
  size?: string
  isError?: boolean
  children: any
}): import('react/jsx-runtime').JSX.Element
declare namespace Input {
  namespace propTypes {
    const size: PropTypes.Requireable<string>
    const isError: PropTypes.Requireable<boolean>
    const className: PropTypes.Requireable<string>
  }
}
import PropTypes from 'prop-types'
