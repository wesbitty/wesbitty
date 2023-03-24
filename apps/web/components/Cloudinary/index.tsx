/* eslint-disable */

import Head from 'next/head'
import type { MouseEvent, ReactNode } from 'react'
import type {
  CloudinaryCallbackImage,
  CloudinaryWidget,
  CloudinaryWidgetResult,
} from '~/types'

interface ChildrenProps {
  open: (e: MouseEvent) => void
}

interface CloudinaryUploadWidgetProps {
  callback: (image: CloudinaryCallbackImage) => void
  children: (props: ChildrenProps) => ReactNode
}

export default function CloudinaryUploadWidget({
  callback,
  children,
}: CloudinaryUploadWidgetProps) {
  function showWidget() {
    const widget: CloudinaryWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'wesbitty',
        uploadPreset: 'y11spdoh',
        cropping: true,
      },
      (error: unknown | undefined, result: CloudinaryWidgetResult) => {
        if (!error && result && result.event === 'success') {
          callback(result.info)
        }
      }
    )

    widget.open()
  }

  function open(e: MouseEvent) {
    e.preventDefault()
    showWidget()
  }

  return (
    <>
      <Head>
        <script
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        />
      </Head>
      {children({ open })}
    </>
  )
}
