import React, { useEffect, useState } from 'react'

import announcement from '../../@wesbitty/data/Announcement.json'
import { IconChevronRight, IconX } from '@wesbitty/ui'
import { useRouter } from 'next/router'

const Announcement = () => {
  const [hidden, setHidden] = useState(true)

  const router = useRouter()

  // override to hide announcement
  if (!announcement.show) return null

  // construct the key for the announcement, based on the title text
  const announcementKey = 'announcement_' + announcement.text.replace(/ /g, '')

  // window.localStorage is kept inside useEffect
  // to prevent error
  useEffect(function () {
    if (!window.localStorage.getItem(announcementKey)) {
      return setHidden(false)
    }
  }, [])

  function handleClose(event: any) {
    event.stopPropagation()

    window.localStorage.setItem(announcementKey, 'hidden')
    return setHidden(true)
  }

  function handleLink() {
    router.push(announcement.link)
    window.localStorage.setItem(announcementKey, 'hidden')
  }

  if (hidden) {
    return null
  } else {
    return (
      <div
        onClick={handleLink}
        className="
          relative
          flex
          cursor-pointer flex-row space-x-3
          bg-gradient-to-r from-green-400        
          to-green-600 
          text-white hover:from-green-500 hover:to-green-700
        "
      >
        <div
          className="
            mx-auto flex items-center justify-center divide-green-400 p-3 text-sm font-medium lg:container lg:divide-x 
            lg:px-16 xl:px-20
          "
        >
          <span className="hidden px-3 lg:block">{announcement.text}</span>
          <span className="flex items-center space-x-2 px-3">
            <span>
              {
                // @ts-ignore
                announcement.cta
              }
            </span>
            <IconChevronRight size={14} />
          </span>
        </div>
        <div
          className="absolute right-4 flex h-full items-center opacity-50 transition-opacity hover:opacity-100"
          onClick={handleClose}
        >
          <IconX size={16} />
        </div>
      </div>
    )
  }
}

export default Announcement
