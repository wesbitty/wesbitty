import { useContext } from 'react'
import { defaultTheme, ThemeContext } from '.'
export default function styleHandler(target) {
  let {
    theme: { [target]: __styles },
  } = useContext(ThemeContext)
  if (!__styles) __styles = defaultTheme.button
  __styles = JSON.stringify(__styles).replace(/\\n/g, '').replace(/\s\s+/g, ' ')
  __styles = JSON.parse(__styles)
  return __styles
}
