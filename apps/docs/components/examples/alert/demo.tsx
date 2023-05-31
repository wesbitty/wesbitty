import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Terminal, Waves } from 'lucide-react'

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}
