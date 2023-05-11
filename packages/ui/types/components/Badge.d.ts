/// <reference types="react" />
type Props = {
  color?:
    | 'brand'
    | 'scale'
    | 'tomato'
    | 'red'
    | 'crimson'
    | 'pink'
    | 'plum'
    | 'purple'
    | 'violet'
    | 'indigo'
    | 'blue'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'grass'
    | 'brown'
    | 'orange'
    | 'sky'
    | 'mint'
    | 'lime'
    | 'yellow'
    | 'amber'
    | 'gold'
    | 'bronze'
    | 'gray'
    | 'mauve'
    | 'slate'
    | 'sage'
    | 'olive'
    | 'sand'
  children: string | React.ReactNode
  size?: 'large' | 'small'
  dot?: boolean
  className?: string
}
export declare function Badge({
  color,
  children,
  size,
  dot,
  className,
}: Props): import('react/jsx-runtime').JSX.Element
export {}
