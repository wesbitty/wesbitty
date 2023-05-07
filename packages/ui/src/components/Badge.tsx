import styleHandler from '../theme/handler'

interface BadgeProps {
  color?:
    | 'brand'
    | 'gray'
    | 'red'
    | 'purple'
    | 'violet'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'brown'
    | 'sky'
    | 'yellow'
    | 'amber'
    | 'slate'
  children: string | React.ReactNode
  size?: 'large' | 'small'
  dot?: boolean
  className?: string
}

export function Badge({
  color = 'brand',
  children,
  size,
  dot,
  className,
}: BadgeProps) {
  const __styles = styleHandler('badge')

  let classes = [__styles.base]

  if (color) {
    classes.push(__styles.color[color])
  }
  if (size === 'large') {
    classes.push(__styles.size.large)
  }
  if (className) {
    classes.push(className)
  }

  return (
    <span className={classes.join(' ')}>
      {dot && (
        <svg
          className={`${__styles.dot} ${__styles.color[color]}`}
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
      )}

      {children}
    </span>
  )
}
