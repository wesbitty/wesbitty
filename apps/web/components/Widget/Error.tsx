interface Props {
  children: React.ReactNode
  className?: string
}

const currentYear = new Date().getFullYear()

export const ErrorWidget = ({ children, className }: Props) => (
  <>
    <main>{children}</main>
    <div className="border-t dark:border-dark flex justify-center">
      <p className="relative mb-0 self-center text-base py-4 text-gray-500 dark:text-dark-100">
        &copy; <span>{currentYear}</span> Wesbitty, Inc.
      </p>
    </div>
  </>
)
