import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { useEffect, useRef, useState } from 'react'
//@ts-ignore
import { useOnClickOutside } from './../../lib/Hooks'
import { DropdownContext } from './OverlayContext'
// @ts-ignore
import OverlayStyles from './Overlay.module.css'
import { Transition } from '@headlessui/react'
function Overlay({
  visible,
  overlay,
  children,
  placement = 'topCenter',
  onVisibleChange,
  disabled,
  triggerElement,
  overlayStyle,
  overlayClassName,
  transition,
}) {
  const ref = useRef(null)
  const [visibleState, setVisibleState] = useState(!!visible)
  let classes = [
    OverlayStyles['wsb-overlay-container'],
    OverlayStyles[`wsb-overlay-container--${placement}`],
  ]
  if (overlayClassName) classes.push(overlayClassName)
  function onToggle() {
    setVisibleState(!visibleState)
    if (onVisibleChange) onVisibleChange(visibleState)
  }
  // allow ovveride of Dropdown
  useEffect(() => {
    setVisibleState(!!visible)
  }, [visible])
  // detect clicks from outside
  useOnClickOutside(ref, () => {
    if (visibleState) {
      setVisibleState(!visibleState)
    }
  })
  const TriggerElement = () => {
    return _jsx(
      'div',
      Object.assign({ onClick: onToggle }, { children: triggerElement })
    )
  }
  return _jsxs(
    'div',
    Object.assign(
      { ref: ref, className: OverlayStyles['wsb-overlay'] },
      {
        children: [
          placement === 'bottomRight' ||
          placement === 'bottomLeft' ||
          placement === 'bottomCenter'
            ? _jsx(TriggerElement, {})
            : null,
          _jsx(
            Transition,
            Object.assign(
              {
                show: visibleState,
                enter: OverlayStyles[`wsb-overlay--enter`],
                enterFrom: OverlayStyles[`wsb-overlay--enterFrom`],
                enterTo: OverlayStyles[`wsb-overlay--enterTo`],
                leave: OverlayStyles[`wsb-overlay--leave`],
                leaveFrom: OverlayStyles[`wsb-overlay--leaveFrom`],
                leaveTo: OverlayStyles[`wsb-overlay--leaveTo`],
              },
              {
                children: _jsx(
                  'div',
                  Object.assign(
                    { className: classes.join(' '), style: overlayStyle },
                    {
                      children: _jsx(
                        DropdownContext.Provider,
                        Object.assign(
                          { value: { onClick: onToggle } },
                          { children: children }
                        )
                      ),
                    }
                  )
                ),
              }
            )
          ),
          placement === 'topRight' ||
          placement === 'topLeft' ||
          placement === 'topCenter'
            ? _jsx(TriggerElement, {})
            : null,
        ],
      }
    )
  )
}
export default Overlay
