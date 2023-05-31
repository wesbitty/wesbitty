import { siteConfig } from '@/lib/utils/metadata'
import { Icons } from '@/components/icons'

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="flex items-center gap-x-1.5">
          <p className="text-sm text-muted-foreground">
            <a href="/terms" className="font-medium">
              Terms
            </a>
            {' | '}
            <a
              href="/policy"
              target="_blank"
              rel="noreferrer"
              className="font-medium"
            >
              Policy
            </a>
            {' | '}
            <a href="/security" className="font-medium">
              Security
            </a>
          </p>
          </div>
          
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2023{' '}
              <a
                href="/terms"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Wesbitty, Inc.
              </a>
            </p>
        </div>
      </div>
    </footer>
  )
}
