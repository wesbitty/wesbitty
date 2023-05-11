import { jsx as _jsx } from 'react/jsx-runtime'
import { createContext, useContext } from 'react'
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const MenuContext = createContext({
  type: 'text',
})
export const MenuContextProvider = (props) => {
  const { type } = props
  const value = {
    type: type,
  }
  return _jsx(
    MenuContext.Provider,
    Object.assign({ value: value }, { children: props.children })
  )
}
// context helper to avoid using a consumer component
export const useMenuContext = () => {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error(`MenuContext must be used within a MenuContextProvider.`)
  }
  return context
}
