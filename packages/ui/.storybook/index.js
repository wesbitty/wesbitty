import { ThemeDecorator } from './decorator'

addDecorator(withKnobs)
addDecorator(ThemeDecorator)

configure(() => {
  loadStories()
}, module)
