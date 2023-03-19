import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Container = ({ children }: Props) => <div>{children}</div>

export default Container
