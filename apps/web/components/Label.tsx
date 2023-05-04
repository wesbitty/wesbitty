import { FC } from 'react'

export const Label: FC<{ text: string; theme?: 'default' | 'primary' }> = ({
  text,
  theme = 'default',
}) => {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded px-1.5 align-middle font-medium leading-4 tracking-wide [font-size:10px] ${
        theme === 'default'
          ? 'border border-slate-900/70 text-slate-1100 dark:border-slate-200 dark:text-slate-100'
          : 'border border-purple-300 text-purple-400 dark:border-purple-800 dark:text-purple-600'
      }`}
    >
      {text}
    </span>
  )
}
