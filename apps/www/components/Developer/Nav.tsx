import { Transition } from '@headlessui/react'
import { getStaticProps } from '../../pages/developer/index'

function Nav({ contents, show, setShow }: any) {
  return (
    <>
      <Transition
        show={show}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          onClick={setShow}
          className="fixed inset-0 z-30 bg-gray-600 bg-opacity-75"
          aria-hidden="true"
        ></div>
      </Transition>
      <Transition
        show={show}
        enter="transform transition ease-in-out duration-500 sm:duration-700"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-500 sm:duration-700"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="fixed inset-0 z-40 flex md:hidden" role="dialog" aria-modal="true">
          {/* // capture close clicks */}
          <div className="absolute h-full w-full" onClick={setShow}></div>
          {/* content of mobile menu */}
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-gray-800">
            {contents}
          </div>

          <div className="w-14 flex-shrink-0">
            {/* <!-- Force sidebar to shrink to fit close icon --> */}
          </div>
        </div>
      </Transition>
    </>
  )
}

export default Nav
