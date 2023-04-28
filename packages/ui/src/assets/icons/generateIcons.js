const fs = require('fs')
const util = require('util')
var icons = require('./icons.json') //with path

let iconList = {}
let importList = []

//
// create icon .tsx files
//

Object.values(icons).map((icon) => {
  iconList[
    `Icon${icon.name}`
  ] = `src/components/Icon/icons/Icon${icon.name}/index.tsx`
  importList.push(`export * as Icon${icon.name} from './Icon${icon.name}'`)

  var dir = `src/components/Icon/icons/Icon${icon.name}`

  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) throw err
  })

  fs.writeFile(
    `${dir}/index.tsx`,
    `export { default as Icon${icon.name} } from './Icon${icon.name}'`,
    function (err) {
      if (err) return console.log(err)
    }
  )

  fs.writeFile(
    `${dir}/Icon${icon.name}.tsx`,
    `// This file is auto-generated
  // DO NOT EDIT
  import React from 'react'
  // @ts-ignore
  import Icon from '${icon.path}'
  import IconBase from './../../IconBase'

  function Icon${icon.name}(props: any) {
    return <IconBase icon={Icon} {...props} />
  }

  export default Icon${icon.name}
  `,
    function (err) {
      if (err) return console.log(err)
      // console.log(`${icon.name} > ${icon.path}`)
    }
  )
})

//
// create export file for icons
//

fs.writeFile(
  `src/components/Icon/icons/index.tsx`,
  `// export icons
${importList
  .map((icon) => {
    return `${icon}\n`
  })
  .join('')}`,
  function (err) {
    if (err) return console.log(err)
    // console.log(`wrote file for rollup`)
  }
)

//
// create input destinations for rollup
//

fs.writeFile(
  `src/assets/icons/icons.js`,
  `export default ${util.inspect(iconList)}`,
  function (err) {
    if (err) return console.log(err)
    // console.log(`wrote file for rollup`)
  }
)
