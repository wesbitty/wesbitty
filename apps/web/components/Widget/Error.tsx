interface Props {
  children: React.ReactNode
  className?: string
}

const currentYear = new Date().getFullYear()

export const ErrorWidget = ({ children, className }: Props) => (
  <>
    <main>{children}</main>
    <div className="dark:border-dark mt-10 flex justify-center border-t">
      <p className="dark:text-dark-100 mb-0 self-center py-4 text-base text-gray-500">
        &copy; <span>{currentYear}</span> Wesbitty, Inc.
      </p>
    </div>
  </>
)
