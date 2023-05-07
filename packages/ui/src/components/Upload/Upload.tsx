import React, { useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import styleHandler from '../../theme/handler'

function Upload({ label, children }: any) {
  return <h1>WIP</h1>
}

function Dragger({
  label,
  afterLabel,
  beforeLabel,
  layout,
  children,
  files,
  setFiles,
}: any) {
  let __styles = styleHandler('upload')

  const [classes, setClasses] = useState([__styles.dragger])

  const draggedCssClass = __styles.dragger_dragged

  const dragOver = (e: any) => {
    e.preventDefault()

    if (!classes.includes(draggedCssClass)) {
      let originalClasses = classes
      originalClasses.push(draggedCssClass)
      setClasses(originalClasses)
    }
  }

  const dragEnter = (e: any) => {
    e.preventDefault()
    if (!classes.includes(draggedCssClass)) {
      let originalClasses = classes
      originalClasses.push(draggedCssClass)
      setClasses(originalClasses)
    }
  }

  const dragLeave = (e: any) => {
    e.preventDefault()

    if (classes.includes(draggedCssClass)) {
      let newClasses = classes

      for (var i = 0; i < newClasses.length; i++) {
        if (newClasses[i] === draggedCssClass) {
          newClasses.splice(i, 1)
        }
      }
      setClasses(newClasses)
    }
  }

  const fileDrop = (e: any) => {
    e.preventDefault()
    const newFiles = e.dataTransfer.files
    setFiles([...files, ...newFiles])
  }

  const fileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newFiles = e.target.files || []
    setFiles([...files, ...newFiles])
  }

  return (
    <div
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
    >
      <FormLayout
        label={label}
        afterLabel={afterLabel}
        beforeLabel={beforeLabel}
        layout={layout}
      >
        <label htmlFor="file-upload" className={classes.join(' ')}>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            onChange={fileUpload}
          />

          {children}
        </label>
      </FormLayout>
    </div>
  )
}

Upload.Dragger = Dragger
export default Upload
