/// <reference types="react" />
import { FormikConfig } from 'formik'
interface Props
  extends Omit<FormikConfig<any>, 'validateOnMount' | 'validateOnChange'> {
  children: any
  handleIsSubmitting?: any
  handleIsValidating?: any
  name?: string
  id?: string
  className?: string
  style?: React.CSSProperties
}
export default function Form({
  validate,
  ...props
}: Props): import('react/jsx-runtime').JSX.Element
export {}
