interface ProductIcon {
  icon: string
}

function ProductIcon({ icon }: ProductIcon) {
  return (
    <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-800 text-white dark:bg-white">
      <svg
        className="h-4 w-4 stroke-white dark:stroke-black"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
      </svg>
    </div>
  )
}

export default ProductIcon
