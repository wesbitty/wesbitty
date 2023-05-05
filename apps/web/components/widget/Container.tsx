import { ReactNode, FunctionComponent } from 'react'
import { FC } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FC<any> = ({ children }: Props) => {
  return (
    <>
      <div>{children}</div>
    </>
  )
}

export default Container
