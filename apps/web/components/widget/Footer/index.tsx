import { Section } from '../Section'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

const navLinks: Array<{ name: string; href: string }> = [
  { name: 'Terms', href: '/terms' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Security', href: '/security' },
  { name: 'Status', href: '/status' },
  { name: 'Docs', href: '/docs' },
  { name: 'Help Center', href: '/support' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'API', href: '/docs' },
  { name: 'Training', href: '/docs' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
]

const NavLink: FC<{ name?: string; hidename?: boolean; href: string }> = ({
  name,
  hidename = false,
  href,
}) => {
  return (
    <Link href={href} className="mr-3">
      {name && <span className={hidename ? 'sr-only' : ''}>{name}</span>}
    </Link>
  )
}

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div className="bg-slate-200 border-t mt-6">
      <div className="mx-auto flex flex-col h-16 items-center justify-center lg:flex-wrap-reverse  mt-6 py-10 mx-4">
        <ol className="list-style-none flex flex-wrap justify-center text-sm leading-loose text-brand-1100 font-medium">
          {navLinks.map(({ name, href }, index) => (
            <NavLink key={index} name={name} href={href} />
          ))}
        </ol>

        <div className="justify-start my-4 lg:my-0">
          <div className="flex items-center">
            <p className="text-scale-1100 text-sm leading-4 font-medium">
              © {currentYear} Wesbitty, Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
