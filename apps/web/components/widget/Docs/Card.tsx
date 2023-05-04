import { Icon, IconName } from '../../Icon'
import { Label } from '../../Label'
import { ChevronLink } from '../../ChevronLink'

export const DocsCard: React.FC<
  React.PropsWithChildren<{
    title: string
    icon?: IconName | null
    label?: string | null
    subtitle?: string | null
    url?: { url: string; label: string }
  }>
> = ({ title, icon, label, subtitle, children, url }) => {
  return (
    <div className="flex flex-col">
      <div
        className={`grow border border-gray-100 bg-gray-50 p-6 py-4 dark:border-gray-800 dark:bg-gray-900 
        ${url ? 'rounded-t-2xl border-b-0' : 'rounded-2xl'} ${
          icon ? 'mt-6' : 'mt-0'
        }`}
      >
        {icon && (
          <div className="-mt-10 mb-4 block w-12 rounded-full bg-white dark:bg-gray-900">
            <div className="h-12 w-12 rounded-full border border-blue-200 bg-blue-100 p-2.5 text-blue-600 dark:border-blue-900 dark:bg-blue-900/50 dark:text-blue-500">
              <Icon name={icon} />
            </div>
          </div>
        )}
        <h3 className="mt-0">{title}</h3>
        {label && <Label text={label} />}
        {subtitle && (
          <div className="text-sm text-slate-1100 dark:text-slate-200">
            <p>{subtitle}</p>
          </div>
        )}
        {children && <div className="text-sm">{children}</div>}
      </div>
      {url && (
        <div className="rounded-b-2xl border border-blue-100 bg-blue-50 p-6 py-4 dark:border-blue-900/50 dark:bg-blue-900/20">
          <ChevronLink {...url} />
        </div>
      )}
    </div>
  )
}
