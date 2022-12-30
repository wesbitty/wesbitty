import React from 'react'
import ComponentIndex, { RawDeveloper } from './ComponentIndex'

// /* eslint import/no-webpack-loader-syntax: off */
import CodeBlock from './CodeBlock/CodeBlock'

// import Frame from "react-frame-component";

interface Props {
  children: any
  code: any
  sample: string
}

function CodeSample(props: Props) {
  // console.log(props.sample);

  // @ts-ignore
  const Sample = ComponentIndex[props.sample]
  // console.log(Sample);
  // console.log(props.children);

  if (!process.browser) {
    return <span>Loading</span>
  } else {
    // console.log("hello");
    if (document) {
      // const head = document.head;

      // console.log(document.head.innerHTML);
      // @ts-ignore
      // console.log(typeof head);
      // @ts-ignore
      // let initialContent = `<!DOCTYPE html><html><head></head><body><div id='mountHere'></div></body></html>`;
      return (
        <>
          <div className="m-0 rounded border bg-white dark:border-gray-600 dark:bg-gray-700">
            <div className="z-10 border-b px-8 py-12 dark:border-gray-600">
              {/* <Frame
              // @ts-ignore
              head={[head[0]]}
              mountTarget="#mountHere"
              initialContent={initialContent}
              > */}
              <Sample />
              {/* </Frame> */}
              {/* <Iframe content={<Sample />} /> */}
              {/* <iframe>
              <html>
                <body>
                  <Sample />
                </body>
              </html>
            </iframe> */}
              {/* <iframe srcdoc="<p>Hello world!</p>" /> */}
            </div>
            <div className="z-0">
              <CodeBlock
                lang="js"
                // @ts-ignore
                children={RawDeveloper[props.sample]}
              />
            </div>
          </div>
          {/* </div> */}
        </>
      )
    }
  }
}

export default CodeSample
