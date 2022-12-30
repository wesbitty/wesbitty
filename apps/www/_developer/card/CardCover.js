import { Card } from '@wesbitty/ui'

export default function CardCover() {
  return (
    <Card
      title="Title of card"
      cover={[
        <img
          style={{ height: '256px', margin: 0 }}
          src="https://images.unsplash.com/photo-1557149289-0b6e90634e02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D"
        />,
      ]}
    >
      This is the content
    </Card>
  )
}
