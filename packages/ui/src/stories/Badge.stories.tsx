import { Badge } from '../components/Badge'

export default {
  title: 'Displays/Badge',
  component: Badge,
}

const colors = [
  'brand',
  'red',
  'purple',
  'gray',
  'violet',
  'teal',
  'green',
  'cyan',
  'slate',
  'brown',
  'blue',
  'sky',
  'yellow',
  'amber',
]

const sizes: string[] = ['small', 'large']

export const Default = (args: any) => <Badge {...args}>Badge</Badge>
export const withColor = (args: any) => <Badge {...args}>Badge</Badge>
export const withDot = (args: any) => <Badge {...args}>Badge</Badge>
export const large = (args: any) => <Badge {...args}>Badge</Badge>
export const withDotLarge = (args: any) => <Badge {...args}>Badge</Badge>

export const withCustomClassNames = (args: any) => (
  <Badge {...args}>Badge</Badge>
)

export const allBadges = () => (
  <>
    <div className="flex flex-row gap-6 mx-auto my-4">
      {sizes.map((size, sizeIndex) => (
        <>
          <h3 className="text-gray-900">{size}</h3>
          <div className="flex flex-col gap-2">
            {colors.map((x, colorIndex) => (
              // @ts-ignore
              <Badge size={sizes[sizeIndex]} color={colors[colorIndex]}>
                Badge
              </Badge>
            ))}
          </div>
        </>
      ))}
    </div>
  </>
)

Default.args = {}

withColor.args = {
  color: 'red',
}

withDot.args = {
  dot: true,
}

large.args = {
  size: 'large',
}

withDotLarge.args = {
  size: 'large',
  dot: true,
}

withCustomClassNames.args = {
  className: 'border-sky-200 border-2',
}
