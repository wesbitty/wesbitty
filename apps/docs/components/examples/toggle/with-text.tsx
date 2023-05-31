import { Toggle } from '@/components/ui/toggle'
import { Italic } from 'lucide-react'

export function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className="mr-2 h-4 w-4" />
      Italic
    </Toggle>
  )
}
