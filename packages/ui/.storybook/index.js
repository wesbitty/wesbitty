import { ThemeDecorator } from './ThemeDecorator'

addDecorator(withKnobs)
addDecorator(ThemeDecorator)

configure(() => {
  loadStories()
}, module)
