import { Button, IconMail } from '@wesbitty/ui'

export default function ButtonIcons() {
  return (
    <>
      <Button icon={<IconMail />}>Icon on the left</Button>
      <Button iconRight={<IconMail />}>Icon on the right</Button>
    </>
  )
}
