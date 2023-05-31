import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/wesbitty.png" alt="@wesbitty" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
