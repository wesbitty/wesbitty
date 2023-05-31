import { siteConfig } from '@/lib/utils/metadata'
import { Icons } from '@/components/icons'

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:gap-4">
          <div className="flex items-center gap-x-1.5">
            <p className="space-x-4 leading-loose text-center text-xs text-blue-500">
              <a
                href="/terms"
                rel="noreferrer"
                target="_blank"
                className="font-bold"
              >
                Terms
              </a>{' '}
              <a
                href="/security"
                className="font-bold"
                rel="noreferrer"
                target="_blank"
              >
                Security
              </a>{' '}
              <a
                href="/privacy"
                rel="noreferrer"
                target="_blank"
                className="font-bold"
              >
                Privacy
              </a>{' '}
              <a
                href="/status"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                Status
              </a>{' '}
              <a
                href="/pricing"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                Pricing
              </a>{' '}
              <a
                href="/support"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                Help Center
              </a>{' '}
              <a
                href="/api"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                Api
              </a>{' '}
              <a
                href="/docs"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                Docs
              </a>{' '}
              <a
                href="/training"
                className="font-bold"
                rel="noreferrer"
                target="_blank"
              >
                Training
              </a>
              <a
                href="/about"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                About
              </a>
            </p>
          </div>

          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023{' '}
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="font-medium"
            >
              Wesbitty, Inc.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
