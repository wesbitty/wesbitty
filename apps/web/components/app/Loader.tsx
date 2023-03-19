export default function Loader() {
  const circleCommonClasses = 'h-4 w-4 bg-black rounded-full'

  return (
    <div className="flex h-screen">
      <div className="m-auto flex">
        <div className={`${circleCommonClasses} mr-2 animate-bounce`}></div>
        <div className={`${circleCommonClasses} animate-bounce200 mr-2`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  )
}
