import { styleHandler } from '../../theme/handler'
import React from 'react'

export default function InputIconContainer({ icon }: any) {
  const __styles = styleHandler('inputIconContainer')
  return <div className={__styles.base}>{icon}</div>
}
