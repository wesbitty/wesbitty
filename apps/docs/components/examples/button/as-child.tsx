import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}
