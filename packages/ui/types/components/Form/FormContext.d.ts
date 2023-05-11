import React from 'react'
interface ContextProps {
  formContextOnChange: any
  values: any
  errors: any
  handleBlur: React.FocusEventHandler | null
  touched: any
  fieldLevelValidation: any
}
interface Provider extends ContextProps {
  children?: React.ReactNode
}
export declare const FormContextProvider: (
  props: Provider
) => import('react/jsx-runtime').JSX.Element
export declare const useFormContext: () => ContextProps
export {}
