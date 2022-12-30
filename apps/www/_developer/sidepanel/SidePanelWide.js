import { Button, SidePanel, Typography } from '@wesbitty/ui'
import { useState } from 'react'

export default function SidePanelWide() {
  const [visible, setVisible] = useState(false)

  function toggle() {
    setVisible(!visible)
  }
  return (
    <>
      <Button type="default" onClick={toggle}>
        Open sidepanel
      </Button>
      <SidePanel wide visible={visible} title="Wide sidepanel" onCancel={toggle}>
        <Typography.Text>This is the content of the sidepanel</Typography.Text>
      </SidePanel>
    </>
  )
}
