export default function Loader() {
  return (
    <div className="my-10 w-full">
      <div className="mx-auto h-10 w-60 animate-pulse bg-gray-200 md:rounded-md" />
      <div className="mx-auto my-12 w-full max-w-screen-xl md:w-3/4">
        <div className="sm:h-150 mx-auto h-80 w-full animate-pulse bg-gray-200 md:rounded-xl" />
        <div className="mx-auto mt-10 flex w-5/6 flex-col space-y-4 md:w-full">
          <div className="h-20 w-48 animate-pulse rounded-md bg-gray-200" />
          <div className="h-12 w-96 animate-pulse rounded-md bg-gray-200" />
          <div className="h-12 w-80 animate-pulse rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  )
}
