import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { FormLayout } from '../../lib/Layout/FormLayout'
// @ts-ignore
// import UploadStyles from './Upload.module.css'
function Upload({ label, children }) {
  return _jsx('h1', { children: 'WIP' })
}
function Dragger({
  label,
  afterLabel,
  beforeLabel,
  layout,
  children,
  files,
  setFiles,
}) {
  // const [classes, setClasses] = useState([UploadStyles['wsb-upload-dragger']])
  // const draggedCssClass = UploadStyles['wsb-upload-dragger--dragged']
  const dragOver = (e) => {
    e.preventDefault()
    // if (!classes.includes(draggedCssClass)) {
    //   let originalClasses = classes
    //   originalClasses.push(draggedCssClass)
    //   setClasses(originalClasses)
    // }
  }
  const dragEnter = (e) => {
    e.preventDefault()
    // if (!classes.includes(draggedCssClass)) {
    //   let originalClasses = classes
    //   originalClasses.push(draggedCssClass)
    //   setClasses(originalClasses)
    // }
  }
  const dragLeave = (e) => {
    e.preventDefault()
    // if (classes.includes(draggedCssClass)) {
    //   let newClasses = classes
    //   for (var i = 0; i < newClasses.length; i++) {
    //     if (newClasses[i] === draggedCssClass) {
    //       newClasses.splice(i, 1)
    //     }
    //   }
    //   setClasses(newClasses)
    // }
  }
  const fileDrop = (e) => {
    e.preventDefault()
    const newFiles = e.dataTransfer.files
    setFiles([...files, ...newFiles])
  }
  const fileUpload = (e) => {
    e.preventDefault()
    const newFiles = e.target.files || []
    setFiles([...files, ...newFiles])
  }
  return _jsx(
    'div',
    Object.assign(
      {
        onDragOver: dragOver,
        onDragEnter: dragEnter,
        onDragLeave: dragLeave,
        onDrop: fileDrop,
      },
      {
        children: _jsx(
          FormLayout,
          Object.assign(
            {
              label: label,
              afterLabel: afterLabel,
              beforeLabel: beforeLabel,
              layout: layout,
            },
            {
              children: _jsxs(
                'label',
                Object.assign(
                  { htmlFor: 'file-upload' },
                  {
                    children: [
                      _jsx('input', {
                        id: 'file-upload',
                        name: 'file-upload',
                        type: 'file',
                        // className="sr-only"
                        onChange: fileUpload,
                      }),
                      children,
                    ],
                  }
                )
              ),
            }
          )
        ),
      }
    )
  )
}
Upload.Dragger = Dragger
export default Upload
